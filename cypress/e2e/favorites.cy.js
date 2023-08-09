/* eslint-disable no-undef */
describe('favorites page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', 'https://api.themotivate365.com/stoic-quote', {fixture: 'randomQuote.json'}).as('getRandomQuote')
  })
  it('should display a message when there are no favorites', () => {
    cy.get('.header__button').click()
    cy.get('.favorites__message').should('have.text', 'You have no favorites yet. Click the heart on a quote to add it to your favorites.')
  })
  it('should display a message when the heart is clicked', () => {
    cy.wait('@getRandomQuote')
    cy.get('.card__favorite').click()
    cy.wait('@getRandomQuote')
    cy.get('.card__message').first().should('have.text', 'Saved to favorites!')
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
  it('should take user back to home page when logo is clicked', () => {
    cy.get('.header__button').click()
    cy.get('.favorites__title').should('have.text', 'Favorites');
    cy.get('.header__logo').click()
    cy.get('.card__quote').should('have.text', "The gambling known as business looks with austere disfavor upon the business known as gambling.")
  })
})