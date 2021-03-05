describe('The form', () => {
    // before each test block
    beforeEach(() => {
        // visits base url
        cy.visit('/')
    })

    // check if head text matches active tasks
    it.skip('checks if task count matches active tasks', () => {
        cy.get('[type="checkbox"]')
        .first()
        .check()
        .get('#list-heading')
        .should('contain', '2')
    })
    

  })