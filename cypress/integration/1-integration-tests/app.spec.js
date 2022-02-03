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

    it('should display a button', () => {
        cy.get('.btn').contains('Test button').click({force: true},top)
        cy.wait(200)
    })

})