describe('Login Screen', () => {

  beforeEach(() => {
    const baseUrl = Cypress.config().baseUrl;
    cy.visit(baseUrl);
  });

  const email = Cypress.env("CYPRESS_USERNAME");
  const password = Cypress.env("CYPRESS_PASSWORD");
  const invalidPassword = Cypress.env("CYPRESS_INVALID_PASSWORD");

  it('Should display error message for invalid credentials', () => {
    cy.get('#email').should('exist').click().type(email);  
    cy.get('#password').should('exist').click().type(invalidPassword);
    cy.get('#submitBTN').should('exist').click();
    cy.contains('.text-group > h4','Invalid Login').should('be.visible', { timeout: 10000 });
  });

  it.only('Should be able to login with valid credentials and logout', () => {
    cy.get('#email').should('exist').click().type(email);
    cy.get('#password').should('exist').click().type(password);
    cy.get('#submitBTN').should('exist').click();
    cy.contains('Welcome Back').should('be.visible', { timeout: 10000 });
    

    cy.get('.bg-light').should('exist').click();
    cy.get(':nth-child(3) > .dropdown-menu > :nth-child(5) > .dropdown-item').should('exist', { timeout: 10000 })
    .click();

    cy.contains('.text-group > h4', 'Logout Successful', { timeout: 10000 }).should('be.visible');
 
  });
})