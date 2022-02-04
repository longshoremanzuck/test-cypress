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