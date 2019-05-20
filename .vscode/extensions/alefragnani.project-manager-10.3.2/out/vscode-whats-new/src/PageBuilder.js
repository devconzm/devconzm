"use strict";
/*---------------------------------------------------------------------------------------------
*  Copyright (c) Alessandro Fragnani. All rights reserved.
*  Licensed under the MIT License. See License.md in the project root for license information.
*--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const ContentProvider_1 = require("./ContentProvider");
class WhatsNewPageBuilder {
    static newBuilder(htmlFile) {
        return new WhatsNewPageBuilder(htmlFile);
    }
    constructor(htmlFile) {
        this.htmlFile = fs.readFileSync(htmlFile).toString();
    }
    updateExtensionDisplayName(extensionDisplayName) {
        this.htmlFile = this.htmlFile.replace(/\$\{extensionDisplayName\}/g, extensionDisplayName);
        return this;
    }
    updateExtensionName(extensionName) {
        this.htmlFile = this.htmlFile.replace(/\$\{extensionName\}/g, extensionName);
        return this;
    }
    updateExtensionVersion(extensionVersion) {
        this.htmlFile = this.htmlFile.replace("${extensionVersion}", extensionVersion.slice(0, extensionVersion.indexOf(".")));
        return this;
    }
    updateRepositoryUrl(repositoryUrl) {
        this.htmlFile = this.htmlFile.replace(/\$\{repositoryUrl\}/g, repositoryUrl);
        return this;
    }
    updateRepositoryIssues(repositoryIssues) {
        this.htmlFile = this.htmlFile.replace("${repositoryIssues}", repositoryIssues);
        return this;
    }
    updateRepositoryHomepage(repositoryHomepage) {
        this.htmlFile = this.htmlFile.replace("${repositoryHomepage}", repositoryHomepage);
        return this;
    }
    updateCSS(cssUrl) {
        this.htmlFile = this.htmlFile.replace("${cssUrl}", cssUrl);
        return this;
    }
    updateHeader(header) {
        this.htmlFile = this.htmlFile.replace("${headerLogo}", header.logo.src);
        this.htmlFile = this.htmlFile.replace("${headerWidth}", header.logo.width.toString());
        this.htmlFile = this.htmlFile.replace("${headerHeight}", header.logo.height.toString());
        this.htmlFile = this.htmlFile.replace("${headerMessage}", header.message);
        return this;
    }
    updateChangeLog(changeLog) {
        let changeLogString = "";
        for (const cl of changeLog) {
            const badge = this.getBadgeFromChangeLogKind(cl.kind);
            changeLogString = changeLogString.concat(`<li><span class="changelog__badge changelog__badge--${badge}">${cl.kind}</span>
                    ${cl.message}
                </li>`);
        }
        this.htmlFile = this.htmlFile.replace("${changeLog}", changeLogString);
        return this;
    }
    updateSponsors(sponsors) {
        if (sponsors.length === 0) {
            this.htmlFile = this.htmlFile.replace("${sponsors}", "");
            return this;
        }
        let sponsorsString = `<p>
          <h2>Sponsors</h2>`;
        for (const sp of sponsors) {
            sponsorsString = sponsorsString.concat(`<a title="${sp.title}" href="${sp.link}">
                    <img src="${sp.image}" width="${sp.width}%"/>
                </a>
                ${sp.message} 
                ${sp.extra}`);
        }
        sponsorsString = sponsorsString.concat("</p>");
        this.htmlFile = this.htmlFile.replace("${sponsors}", sponsorsString);
        return this;
    }
    build() {
        return this.htmlFile.toString();
    }
    getBadgeFromChangeLogKind(kind) {
        switch (kind) {
            case ContentProvider_1.ChangeLogKind.NEW:
                return "added";
            case ContentProvider_1.ChangeLogKind.CHANGED:
                return "changed";
            case ContentProvider_1.ChangeLogKind.FIXED:
                return "fixed";
            default:
                break;
        }
    }
}
exports.WhatsNewPageBuilder = WhatsNewPageBuilder;
//# sourceMappingURL=PageBuilder.js.map