describe('The task list', () => {
    // before each test block
    beforeEach(() => {
        // visits base url
        cy.visit('/')
    })

    // check if heading text matches active tasks
    it.skip('checks if task count matches active tasks', () => {
        cy.get('[type="checkbox"]')
        .first()
        .check()
        .get('#list-heading')
        .should('contain', '2')
    })

    // check if you can edit task
    it.only('should edit a task in the list', () => {
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