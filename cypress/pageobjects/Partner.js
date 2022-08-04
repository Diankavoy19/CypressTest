class Partnership{
    get PartnerLink() { 
        return cy.get('[href="/company/partnerships"]');
    };
    get BecomePartnerForm() { 
        return cy.get('#become-a-partner');
    };
    get FirstName() {
        return cy.get('#FirstName');
    };
    get LastName() {
        return cy.get('#LastName');
    };
    get Company() {
        return cy.get('#Company');
    };
    get Email() {
        return cy.get('#Email');
    };
    get Phone() {
        return cy.get('#Form_Phone__c');
    };
    get PartnerTypeValid() {
        return cy.get('#ValidMsgPartner_Type__c');
    };
    get TextAboutReason() {
        return cy.get('#Form_Additional_Information__c');
    };
    get ApplyButton() {
        return cy.get('button[type="submit"]');
    };
};
export default Partnership;