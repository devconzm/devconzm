"use strict";
/*---------------------------------------------------------------------------------------------
*  Copyright (c) Alessandro Fragnani. All rights reserved.
*  Licensed under the MIT License. See License.md in the project root for license information.
*--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
class StringStack {
    constructor() {
        this.stack = [];
    }
    /**
     * fromString
     */
    fromString(input) {
        if (input !== "") {
            this.stack = JSON.parse(input);
        }
    }
    /**
     * toString
     */
    toString() {
        return JSON.stringify(this.stack);
    }
    /**
     * push
     */
    push(item) {
        const index = this.stack.indexOf(item);
        if (index > -1) {
            this.stack.splice(index, 1);
        }
        this.stack.push(item);
    }
    /**
     * pop
     */
    pop(item) {
        if (!item) {
            return this.stack.pop();
        }
        else {
            for (let index = 0; index < this.stack.length; index++) {
                const element = this.stack[index];
                if (element === item) {
                    return this.stack.splice(index, 1)[0];
                }
            }
        }
    }
    /**
     * Rename an item in the stack
     * @param oldItem string
     * @param newItem string
     */
    rename(oldItem, newItem) {
        for (let iterator of this.stack) {
            if (iterator === oldItem) {
                iterator = newItem;
            }
        }
    }
    /**
     * length
     */
    length() {
        return this.stack.length;
    }
    /**
     * getItem
     */
    getItem(index) {
        if (index < 0) {
            return "";
        }
        if (this.stack.length === 0) {
            return "";
        }
        return this.stack[index];
    }
}
exports.StringStack = StringStack;
//# sourceMappingURL=stack.js.map