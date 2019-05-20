"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const vscode = require("vscode");
const walker = require("walker");
const PathUtils_1 = require("./PathUtils");
const CACHE_FILE = "projects_cache_";
;
class CustomRepositoryDetector {
    constructor(paths) {
        this.paths = paths;
    }
    isRepoDir(projectPath) {
        return fs.existsSync(path.join(projectPath, ...this.paths));
    }
    decideProjectName(projectPath) {
        return path.basename(projectPath);
    }
}
exports.CustomRepositoryDetector = CustomRepositoryDetector;
class CustomProjectLocator {
    constructor(kind, displayName, icon, repositoryDetector) {
        this.kind = kind;
        this.displayName = displayName;
        this.icon = icon;
        this.repositoryDetector = repositoryDetector;
        this.dirList = [];
        this.processDirectory = (absPath, stat) => {
            // vscode.window.setStatusBarMessage(absPath, 600);
            if (this.repositoryDetector.isRepoDir(absPath)) {
                this.addToList(absPath, this.repositoryDetector.decideProjectName(absPath));
            }
        };
        this.maxDepth = -1;
        this.ignoredFolders = [];
        this.useCachedProjects = true;
        this.alreadyLocated = false;
        this.baseFolders = [];
        this.refreshConfig();
    }
    getPathDepth(s) {
        return s.split(path.sep).length;
    }
    isMaxDeptReached(currentDepth, initialDepth) {
        return (this.maxDepth > 0) && ((currentDepth - initialDepth) > this.maxDepth);
    }
    isFolderIgnored(folder) {
        return this.ignoredFolders.indexOf(folder) !== -1;
    }
    isAlreadyLocated() {
        return this.useCachedProjects && this.alreadyLocated;
    }
    setAlreadyLocated(al) {
        if (this.useCachedProjects) {
            this.alreadyLocated = al;
            if (this.alreadyLocated) {
                const cacheFile = this.getCacheFile();
                fs.writeFileSync(cacheFile, JSON.stringify(this.dirList, null, "\t"), { encoding: "utf8" });
            }
        }
    }
    clearDirList() {
        this.dirList = [];
    }
    initializeCfg(kind) {
        if (!this.useCachedProjects) {
            this.clearDirList();
        }
        else {
            const cacheFile = this.getCacheFile();
            if (fs.existsSync(cacheFile)) {
                this.dirList = JSON.parse(fs.readFileSync(cacheFile, "utf8"));
                this.setAlreadyLocated(true);
            }
        }
    }
    locateProjects() {
        let projectsDirList = this.baseFolders;
        projectsDirList = PathUtils_1.PathUtils.updateWithPathSeparator(projectsDirList);
        this.baseFolders = projectsDirList.slice();
        return new Promise((resolve, reject) => {
            if (projectsDirList.length === 0) {
                resolve([]);
                return;
            }
            this.initializeCfg(this.kind);
            if (this.isAlreadyLocated()) {
                resolve(this.dirList);
                return;
            }
            const promises = [];
            this.clearDirList();
            projectsDirList.forEach((projectBasePath) => {
                const expandedBasePath = PathUtils_1.PathUtils.expandHomePath(projectBasePath);
                if (!fs.existsSync(expandedBasePath)) {
                    // vscode.window.setStatusBarMessage("Directory " + expandedBasePath + " does not exists.", 1500);
                    return;
                }
                const depth = this.getPathDepth(expandedBasePath);
                const promise = new Promise((resolve, reject) => {
                    try {
                        walker(expandedBasePath)
                            .filterDir((dir, stat) => {
                            return !(this.isFolderIgnored(path.basename(dir)) ||
                                this.isMaxDeptReached(this.getPathDepth(dir), depth));
                        })
                            .on("dir", this.processDirectory)
                            .on("error", this.handleError)
                            .on("end", () => {
                            resolve();
                        });
                    }
                    catch (error) {
                        reject(error);
                    }
                });
                promises.push(promise);
            });
            Promise.all(promises)
                .then(() => {
                // vscode.window.setStatusBarMessage("Searching folders completed", 1500);
                this.setAlreadyLocated(true);
                resolve(this.dirList);
            })
                .catch(error => { vscode.window.showErrorMessage("Error while loading projects."); });
        });
    }
    addToList(projectPath, projectName = null) {
        this.dirList.push({
            fullPath: projectPath,
            name: projectName === null ? path.basename(projectPath) : projectName
        });
        return;
    }
    handleError(err) {
        console.log("Error walker:", err);
    }
    refreshProjects(forceRefresh) {
        return new Promise((resolve, reject) => {
            if (!forceRefresh && !this.refreshConfig()) {
                resolve(false);
            }
            this.clearDirList();
            const cacheFile = this.getCacheFile();
            if (fs.existsSync(cacheFile)) {
                fs.unlinkSync(cacheFile);
            }
            this.setAlreadyLocated(false);
            this.locateProjects()
                .then(() => {
                resolve(true);
            })
                .catch(error => {
                reject(error);
            });
        });
    }
    existsWithRootPath(rootPath) {
        // it only works if using `cache`
        this.initializeCfg(this.kind);
        if (!this.isAlreadyLocated()) {
            return null;
        }
        const rootPathUsingHome = PathUtils_1.PathUtils.compactHomePath(rootPath).toLocaleLowerCase();
        for (const element of this.dirList) {
            if ((element.fullPath.toLocaleLowerCase() === rootPath.toLocaleLowerCase()) || (element.fullPath.toLocaleLowerCase() === rootPathUsingHome)) {
                return {
                    rootPath: element.fullPath,
                    name: element.name,
                    group: "",
                    paths: []
                };
            }
        }
    }
    getChannelPath() {
        if (vscode.env.appName.indexOf("Insiders") > 0) {
            return "Code - Insiders";
        }
        else {
            return "Code";
        }
    }
    getCacheFile() {
        let cacheFile;
        const appdata = process.env.APPDATA || (process.platform === "darwin" ? process.env.HOME + "/Library/Application Support" : "/var/local");
        const channelPath = this.getChannelPath();
        cacheFile = path.join(appdata, channelPath, "User", CACHE_FILE + this.kind + ".json");
        if ((process.platform === "linux") && (!fs.existsSync(cacheFile))) {
            cacheFile = path.join(PathUtils_1.homeDir, ".config/", channelPath, "User", CACHE_FILE + this.kind + ".json");
        }
        return cacheFile;
    }
    refreshConfig() {
        const config = vscode.workspace.getConfiguration("projectManager");
        let refreshedSomething = false;
        let currentValue = null;
        currentValue = config.get(this.kind + ".baseFolders");
        if (!this.arraysAreEquals(this.baseFolders, currentValue)) {
            this.baseFolders = currentValue;
            refreshedSomething = true;
        }
        currentValue = config.get(this.kind + ".ignoredFolders", []);
        if (!this.arraysAreEquals(this.ignoredFolders, currentValue)) {
            this.ignoredFolders = currentValue;
            refreshedSomething = true;
        }
        currentValue = config.get(this.kind + ".maxDepthRecursion", -1);
        if (this.maxDepth !== currentValue) {
            this.maxDepth = currentValue;
            refreshedSomething = true;
        }
        currentValue = config.get("cacheProjectsBetweenSessions", true);
        if (this.useCachedProjects !== currentValue) {
            this.useCachedProjects = currentValue;
            refreshedSomething = true;
        }
        return refreshedSomething;
    }
    arraysAreEquals(array1, array2) {
        if (!array1 || !array2) {
            return false;
        }
        if (array1.length !== array2.length) {
            return false;
        }
        for (let i = 0, l = array1.length; i < l; i++) {
            if (array1[i] instanceof Array && array2[i] instanceof Array) {
                if (!array1[i].equals(array2[i])) {
                    return false;
                }
            }
            else {
                if (array1[i] !== array2[i]) {
                    return false;
                }
            }
        }
        return true;
    }
}
exports.CustomProjectLocator = CustomProjectLocator;
//# sourceMappingURL=CustomProjectLocator.js.map