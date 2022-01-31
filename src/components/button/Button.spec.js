import * as React from 'react'
import { mount } from '@cypress/react'
import Button from './Button'




it('Test Button', () => {
  mount(<Button />)
  cy.get('.btn').contains('Test button').click({force: true})
})