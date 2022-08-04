class Links{
    get LightspeedLink() { 
        return cy.get('[href*="lightspeed"]');
    };
    get TextOfPages() { 
        return cy.get('main h1');
    };
    get OomaLink() {
        return cy.get('[href*="ooma"]');
    };
    get ReplicantLink() {
        return cy.get('[href*="replicant"]');
    };
};
export default Links;