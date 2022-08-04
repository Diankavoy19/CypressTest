class Products{
    get ProductButton() { 
        return cy.get('header a[href="/products"]');
    };
    get StorageButton() {
        return cy.get('main li a[href="/products/storage"]');
    };
    get HowDoesTelnyxWork() {
        return cy.get('button[aria-controls="faq2_description"]');
    };
    get TextTelnyx() {
        return cy.get('#faq2_description p');
    };
};
export default Products;