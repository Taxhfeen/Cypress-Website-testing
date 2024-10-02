describe ("Check UI Elements",()=>{

it("checking Radio Buttons",()=>{
    cy.visit("http://test.rubywatir.com/radios.php")

    //Visibilty of radio buttons
    cy.get("input[value='Radio1']").should('be.visible')
    cy.get("input[value='Nope']").should('be.visible')

     //Selecting radio buttons
     cy.get("input[value='Radio1']").check().should('be.checked')
     cy.get("input[value='Nope']").should('not.be.checked')

    
     cy.get("input[value='Nope']").check().should('be.checked')
     cy.get("input[value='Radio1']").should('not.be.checked')
     

})

})
