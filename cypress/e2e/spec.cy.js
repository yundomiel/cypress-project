describe('Login Screen', () => {
  it('Should display error message for invalid credentials', () => {
    const baseUrl = Cypress.config().baseUrl;
    cy.visit(baseUrl);
    cy.pause(10000);   
  })

  it('Should be able to login with valid credentials', () => {
 
  })
})