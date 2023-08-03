/* eslint-disable no-undef */
describe('favorites page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', 'https://api.quotable.io/random', {fixture: 'randomQuote.json'}).as('getRandomQuote')
  })
  it('should display a message when there are no favorites', () => {
    cy.get('.header__button').click()
    cy.get('.favorites__message').should('have.text', 'You have no favorites yet. Click the heart on a quote to add it to your favorites.')
  })
  it('should display a message when the heart is clicked', () => {
    cy.get('.card__favorite').click()
    cy.get('.card__message').should('have.text', 'Saved to favorites!')
  })
  it('should display saved quote on favorites page', () => {
    cy.get('.card__favorite').click()
    cy.get('.header__button').click()
    cy.get('.favorites__quote').should('have.text', "The gambling known as business looks with austere disfavor upon the business known as gambling.")
    cy.get('.favorites__author').should('have.text', '- Ambrose Bierce')
  })
  it('should remove quote from favorites page when heart is clicked', () => {
    cy.get('.card__favorite').click()
    cy.get('.header__button').click()
    cy.get('.favorites__quote').should('have.text', "The gambling known as business looks with austere disfavor upon the business known as gambling.")
    cy.get('.card__favorite').click()
    cy.get('.favorites__message').should('have.text', 'You have no favorites yet. Click the heart on a quote to add it to your favorites.')
  })
})