const INPUT_FIRST_NAME = '#firstname'
const INPUT_LAST_NAME = '#lastname'
const INPUT_DATE_OF_BIRTH = '#birthdate'
const INPUT_GENDER = '#genderfemale'
const INPUT_STREET_ADDRESS = '#streetaddress'
const INPUT_COUNTRY = '#country'
const INPUT_ZIP_CODE = '#zipcode'
const INPUT_CITY = '#city'
const INPUT_OCCUPATION = '#occupation'
const INPUT_HOBBIES = '#speeding'
const INPUT_WEBSITE = '#website'
const BTN_NEXT = '#nextenterproductdata'

Cypress.Commands.add("preencherInsurantData", () => {

    cy.get(INPUT_FIRST_NAME).type(Cypress.env('firstName'))
    cy.get(INPUT_LAST_NAME).type(Cypress.env('lastName'))
    cy.get(INPUT_DATE_OF_BIRTH).type(Cypress.env('dateOfBirth'))
    cy.get(INPUT_GENDER).check({ force: true })
    cy.get(INPUT_STREET_ADDRESS).type('streetAddress')
    cy.get(INPUT_COUNTRY).select(Cypress.env('country'))
    cy.get(INPUT_ZIP_CODE).type(Cypress.env('zipCode'))
    cy.get(INPUT_CITY).type(Cypress.env('city'))
    cy.get(INPUT_HOBBIES).check({ force: true })
    cy.get(INPUT_WEBSITE).type(Cypress.env('website'))
    cy.get(INPUT_OCCUPATION).select(Cypress.env('occupation'))

    cy.get(BTN_NEXT).click()
})