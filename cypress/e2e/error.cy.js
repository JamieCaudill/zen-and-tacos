describe('error page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.quotable.io/random', {statusCode: 500}).as('getQuoteError')
  })
})