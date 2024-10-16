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

    it('Js Confirm Alerts - Cancel', () => {


        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get("button[onclick='jsConfirm()']").click();

        cy.on('window:confirm', (t)=>{
            expect(t).to.contains('I am a JS Confirm');
    })
    
    cy.on('window:confirm',()=>false); //cypress closes alert window using cancel button

    cy.get('#result').should('have.text','You clicked: Cancel')

    })

     //3 Javascript Prompt Alert:

     it('Js Prompt Alerts', () => {


        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.window().then((win)=>{
           // cy.stub(win,'prompt').returns('welcome');
          //  cy.stub(win, 'prompt').returns('null')
          cy.stub(win, 'prompt').callsFake(() => null)

        })
        cy.get("button[onclick='jsPrompt()']").click();

        //cypress automatically closed prompth alert -it will use ok ok button-default
       
       // cy.get('#result').should("have.text","You entered: welcome")

        cy.on('window:prompt',()=>false); 

        cy.get('#result').should('have.text','You entered: null');

    })
    // Authenticated Alert
    
    it.only('Authenticated Alert', () => {

        //approach 1
     /*   cy.visit("https://the-internet.herokuapp.com/basic_auth",{ auth:
             { username:"admin", 
                password: "admin"} });

       cy.get("div[class='example'] p").should('have.contain',"Congratulations")
        */
       cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")

       cy.get("div[class='example'] p").should('have.contain',"Congratulations")
    })

})
