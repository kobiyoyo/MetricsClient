/// <reference types="cypress" />

describe('#category', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get(':nth-child(1) > :nth-child(1) > .anticon').click();
  });

  context('Successful', () => {
    it('create a category', () => {
      cy.get('[style="row-gap: 20px;"] > :nth-child(1) > .ant-row > .ant-col > .ant-input').type('Feather');
      cy.get('.ant-row-center > .ant-col-xs-7 > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn-primary')
        .click();
      cy.get('.ant-message-custom-content > :nth-child(2)').should('have.text', 'Category successfully created Feather category');
    });
  });
  context('unsuccessful', () => {
    it('create a category with less than 3 values', () => {
      cy.get('[style="row-gap: 20px;"] > :nth-child(1) > .ant-row > .ant-col > .ant-input').type('gn');
      cy.get('.ant-row-center > .ant-col-xs-7 > .ant-row > .ant-col > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-btn-primary')
        .click();
      cy.get('[style="row-gap: 20px;"] > :nth-child(1) > .ant-row > .ant-col > .ant-typography').should('have.text', 'Name must be at least 3 characters long');
    });
  });
});
