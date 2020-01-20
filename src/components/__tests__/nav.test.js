import React from "react";
import { mount } from "enzyme";

import Nav from "../nav";

let wrapper;

describe("header component", () => {
  beforeAll(() => {
    wrapper = mount(<Nav />);
  });

  it("should have img", () => {
    expect(wrapper.html()).to.contain("img");
  });

  it("nav should have 3 children", () => {
    expect(wrapper.find("section")).to.have.exactly(3);
  });
});
