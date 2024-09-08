const BTN_AUTOMOBILE = '#nav_automobile'

Cypress.Commands.add("clicarAutomobile", () => {
        cy.get(BTN_AUTOMOBILE).click();
    })