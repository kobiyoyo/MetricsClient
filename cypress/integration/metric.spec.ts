/// <reference types="cypress" />

describe('#metric', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get(':nth-child(1) > :nth-child(1) > .anticon').click();
  });

  context('Successful', () => {
    it('create a metric', () => {
      cy.get('.mb-5 > .ant-input').type('6');
      cy.get('.ant-select-selection-item').click();
      cy.get('[title="Feather"]').click();
      cy.get('.ant-btn-primary').first().click();
      cy.get('.ant-table-row > :nth-child(2)').should('contain', 'Feather');
    });
  });
  context('unsuccessful', () => {
    it('create a metric with less than 3 values', () => {
      cy.get('.mb-5 > .ant-input').type('-6');
      cy.get('.ant-select-selection-item').click();
      cy.get('[title="Feather"]').click();
      cy.get('.ant-btn-primary').first().click();
      cy.get('.mb-5 > .ant-typography').should('have.text', 'value must be greater than or equal to 1');
    });
  });
});
