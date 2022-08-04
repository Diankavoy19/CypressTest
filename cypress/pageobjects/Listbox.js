class Listbox{
    get ElasticLink() { 
        return cy.get('header [href$="elastic-sip"]');
    };
    get UkraineButton() {
        return cy.get('a[href*="ua"]');
    };
    get ValuteButton() {
        return cy.get('li[role="option"]:nth-Child(4) div');
    };
    get Text() {
        return cy.get('#pay-as-you-go div:nth-Child(3) h3');
    };
};
export default Listbox;