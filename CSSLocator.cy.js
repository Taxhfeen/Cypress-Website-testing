describe('CSSLocator', () => {
    it('csslocators', () => {
      cy.visit('https://www.daraz.pk/')
      cy.get("#q").type("T-shirt")
      cy.get(".search-box__search--2fC5").click()
      cy.get(".search-box-placeholder").contains("shirt")
    })
  })