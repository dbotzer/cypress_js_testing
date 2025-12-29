const nameG = 'User2'
const emailG = 'user2_xxx@example.com'
const passwordG = 'Password123!'

describe('UI Flow - Create user login and make post', () => {
  it('Create new user account and validate if exists', () => {
    cy.request({
     method: 'POST',
     url: 'https://practice.expandtesting.com/notes/api/users/register',
     failOnStatusCode: false,
     body: {
        name: nameG,
        email: emailG,
        password: passwordG
        }
    }).then((response) => {
    // Registration success
        if (response.status === 200) {
        cy.log('User created successfully')
        }
    // User already exists
        if (response.status === 400) {
        cy.log('User already exists, continuing to login')
        }

    // Unexpected failure
        if (![201, 409].includes(response.status)) {
        throw new Error(`Unexpected register response: ${response.status}`)
        }
})
    // User login always happens
cy.request({
  method: 'POST',
  url: 'https://practice.expandtesting.com/notes/api/users/login',
  body: {
    email: emailG,
    password: passwordG
  }
}).then((response) => {
  expect(response.status).to.eq(200)
  expect(response.body.data).to.have.property('token')
  // Save token for later tests
  Cypress.env('authToken', response.body.data.token)
  //expect(response.body.success).to.be.true
  //expect(response.body.message).to.eq('User account created successfully')
    })
  })
})
