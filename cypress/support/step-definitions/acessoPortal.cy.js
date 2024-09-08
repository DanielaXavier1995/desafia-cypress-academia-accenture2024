import {
    Given,
    When,
  } from "cypress-cucumber-preprocessor/steps"
  
  Given("que acesso o portal Vehicle Insurance Application", () => {
    cy.visit("/")
  });
  
  
  When("clico no botao Automobile", () => {
    cy.clicarAutomobile()
  });
  