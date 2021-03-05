describe('The form', () => {
    // before each test block
    beforeEach(() => {
        // visits base url
        cy.visit('/')
    })

    // check to see if the input is focused
    it('it focuses on the input', () => {
      cy.focused().should('have.class', 'input input__lg')
    })

    // check to see if input can be entered
    it('accepts input', () => {
        const input = "I'm typing a task"
        cy.get('#new-todo-input')
        .type(input)
        .should('have.value', input)
    })

    // check to see if tasks can be added via enter on keyboard
    it('creates a task via enter on keyboard', () => {
        const input = "learn about cypress"
        cy.get('#new-todo-input')
        .type(input)
        .type('{enter}')
        .get('ul li:first').within(() => {
            cy.get('label') // Only yield inputs within list element
            .should('have.text', input)
        })
    })

    // check to see if task can be added via button
    it('creates a task via the add button', () => {
        const input = "learn about cypress"
        cy.get('#new-todo-input')
        .type(input)
        .get('#add_task')
        .click()
        .get('ul li:first').within(() => {
            cy.get('label') // Only yield inputs within list element
            .should('have.text', input)
        })
    })


  })