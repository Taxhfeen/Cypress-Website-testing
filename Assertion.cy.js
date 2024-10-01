describe('Assertion Demo', () => {
    it('Implicit ', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.url().should('include','orangehrmlive')
       cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
          cy.url().should('include','orange')
       .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
         cy.get("input[placeholder='Username']").type("Admin")
         cy.get("input[placeholder='Username']").should("have.value","Admin")
       
      })
      it('Explicit ', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

          cy.get("input[placeholder='Username']").type("Admin")
          cy.get("input[placeholder='Password']").type("admin123")
          cy.get("button[type='submit']").click()

          let testName="Kamatchi sankar"

          cy.get(".oxd-userdropdown-name").then((a)=>{
            
            let actName=a.text()

            //BDD Style
            expect(actName).to.equal(testName)
            expect(actName).to.not.equal(testName)

              //TDD Style
              assert.equal(actName,testName)
              assert.notEqual(actName,testName)
          } )
       
      })
  })