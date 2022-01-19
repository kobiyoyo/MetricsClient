/// <reference types="cypress" />

describe('#site', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  after(() => {
    cy.get(':nth-child(2) > .ant-card > .ant-card-actions > :nth-child(2) > :nth-child(1) > .anticon').click();
    cy.get('.ant-modal-confirm-btns > .ant-btn-primary').click();
  });

  context('Successful', () => {
    it('create a site', () => {
      cy.get('.ant-input').type('Chocolate');
      cy.get('.ant-btn-primary').click();
      cy.get('.ant-message-custom-content > :nth-child(2)').should('have.text', 'Site successfully created Chocolate site');
    });
  });
  context('unsuccessful', () => {
    it('create a site with less than 3 values', () => {
      cy.get('.ant-input').type('Ch');
      cy.get('.ant-btn-primary').click();
      cy.get('[style="row-gap: 20px;"] > :nth-child(1) > .ant-row > .ant-col > .ant-typography')
        .should('have.text', 'Name must be at least 3 characters long');
    });
  });
});
