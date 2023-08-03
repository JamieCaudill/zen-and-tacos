/* eslint-disable no-undef */
describe('error page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.intercept('GET', 'https://api.quotable.io/random', {statusCode: 500}).as('serverError')
  })

  it('should display an error message when there is a server side error', () => {
    cy.wait('@serverError')
    cy.get('.error__message').should('have.text', 'Sorry, something went wrong. Please try again later.')
    cy.get('.card__quote').should('not.exist')
    cy.get('.card__author').should('not.exist')
  })
})