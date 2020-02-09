describe("home page", () => {
  beforeEach(() => {
    // visit root baseURL
    cy.visit("/");
  });

  it('should have text "Developer Conference Zambia"', () => {
    cy.contains("Developer Conference Zambia");
  });

  it("header should have 5 anchor tags", () => {
    cy.get("header a").should("have.length", 5);
  });

  it("footer should have 7 anchor tags", () => {
    cy.get("footer a").should("have.length", 7);
  });
});
