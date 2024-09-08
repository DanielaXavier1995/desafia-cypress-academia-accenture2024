const INPUT_MAKE = '#make'
const INPUT_ENGINE_PERFORMANCE = '#engineperformance'
const INPUT_DATE_MANUFATURE = '#dateofmanufacture'
const INPUT_NUMBER_SEATS = '#numberofseats'
const INPUT_FUEL_TYPE = '#fuel'
const INPUT_LIST_PRICE = '#listprice'
const INPUT_ANNUAL_MILEAGE = '#annualmileage'
const INPUT_LICENSE_PLATE_NUMBER = '#licenseplatenumber'
const BTN_NEXT = '#nextenterinsurantdata'

Cypress.Commands.add("preencherVehicleData", () => {
    cy.fixture('vehicleData').then((vehicle) => {
      cy.get(INPUT_MAKE).select(vehicle.make)
      cy.get(INPUT_ENGINE_PERFORMANCE).type(vehicle.enginePerformance) 
      cy.get(INPUT_DATE_MANUFATURE).type(vehicle.dateOfManufacture) 
      cy.get(INPUT_NUMBER_SEATS).select(vehicle.numberOfSeats)
      cy.get(INPUT_FUEL_TYPE).select(vehicle.fuelType)
      cy.get(INPUT_LIST_PRICE).type(vehicle.listPrice) 
      cy.get(INPUT_LICENSE_PLATE_NUMBER).type(vehicle.licensePlateNumber)
      cy.get(INPUT_ANNUAL_MILEAGE).type(vehicle.annualMileage)
      })

    cy.get(BTN_NEXT).click();
})