class GooglePageAssertions {
  checkSearchResultContainsFoothillWebsite(value: string, isContain: boolean) {
    cy.get("h3")
      .eq(0)
      .should(isContain ? "contain" : "not.contain", value);
    return this;
  }

  checkSearchResultContainsFoothillFacebook(value: string, isContain: boolean) {
    cy.get("h3")
      .eq(5)
      .should(isContain ? "contain" : "not.contain", value);
    return this;
  }
}

export default GooglePageAssertions;
