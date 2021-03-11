describe('The task list', () => {
    // before each test block
    beforeEach(() => {
        // visits base url
        cy.visit('/')
    })

    // check if heading text matches active tasks
    // TODO: See if there's a better way to manage state for this one
    it('checks if task count decrements', () => {
        cy.get('[type="checkbox"]')
        .first()
        .check()
        .get('#list-heading')
        .should('contain', '2')
    })

    // check if you can edit task
    it('check if you can edit a task inline', () => {
        const input = "a recently edited task"
        cy.get('[data-cy=todo-label]')
        .first()
        .click()
        .get('[data-cy=todo-text]')
        .clear()
        .type(input + '{enter}')
        .get('[data-cy=todo-label]')
        .first()
        .should('have.text', input)
    });

    
    it('checks if you can delete a task', () => {
        cy.get('[data-cy=todo-label]')
        .first()
        .click()
        .get('[data-cy=todo-btn-delete]')
        .click()
        .get('#list-heading')
        .should('contain', '2')
    });

  })