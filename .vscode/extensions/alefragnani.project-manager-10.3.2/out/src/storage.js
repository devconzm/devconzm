"use strict";
/*---------------------------------------------------------------------------------------------
*  Copyright (c) Alessandro Fragnani. All rights reserved.
*  Licensed under the MIT License. See License.md in the project root for license information.
*--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const PathUtils_1 = require("./PathUtils");
;
;
class ProjectItem {
    constructor(pname, prootPath) {
        this.name = pname;
        this.rootPath = prootPath;
        this.paths = [];
        this.group = "";
        this.enabled = true;
    }
}
class ProjectStorage {
    constructor(filename) {
        this.filename = filename;
        this.projectList = [];
    }
    /**
     * Adds a project to the list
     *
     * @param `name` The [Project Name](#Project.name)
     * @param `rootPath` The [Project Rooth Path](#Project.rootPath)
     * @param `rootPath` The [Project Group](#Project.group)
     *
     * @return `void`
     */
    push(name, rootPath, group) {
        this.projectList.push(new ProjectItem(name, rootPath));
        return;
    }
    /**
     * Removes a project to the list
     *
     * @param `name` The [Project Name](#Project.name)
     *
     * @return The [Project](#Project) that was removed
     */
    pop(name) {
        for (let index = 0; index < this.projectList.length; index++) {
            const element = this.projectList[index];
            if (element.name.toLowerCase() === name.toLowerCase()) {
                return this.projectList.splice(index, 1)[0];
            }
        }
    }
    /**
     * Removes a project to the list
     *
     * @param `name` The [Project Name](#Project.name)
     *
     * @return The [Project](#Project) that was removed
     */
    rename(oldName, newName) {
        // for (let index = 0; index < this.projectList.length; index++) {
        //     const element: Project = this.projectList[index];
        for (const element of this.projectList) {
            if (element.name.toLowerCase() === oldName.toLowerCase()) {
                element.name = newName;
                return;
            }
        }
    }
    /**
     * Toggle the enabled property of a project
     *
     * @param `name` The [Project Name](#Project.name)
     *
     * @return If the project is *now* enabled (or `undefined` if not found)
     */
    toggleEnabled(name) {
        for (const element of this.projectList) {
            if (element.name.toLowerCase() === name.toLowerCase()) {
                element.enabled = !element.enabled;
                return element.enabled;
            }
        }
    }
    /**
     * Adds another `path` to a project
     *
     * @param `name` The [Project Name](#Project.name)
     * @param `path` The [Project Path](#Project.paths)
     *
     * @return `void`
     */
    addPath(name, path) {
        // for (let index = 0; index < this.projectList.length; index++) {
        for (const element of this.projectList) {
            // let element: Project = this.projectList[index];
            if (element.name.toLowerCase() === name.toLowerCase()) {
                // this.projectList[index].paths.push(path);
                element.paths.push(path);
            }
        }
    }
    /**
     * Updates the `rootPath` of a project
     *
     * @param `name` The [Project Name](#Project.name)
     * @param `name` The [Project Root Path](#Project.rootPath)
     *
     * @return `void`
     */
    updateRootPath(name, path) {
        // for (let index = 0; index < this.projectList.length; index++) {
        for (const element of this.projectList) {
            // let element: Project = this.projectList[index];
            if (element.name.toLowerCase() === name.toLowerCase()) {
                // this.projectList[index].rootPath = path;
                element.rootPath = path;
            }
        }
    }
    /**
     * Removes a `path` from a project
     *
     * @param `name` The [Project Name](#Project.name)
     * @param `path` The [Project Path](#Project.paths)
     *
     * @return `void`
     */
    removePath(name, path) {
        // for (let index = 0; index < this.projectList.length; index++) {
        for (const element of this.projectList) {
            // let element: Project = this.projectList[index];
            if (element.name.toLowerCase() === name.toLowerCase()) {
                for (let indexPath = 0; indexPath < element.paths.length; indexPath++) {
                    const elementPath = element.paths[indexPath];
                    if (elementPath.toLowerCase() === path.toLowerCase()) {
                        // this.projectList[index].paths.splice(indexPath, 1);
                        element.paths.splice(indexPath, 1);
                        return;
                    }
                }
            }
        }
    }
    /**
     * Checks if exists a project with a given `name`
     *
     * @param `name` The [Project Name](#Project.name) to search for projects
     *
     * @return `true` or `false`
     */
    exists(name) {
        let found = false;
        // for (let i = 0; i < this.projectList.length; i++) {
        for (const element of this.projectList) {
            // let element = this.projectList[i];
            if (element.name.toLocaleLowerCase() === name.toLocaleLowerCase()) {
                found = true;
            }
        }
        return found;
    }
    /**
     * Checks if exists a project with a given `rootPath`
     *
     * @param `rootPath` The path to search for projects
     *
     * @return A [Project](#Project) with the given `rootPath`
     */
    existsWithRootPath(rootPath) {
        const rootPathUsingHome = PathUtils_1.PathUtils.compactHomePath(rootPath).toLocaleLowerCase();
        for (const element of this.projectList) {
            if ((element.rootPath.toLocaleLowerCase() === rootPath.toLocaleLowerCase()) || (element.rootPath.toLocaleLowerCase() === rootPathUsingHome)) {
                return element;
            }
        }
    }
    /**
     * Returns the number of projects stored in `projects.json`
     *
     * > The _dynamic projects_ like VSCode and Git aren't present
     *
     * @return The number of projects
     */
    length() {
        return this.projectList.length;
    }
    /**
     * Loads the `projects.json` file
     *
     * @return A `string` containing the _Error Message_ in case something goes wrong.
     *         An **empty string** if everything is ok.
     */
    load() {
        let items = [];
        // missing file (new install)
        if (!fs.existsSync(this.filename)) {
            this.projectList = items;
            return "";
        }
        try {
            items = JSON.parse(fs.readFileSync(this.filename).toString());
            // OLD format
            if ((items.length > 0) && (items[0].label)) {
                for (const element of items) {
                    this.projectList.push(new ProjectItem(element.label, element.description));
                }
                // save updated
                this.save();
            }
            else { // NEW format
                this.projectList = items.map(item => (Object.assign({ name: '', rootPath: '', paths: [], group: '', enabled: true }, item)));
            }
            this.updatePaths();
            return "";
        }
        catch (error) {
            console.log(error);
            return error.toString();
        }
    }
    /**
     * Reloads the `projects.json` file.
     *
     * > Using a forced _reload_ instead of a _watcher_
     *
     * @return `void`
     */
    reload() {
        let items = [];
        // missing file (new install)
        if (!fs.existsSync(this.filename)) {
            this.projectList = items;
        }
        else {
            items = JSON.parse(fs.readFileSync(this.filename).toString());
            this.projectList = items;
        }
    }
    /**
     * Saves the `projects.json` file to disk
     *
     * @return `void`
     */
    save() {
        fs.writeFileSync(this.filename, JSON.stringify(this.projectList, null, "\t"));
    }
    /**
     * Maps the projects to be used by a `showQuickPick`
     *
     * @return A list of projects `{[label, description]}` to be used on a `showQuickPick`
     */
    map() {
        const newItems = this.projectList.filter(item => item.enabled).map(item => {
            return {
                label: item.name,
                description: item.rootPath
            };
        });
        return newItems;
    }
    updatePaths() {
        for (const project of this.projectList) {
            project.rootPath = PathUtils_1.PathUtils.updateWithPathSeparatorStr(project.rootPath);
        }
    }
}
exports.ProjectStorage = ProjectStorage;
//# sourceMappingURL=storage.js.map