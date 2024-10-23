import 'cypress-iframe'

describe (" Mouse Operations",()=>{
   
    it('MouseHover',()=>{

       cy.visit("https://demo.opencart.com/");

       cy.get("body > main:nth-child(4) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)")
       .should("not.be.visible");

       cy.get(".nav > :nth-child(1) > .dropdown-toggle").trigger('mouseover').click();

       cy.get("body > main:nth-child(4) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)")
       .should("be.visible");
    });

    it('Rigt Click',()=>{
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");

        //Approach 1
       // cy.get(".context-menu-one.btn.btn-neutral").trigger("contextmenu");
      //  cy.get('.context-menu-icon-copy > span').should('be.visible');
       
        //Approach 2
        cy.get(".context-menu-one.btn.btn-neutral").rightclick();
        cy.get('.context-menu-icon-copy > span').should('be.visible');
    });

    it('Double Click',()=>{

       cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3")
       cy.frameLoaded("#iframeResult")

       // Approach 1 - trigger
       //cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").trigger('dblclick')
      // cy.iframe("#iframeResult").find("#field2").should('have.value','Hello World!')

       // Approach 2 -dbclick 
       cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").dblclick()
       cy.iframe("#iframeResult").find("#field2").should('have.value','Hello World!')

    });


    it.only('Scrolling page',()=>{
        cy.visit("https://www.sic-info.org/en/services/lending/national-flags/")

        cy.get(':nth-child(5) > :nth-child(11)').scrollIntoView({duration:2000})
        cy.get(':nth-child(5) > :nth-child(11)').should('be.visible')

        cy.get('.contentBody > :nth-child(13) > :nth-child(1)').scrollIntoView({duration:2000})
        cy.get('.contentBody > :nth-child(13) > :nth-child(1)').should('be.visible')

    });

})
