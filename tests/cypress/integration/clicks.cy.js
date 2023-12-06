// tests/cypress/e2e/clicks.cy.js

describe("Counting clicks", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("has a 'Click me!' button", () => {
    cy.get(".clicks button").should("have.text", "Click me!");
  });

  it("counts clicks", () => {
    cy.get(".clicks button").as("button");

    for (let i = 0; i < 5; i++) {
      cy.get("@button").click();
    }

    cy.get("#app-clicks-counter").should("have.text", "5");
  });
});