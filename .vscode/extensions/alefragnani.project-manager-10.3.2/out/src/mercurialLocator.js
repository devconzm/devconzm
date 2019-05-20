"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const abstractLocator_1 = require("./abstractLocator");
class MercurialLocator extends abstractLocator_1.AbstractLocator {
    getKind() {
        return "hg";
    }
    getDisplayName() {
        return "Mercurial";
    }
    isRepoDir(projectPath) {
        return fs.existsSync(path.join(projectPath, ".hg", "hgrc"));
    }
    decideProjectName(projectPath) {
        return path.basename(projectPath);
    }
}
exports.MercurialLocator = MercurialLocator;
//# sourceMappingURL=mercurialLocator.js.map