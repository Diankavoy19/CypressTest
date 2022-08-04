class Waitlist{
    get WaitlistLink() { 
        return cy.get('span a[href="/products/storage"]');
    };
    get Form() { 
        return cy.get('div#form');
    };
    get FirstName() {
        return cy.get('#FirstName');
    };
    get LastName() {
        return cy.get('#LastName');
    };
    get Email() {
        return cy.get('#Email');
    };
    get Information() {
        return cy.get('#Form_Additional_Information__c');
    };
    get SubmitButton() {
        return cy.get('button[type="submit"]');
    };
    
};
export default Waitlist;