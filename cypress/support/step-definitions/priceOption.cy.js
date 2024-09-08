import {
    Then,
  } from "cypress-cucumber-preprocessor/steps"
  
  Then("escolho a faixa de preço na aba Select Price Option", () => {
     cy.selecionarPriceOption()
  });