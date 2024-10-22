describe (" Mouse Operations",()=>{

    it.only('MouseHover',()=>{

       cy.visit("https://demo.opencart.com/");

       cy.get("body > main:nth-child(4) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)")
       .should("not.be.visible");

       cy.get(".nav > :nth-child(1) > .dropdown-toggle").trigger('mouseover').click();

       cy.get("body > main:nth-child(4) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)")
       .should("be.visible");
    });


})
