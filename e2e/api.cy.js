describe('API Validation', () => {
  it('Get health check status and msg', () => {
    
    //Examine request full log
    cy.request('GET', 'https://practice.expandtesting.com/notes/api/health-check')
  .then((response) => {
    cy.log(JSON.stringify(response))
  })
    //Assert request status and body
    cy.request('GET','https://practice.expandtesting.com/notes/api/health-check')
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.message).to.eq('Notes API is Running')
      })
  })
})
