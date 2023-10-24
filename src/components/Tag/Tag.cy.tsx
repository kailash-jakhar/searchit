import React from 'react'
import Tag from './Tag'

describe('<Tag />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    const onClick = cy.spy().as('onClickSpy')
    cy.mount(<Tag label="cat" onClick={onClick} />)
    cy.get('[data-test-id="tag_cat"]').should('exist').click();
    cy.get('@onClickSpy').should('have.been.called');

  })
})