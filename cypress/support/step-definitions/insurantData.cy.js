import {
    And,
  } from "cypress-cucumber-preprocessor/steps"
  
  And("preencho os dados obrigatorios na aba Enter Insurant Data", () => {
    cy.preencherInsurantData()
  });