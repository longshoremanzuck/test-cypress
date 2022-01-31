import React from 'react';
import { mount } from '@cypress/react';
import App from './App';



  it('says hi', () => {
    mount(<App />)
    cy.get('header > a').contains('Hi')
  });
  
  it('renders app and fetch elemnet using react-selector', () => {
    mount(<App />)
    cy.waitForReact()
    cy.react('App').should('be.visible')
  })
