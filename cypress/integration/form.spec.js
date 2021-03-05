describe('The form', () => {
    // before each test block
    beforeEach(() => {
        // visits base url
        cy.visit('/')
    })

    // check to see if the input is focused
    it('it focuses on the input', () => {
      cy.focused().should('have.class', 'input input__lg22')
    })

    // check to see if input can be entered
    it('accepts input', () => {
        const input = "I'm typing a task"
        cy.get('#new-todo-input')
        .type(input)
        .should('have.value', input)
    })

    // check to see if taks can be added
    // TODO: 
    it.only('creates a task', () => {
        const input = "learn about cypress"
        cy.get('#new-todo-input')
        .type(input)
        .type('{enter}')
        .get('li')
        .should('have.length', 4)
    })
    

  })