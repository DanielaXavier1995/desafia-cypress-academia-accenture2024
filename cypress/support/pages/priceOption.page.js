const INPUT_PRICE_OPTION = '[value="Gold"]'
const BTN_NEXT = '#nextsendquote'

Cypress.Commands.add("selecionarPriceOption", () => {
    
      cy.get(INPUT_PRICE_OPTION).check({ force: true })
      
      cy.get(BTN_NEXT).click()
    
})