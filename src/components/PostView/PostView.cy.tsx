import React from 'react'
import PostView from './PostView'
import post from '../../../cypress/fixtures/post.json'

const data = [post,post]


describe('<PostView />', () => {
  it('Renders Postview', () => {
    cy.mount(<PostView  data={data} />)
    cy.get('.post').should('have.length', 2);
  })

  it('Renders Postview with 4 post', () => {
    cy.mount(<PostView  data={[...data,...data]} />)
    cy.get('.post').should('have.length', 4);
  })
})