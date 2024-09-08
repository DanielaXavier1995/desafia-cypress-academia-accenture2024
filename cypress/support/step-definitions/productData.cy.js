import {
    And,
  } from "cypress-cucumber-preprocessor/steps"
  
  And("preencho os dados obrigatorios na aba Enter Product Data", () => {
    cy.preencherProductData()
  });
  