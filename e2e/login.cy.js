describe('Login Test', () => {
  it('User can login successfully', () => {
    cy.visit('https://www.saucedemo.com/')

    cy.get('input[placeholder="Username"]').type('standard_user')
    cy.get('input[placeholder="Password"]').type('secret_sauce')

     cy.get('input[type="submit"]').click();

    cy.contains('Sauce Labs Backpack').should('be.visible')
  });
})
