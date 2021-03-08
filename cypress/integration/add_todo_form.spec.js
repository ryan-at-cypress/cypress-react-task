describe('The add todo form', () => {
    // before each test block
    beforeEach(() => {
        // visits base url
        cy.visit('/')
    })

    // check to see if the input is focused
    it('it focuses on the input', () => {
      cy.focused()
      .should('have.id', 'new-todo-input')
    })

    // check to see if input can be entered
    it('accepts input', () => {
        const input = "Learn about cypress"
        cy.get('#new-todo-input')
        .type(input)
        .should('have.value', input)
    })

    // check to see if tasks can be added via enter on keyboard
    // TODO: use more specific selector used for cy.get
    it('creates a task via enter on keyboard', () => {
        const input = "Learn about cypress"
        cy.get('#new-todo-input')
        .type(input)
        .type('{enter}')
        .get('ul li:first').within(() => {
            cy.get('label') // Only yield inputs within list element
            .should('have.text', input)
        })
    })

    // check to see if task can be added via button
    // TODO: use more specific selector used for cy.get
    it('creates a task via the add button', () => {
        const input = "Learn about cypress"
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