class MobilePhones{
    get RequestDemoLink() { 
        return cy.get('p a[href$="contact-us"]');
    };
    get ListOfMobilePhones() { 
        return cy.get('section #intl-tel-list');
    };
    get EstoniaNumber() {
        return cy.get('#intl-tel-list li:first-Child');
    };
    get FinlandNumber() {
        return cy.get('#intl-tel-list li:nth-Child(2)');
    };
    get IrelandNumber() {
        return cy.get('#intl-tel-list li:nth-Child(3)');
    };
    get IsraelNumber() {
        return cy.get('#intl-tel-list li:nth-Child(4)');
    };
    get MexicoNumber() {
        return cy.get(' #intl-tel-list li:nth-Child(5)');
    };
};
export default MobilePhones;