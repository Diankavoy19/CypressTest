class Authorization{
    get AuthorizationLink() { 
        return cy.get('a[href$="telnyx.com/"]:nth-Child(6)');
    };
    get CookiesButton() {
        return cy.get('#__next footer+div div div button');
    };
    get Email() {
        return cy.get('form[aria-label="loginForm"] input[name="email"]');
    };
    get Password() {
        return cy.get('input[name="password"]');
    };
    get Checkbox() {
        return cy.get('input[name="remember_me"]');
    };
    get SubmitButton() {
        return cy.get('form[aria-label="loginForm"]>button[type="submit"]');
    };
    get EmailError() {
        return cy.get('[class^="Message__MessageCopy"]');
    };
};
export default Authorization;