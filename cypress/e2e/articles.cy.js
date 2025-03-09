/// <reference types="cypress" />

describe("Articles Page", () => {
  beforeEach(() => {
    cy.visit(Cypress.config("baseUrl") || "http://localhost:5173");

    cy.url().then((url) => cy.log(`Cypress is visiting: ${url}`));

    cy.intercept("GET", "**/mostpopular/v2/viewed/**").as("fetchArticles");

    cy.wait("@fetchArticles").its("response.statusCode").should("eq", 200);

    cy.get("body").then(($body) => {
      if ($body.find("[data-cy=articles-list]").length) {
        cy.log("✅ Articles list found");
      } else {
        cy.log("Articles list NOT found");
      }
    });

    cy.wait(2000);
  });

  it("should display the list of articles", () => {
    cy.get("body").then(($body) => {
      if ($body.find("[data-cy=articles-list]").length) {
        cy.log("Found articles list in DOM");
      } else {
        cy.log("Articles list NOT found in DOM");
      }
    });

    cy.get("[data-cy=articles-list]").should("be.visible");
    cy.get("[data-cy=article-item]").should("have.length.greaterThan", 0);
  });

  it("should navigate to an article detail page when clicked", () => {
    cy.get("[data-cy=article-item]").first().click();
    cy.url().should("include", "/article/");
    cy.get("[data-cy=article-title]").should("be.visible");
  });
});
