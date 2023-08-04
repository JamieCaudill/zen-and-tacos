/* eslint-disable no-undef */
describe('error page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.intercept('GET', 'https://api.themotivate365.com/stoic-quote', {statusCode: 500}).as('serverError')
  })
  it('should display an error message when there is a server side error', () => {
    cy.visit('http://localhost:3000')
    cy.wait('@serverError')
    cy.get('.error__message').should('have.text', 'Sorry, something went wrong. Please try again later.')
    cy.get('.card__quote').should('not.exist')
    cy.get('.card__author').should('not.exist')
  })
  it('should reroute to a 404 page when there is bad routing', () => {
    cy.visit('http://localhost:3000/thisisabadroute')
    cy.get('.not-found__text').should('have.text', '404: Page Not Found')
  })
})