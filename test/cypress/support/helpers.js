/**
 * Disable css smooth scroll, that doesn't plays nice with cypress.
 * See https://github.com/cypress-io/cypress/issues/3200
 */
export const disableSmoothScroll = () => {
  cy.document().then(document => {
    const node = document.createElement("style");
    node.innerHTML = "html { scroll-behavior: inherit !important; }";
    document.body.appendChild(node);
  });
};
