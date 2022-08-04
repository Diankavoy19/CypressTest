class Search{
    get LearnMoreLink() { 
        return cy.get('main a[href="https://developers.telnyx.com/docs"]');
    };
    get DocsButton() {
        return cy.get('#docs-mobile-sidebar  label:nth-Child(4) svg:first-Child');
    };
    get SearchInput() {
        return cy.get('#docs-mobile-sidebar input[placeholder="Search"]');
    };
    get SearchQuery() {
        return cy.get('[href="https://developers.telnyx.com/docs/v2/video-rooms/tutorials/nextjs"]');
    };
    get TextSearch() {
        return cy.get('#telnyx-meet-video-rooms-api-demo-using-nextjs');
    };
};
export default Search;