"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const abstractLocator_1 = require("./abstractLocator");
class SvnLocator extends abstractLocator_1.AbstractLocator {
    getKind() {
        return "svn";
    }
    getDisplayName() {
        return "SVN";
    }
    isRepoDir(projectPath) {
        return fs.existsSync(path.join(projectPath, ".svn", "pristine"));
    }
    decideProjectName(projectPath) {
        return path.basename(projectPath);
    }
}
exports.SvnLocator = SvnLocator;
//# sourceMappingURL=svnLocator.js.map