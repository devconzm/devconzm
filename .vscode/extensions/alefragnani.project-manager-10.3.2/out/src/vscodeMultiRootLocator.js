"use strict";
var path = require("path");
;
var VisualStudioCodeMultiRootLocator = (function () {
    function VisualStudioCodeMultiRootLocator() {
        this.dirList = [];
    }
    VisualStudioCodeMultiRootLocator.prototype.locateProjects = function (workspaces) {
        var _this = this;
        this.workspaces = workspaces;
        return new Promise(function (resolve, reject) {
            // initialize
            _this.dirList = [];
            //     "file:///c:/Users/alefr/Documents/GitHub/_forks/vscode-go": {
            //         "folders": [
            //             "file:///c:/Users/alefr/Documents/GitHub/_forks/vscode-docs",
            //             "file:///c:/Users/alefr/Documents/GitHub/_forks/vscode-extension-samples"
            //         ]
            //     }
            // loop multi-root projects
            for (var property in workspaces) {
                if (workspaces.hasOwnProperty(property)) {
                    _this.addToList(_this.removeURI(property), _this.decideProjectName(property));
                }
            }
            resolve(_this.dirList);
            return;
        });
    };
    VisualStudioCodeMultiRootLocator.prototype.addToList = function (projectPath, projectName) {
        if (projectName === void 0) { projectName = null; }
        this.dirList.push({
            fullPath: projectPath,
            name: projectName === null ? path.basename(projectPath) : projectName
        });
        return;
    };
    VisualStudioCodeMultiRootLocator.prototype.removeURI = function (projectPath) {
        var normPath = projectPath.substr(8); // file:///
        if (process.platform === "win32") {
            normPath = normPath.replace(/\//g, "\\");
        }
        return normPath;
    };
    VisualStudioCodeMultiRootLocator.prototype.decideProjectName = function (projectPath) {
        return path.basename(projectPath);
    };
    return VisualStudioCodeMultiRootLocator;
}());
exports.VisualStudioCodeMultiRootLocator = VisualStudioCodeMultiRootLocator;
//# sourceMappingURL=vscodeMultiRootLocator.js.map