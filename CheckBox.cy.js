describe ("Check UI Elements",()=>{

it("checking CheckBox",()=>{
    cy.visit("http://test.rubywatir.com/checkboxes.php")

    //Visibilty of the Element
   // cy.get("input[value='soccer']").should('be.visible')

    //selecting single checkbox - Soccer
   // cy.get("input[value='soccer']").check().should('be.checked')

    //Unselecting  checkbox 
  //  cy.get("input[value='soccer']").uncheck().should('not.be.checked')

     //selecting  all the checkbox 
    //cy.get("input[type='checkbox']").check().should('be.checked')

    //Unselecting  all the checkbox 
  //  cy.get("input[type='checkbox']").uncheck().should('not.be.checked')

   //select first checkbox 

   cy.get("input[type='checkbox']").first().check().should('be.checked')

   //select last checkbox 

   cy.get("input[type='checkbox']").last().check().should('be.checked')


})

})
