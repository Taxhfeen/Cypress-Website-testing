describe ("Alerts",()=>{

    it('Js Alerts', () => {

        //1 Javascript Alert:
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click();

        cy.on('window:alert', (t)=>{

                expect(t).to.contains('I am a JS Alert');

        })
        //alert window automatically closed by cypress

        cy.get('#result').should('have.text','You successfully clicked an alert')

    })

    //2 Javascript Confimation Alert:

    it('Js Confirm Alerts - ok', () => {


        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get("button[onclick='jsConfirm()']").click();

        cy.on('window:confirm', (t)=>{
            expect(t).to.contains('I am a JS Confirm');
    })

    //cypress automatically closed alert window by using ok button-default

    cy.get('#result').should('have.text','You clicked: Ok')

    })

    it.only('Js Confirm Alerts - Cancel', () => {


        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get("button[onclick='jsConfirm()']").click();

        cy.on('window:confirm', (t)=>{
            expect(t).to.contains('I am a JS Confirm');
    })
    
    cy.on('window:confirm',()=>false); //cypress closes alert window using cancel button

    cy.get('#result').should('have.text','You clicked: Cancel')

    })
    
})
