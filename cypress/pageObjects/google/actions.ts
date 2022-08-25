class GooglePageActions {
  openGooglePage() {
    cy.visit("/");
    return this;
  }

  typeInSearchInput(content: string) {
    cy.get(".gLFyf").type(content);
    return this;
  }

  clikcsOnGoogleSearchButton() {
    cy.get("input.gNO89b").eq(0).click({ force: true });
    return this;
  }
}

export default GooglePageActions;
