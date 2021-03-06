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
    it('check if you can edit a task in the list', () => {
        const input = "a recently edited task"
        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(2) > .stack-small > .btn-group > :nth-child(1)').click();
        cy.get('#todo-1').type(input);
        cy.get('.btn-group > .btn__primary').click();
        cy.get(':nth-child(2) > .stack-small > .c-cb > .todo-label')
        /* ==== End Cypress Studio ==== */
        .should('have.text', input)
    });

  })