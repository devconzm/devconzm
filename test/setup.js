import "jest-enzyme";

import chai from "chai";
import chaiEnzyme from "chai-enzyme";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

chai.use(chaiEnzyme()); // Note the invocation at the end

/**
 * Set up DOM in node.js environment for Enzyme to mount to
 */
const { JSDOM } = require("jsdom");

const jsdom = new JSDOM("<!doctype html><html><body></body></html>");
const { window } = jsdom;

function copyProps(src, target) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target)
  });
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: "node.js"
};
copyProps(window, global);

/**
 * Set up Enzyme to mount to DOM, simulate events,
 * and inspect the DOM in tests.
 */
Enzyme.configure({ adapter: new Adapter() });

// Make sure chai and jasmine ".not" play nice together
const originalNot = Object.getOwnPropertyDescriptor(chai.Assertion.prototype, "not").get;
Object.defineProperty(chai.Assertion.prototype, "not", {
  get() {
    Object.assign(this, this.assignedNot);
    return originalNot.apply(this);
  },
  set(newNot) {
    this.assignedNot = newNot;
    return newNot;
  }
});

// Combine both jest and chai matchers on expect
const jestExpect = global.expect;

global.expect = actual => {
  const originalMatchers = jestExpect(actual);
  const chaiMatchers = chai.expect(actual);
  const combinedMatchers = Object.assign(chaiMatchers, originalMatchers);
  return combinedMatchers;
};

Object.keys(jestExpect).forEach(key => (global.expect[key] = jestExpect[key]));
