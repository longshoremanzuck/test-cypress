import * as React from 'react'
import { mount } from '@cypress/react'
import Button from './Button'




it('Test Button', () => {
  mount(<Button>Test button</Button>)
  cy.get('button').contains('Test button').click()
})