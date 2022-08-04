class Base{
    navigate(){
        return cy.visit('https://telnyx.com/');
    };
    scrollandclick(Element){
         Element.scrollIntoView();
         Element.click();
    }
};
export default Base;