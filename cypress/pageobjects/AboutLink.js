class AboutLink{
    get AboutUsLink() { 
        return cy.get('[href="/company/about"]');
    };
    get TextDifferent() {
        return cy.get('section[role="region"] h2');
    };
    get Texts() {
        return cy.get('section[role="region"] h3 ');
    };
    get SeeOpenJobsLink() {
        return cy.get('[href="https://telnyx.com/company/careers"]');
    };
    get NextItem() {
        return cy.get('button[aria-label="Next Item"]');
    };
};
export default AboutLink;