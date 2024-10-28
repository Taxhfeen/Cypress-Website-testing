//Hooks and tags
describe (" My Test",()=>{

    before(()=>{
        cy.log("**** login ****")

    })

    after(()=>{
        cy.log("**** Close app ****")
        
    })

    beforeEach(()=>{
        cy.log("**** login ****")
        
    })

    afterEach(()=>{
        cy.log("**** logout  ****")
        
    })

    it('Search',()=>{

        cy.log("**** Search  ****")
     
    })

    it.skip(' Advance Search',()=>{

        cy.log("**** Advance Search  ****")
    
 
     })

     it.only(' Listing Products',()=>{

        cy.log("**** Listing Products  ****")
    
     })


   
})
