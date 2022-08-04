class Registration{
    get RegistrationLink() { 
        return cy.get('main [href="/sign-up"]');
    };
    get CookiesButton() {
        return cy.get('#__next footer+div div div button');
    };
    get Email() {
        return cy.get('#email');
    };
    get FullName() {
        return cy.get('#full_name');
    };
    get Password() {
        return cy.get('#password');
    };
    get Checkbox() {
        return cy.get('#terms_and_conditions');
    };
    get SecondCheckbox() {
        return cy.get('#subscription_opt_in');
    };
    get SubmitButton() {
        return cy.get('button[type="submit"]');
    };
    get EmailError() {
        return cy.get('#signup-form_error');
    };
};
export default Registration;