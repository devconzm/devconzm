import React from "react";
import { render } from "react-testing-library";
import Header from "../components/Header";

describe("Header Component", () => {
  const { getByTestId, container} = render(<Header />);
  const links = getByTestId("head-list");
  it("should render a list of links", () => {
    expect(links.children.length).toBe(7);
  });
  it("should contain the title DevCon19", () => {
    // expect(getByTitle(container, 'devcon')).toBeDefined()
    expect(links).toHaveTextContent("DevCon19");
  });
  it('should match the snapshot', () => {
      expect(render(<Header />)).toMatchSnapshot()
  });
});

