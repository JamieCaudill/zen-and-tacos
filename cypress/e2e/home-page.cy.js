/* eslint-disable no-undef */
describe('home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.intercept('GET', 'https://api.quotable.io/random', {fixture: 'randomQuote.json'}).as('getRandomQuote')
  })
  it('should have a header with a logo, title, and button', () => {
    cy.get('.header').should('be.visible')
    cy.get('.header__logo').should('be.visible')
    cy.get('.header__text').should('have.text', 'Zen and the Art of Tacos');
    cy.get('.header__button').should('have.text', 'Favorites');
  })
  it ('should have a card with a quote, author, and button', () => {
    cy.get('.card').should('be.visible')
    cy.get('.card__quote').should('have.text', "The gambling known as business looks with austere disfavor upon the business known as gambling.")
    cy.get('.card__author').should('have.text', '- Ambrose Bierce')
    cy.get('.card__button').should('exist')
    cy.get('.card__favorite').should('have.text', '🤍')
  })
})