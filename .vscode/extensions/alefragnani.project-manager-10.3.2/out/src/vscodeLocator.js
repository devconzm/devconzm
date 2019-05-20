"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const abstractLocator_1 = require("./abstractLocator");
class VisualStudioCodeLocator extends abstractLocator_1.AbstractLocator {
    getKind() {
        return "vscode";
    }
    getDisplayName() {
        return "VSCode";
    }
    isRepoDir(projectPath) {
        return fs.existsSync(path.join(projectPath, ".vscode"));
    }
    decideProjectName(projectPath) {
        return path.basename(projectPath);
    }
}
exports.VisualStudioCodeLocator = VisualStudioCodeLocator;
//# sourceMappingURL=vscodeLocator.js.map