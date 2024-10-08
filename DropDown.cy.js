describe ("Handle Dropdowns",()=>{

    it.skip('Dropdown with Select ', () => {

        cy.visit('https://www.zoho.com/crm/crmplus/request-demo.html')

        cy.get('#zcf_address_country').select('United Kingdom')
        .should('have.value','United Kingdom')

    })

    it.skip('Dropdown without Select ', () => {

        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Italy').type('{enter}')

        cy.get('#select2-billing_country-container').should("have.text",'Italy')

    })

    it.skip('Dropdown Auto Select ', () => {

        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').type('Italy').type('{enter}')

        cy.get('#select2-billing_country-container').should("have.text",'Italy')

    })

    it.skip('Auto Suggest dropdown   ', () => {

        cy.visit('https://www.wikipedia.org/')
        
        cy.get('#searchInput').type('Karachi')

        cy.get('.suggestion-title').contains('Karachi Kings').click()
    })

    it('Dynamic dropdown   ', () => {

        cy.visit('https://www.google.com/')
        
        cy.get('#APjFqb').type('cypress automation')

        cy.wait(3000)

        cy.get('div.wM6W7d>span').should('have.length',13)

        cy.get('div.wM6W7d>span').each(($el,index,$list)=>{

            if($el.text()=='cypress automation')
            {
                cy.wrap($el).click()
            }
        })

        cy.get('div.wM6W7d>span').should('have.value','cypress automation')

    })
})
