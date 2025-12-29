const emailG = 'user2_xxx@example.com'
const passwordG = 'Password123!'

describe('UI Flow - Create user login and make post', () => {
  it('User login and check helath status', () => {
    // 1. Login & validate
    cy.registerOrLogin(emailG, passwordG)

  // 2. Check health status
  cy.request('GET','https://practice.expandtesting.com/notes/api/health-check')
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.message).to.eq('Notes API is Running')
      })
    })
})
