import React from 'react'
import SearchBar from './SearchBar'

const query = 'inital query'
const newQuery = "cat"

describe('<SearchBar />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    const onSearch = cy.spy().as('onSearchSpy')
    cy.mount(<div style={{width:"300px"}}><SearchBar onSearch={onSearch} query={query} /></div>)
    cy.get('input').should('have.value',query).clear().type(`${newQuery}{enter}`);
    cy.get('@onSearchSpy').should('have.been.calledWith',newQuery);
    cy.get('input').should('have.value',newQuery).clear().type(newQuery);
    cy.get('.search-icon').click();
    cy.get('@onSearchSpy').should('have.been.calledWith',newQuery);
    cy.get('input').should('have.value',newQuery);

    
  })
})