describe('Categories Page', () => {
  it('Category Selection', () => {
    cy.visit('http://localhost:4201')
    cy.get('h1').contains('Categories of Books')
    cy.get('.centered-box').then($elements => {
    let countOfElements = $elements.length
    $elements.first().trigger("click")
    }) 
    
  })
})