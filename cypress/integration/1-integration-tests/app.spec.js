/// <reference types="cypress" />

describe('first integartion test', () => { 
    beforeEach(() => {
        cy.visit('http://localhost:3000')
        cy.wait(200)
    })

    it('displays the app', () => {
        cy.get('.App').should('be.visible')
        cy.wait(200)
    })

    it('displays navbar with text in it', () => {
        cy.get('header').should('be.visible')
        cy.wait(200)
        cy.get('header > a').contains('Hi')
        cy.wait(200)
    }) 

    it('should display first button', () => {
        cy.get('.btn').contains('Test button').click({force: true},top)
        cy.wait(200)
    })

    it('should display a form', () => {
        cy.get('form').should('be.visible')
    })

    it('type into form input', () => {
        cy.get('form > label')
            .should('be.visible')
            .contains('Name:') 
        cy.wait(200)
        cy.get('label > input')
            .should('be.visible')
            .type('Test name', { delay: 100 })
            .should('have.value', 'Test name')
        cy.wait(200)
    })

    it('should submit form', () => {
        cy.get('form > input[type="submit"]')
            .should('be.visible')
            .contains('Submit')
            .click({force: true},top)
        cy.wait(200)      
    })

})


context('Viewport', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })
  
    it('cy.viewport() - set the viewport size and dimension', () => {
  
      cy.get('.App-header').should('be.visible')
      cy.viewport(320, 480)
      cy.get('.App-header').should('be.visible')
      cy.viewport(2999, 2999)
  
      cy.viewport('macbook-15')
      cy.wait(200)
      cy.viewport('macbook-13')
      cy.wait(200)
      cy.viewport('macbook-11')
      cy.wait(200)
      cy.viewport('ipad-2')
      cy.wait(200)
      cy.viewport('ipad-mini')
      cy.wait(200)
      cy.viewport('iphone-6+')
      cy.wait(200)
      cy.viewport('iphone-6')
      cy.wait(200)
      cy.viewport('iphone-5')
      cy.wait(200)
      cy.viewport('iphone-4')
      cy.wait(200)
      cy.viewport('iphone-3')
      cy.wait(200)
  
      cy.viewport('ipad-2', 'portrait')
      cy.wait(200)
      cy.viewport('iphone-4', 'landscape')
      cy.wait(200)
  
    })
  })
  


// TODO: test view port
// TODO: test aliasing
// TODO: test cookies