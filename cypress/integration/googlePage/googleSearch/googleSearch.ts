import GooglePageActions from "@pageObjects/google/actions";
import GooglePageAssertions from "@pageObjects/google/assertions";
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const googlePageActions = new GooglePageActions();
const googlePageAssertions = new GooglePageAssertions();

Given("A user was on the Google page", () => {
  googlePageActions.openGooglePage();
});

When("The user fills in the Search field with {string}", (content: string) => {
  googlePageActions.typeInSearchInput(content);
});

When("The user presses the enter key", () => {
  googlePageActions.typeInSearchInput(`{enter}`);
});

When("The user clicks on the the Google Search button", () => {
  googlePageActions.clikcsOnGoogleSearchButton();
});

Then("The Foothill Solutions website should be appear", () => {
  googlePageAssertions.checkSearchResultContainsFoothillWebsite(
    "Foothill Technology Solutions",
    true
  );
});

Then("The Facebook page should be shown in the results", () => {
  //made it like this because the value sometimes appears as Foothill Technology Solutions - Facebook,
  //and other times as Foothill Technology Solutions - Home - Facebook
  googlePageAssertions
    .checkSearchResultContainsFoothillFacebook(
      "Foothill Technology Solutions",
      true
    )
    .checkSearchResultContainsFoothillFacebook("Facebook", true);
});
