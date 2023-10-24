
import Post from './Post'
import post from '../../../cypress/fixtures/post.json'
import './PostView.css';

describe('<Post />', () => {
  it('renders', () => {
    cy.mount(<Post data={post} onClick={()=>{}} />)
    cy.get('[data-test-id="post"]').should('exist');
    cy.get('[data-test-id="post_image"] img').should('exist').invoke('attr', 'src').should('eq',post.urls.small); 
    cy.get('[data-test-id="post_user"]').should('contain',post.user.first_name);
    cy.get('.user__icon > img').invoke('attr', 'src').should('eq',post.user.profile_image.medium); 
   
  })
})