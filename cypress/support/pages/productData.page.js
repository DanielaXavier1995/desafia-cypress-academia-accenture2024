const INPUT_START_DATE = '#startdate'
const INPUT_INSURANCE_SUM = '#insurancesum'
const INPUT_MERIT_RATING = '#meritrating'
const INPUT_DAMAGE_INSURANCE = '#damageinsurance'
const INPUT_OPTIONAL_PRODUCTS = '[id="EuroProtection"]'
const INPUT_COURTESY_CAR = '#courtesycar'
const BTN_NEXT = '#nextselectpriceoption'



Cypress.Commands.add("preencherProductData", () => {
    cy.fixture('productData').then((product) => {
      cy.get(INPUT_START_DATE).type(product.startDate);
      cy.get(INPUT_INSURANCE_SUM).select(product.insuranceSum) 
      cy.get(INPUT_MERIT_RATING).select(product.meritRating);
      cy.get(INPUT_DAMAGE_INSURANCE).select(product.damageInsurance)
      cy.get(INPUT_OPTIONAL_PRODUCTS).check({ force: true })
      cy.get(INPUT_COURTESY_CAR).select(product.courtesyCar) 
      })

    cy.get(BTN_NEXT).click();
})