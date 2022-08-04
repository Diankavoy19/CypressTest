import Base from "../pageobjects/Base";
import Registration from "../pageobjects/Registration";
import Authorization from "../pageobjects/Authorization";
import Products from "../pageobjects/ProductLink";
import Search from "../pageobjects/SearchInput";
import Links from "../pageobjects/Links";
import AboutLink from "../pageobjects/AboutLink";
import MobilePhones from "../pageobjects/MobilePhones";
import Waitlist from "../pageobjects/Waitlist";
import Listbox from "../pageobjects/Listbox";
import Partnership from "../pageobjects/Partner";

describe('Testcases with verification for Telnyx page', () => {
  const base = new Base();
  const registration = new Registration();
  const authorization = new Authorization();
  const products = new Products();
  const search = new Search();
  const links = new Links();
  const about = new AboutLink();
  const mobile = new MobilePhones();
  const waitlist = new Waitlist();
  const listbox = new Listbox();
  const partner = new Partnership();
  it('Registration on the page', () => {
    base.navigate();
    registration.CookiesButton.click();
    base.scrollandclick(registration.RegistrationLink);
    cy.wait(2000);
    registration.Email.type('exampleemail1@gmail.com');
    registration.FullName.type('Dianka Voy');
    registration.Password.type("Diankavoy1412@");
    registration.Checkbox.click({force: true});
    registration.SecondCheckbox.click({force: true});
    registration.SubmitButton.click();
    cy.wait(4000);
    registration.EmailError.should('include.text', 'try again.');
  });
  it('Authorization on the page', () => {
    base.navigate();
    authorization.AuthorizationLink.click();
    authorization.Email.click();
    // if browser remembered previous email we can clear it, if not we can not use this function 
    authorization.Email.clear()
    authorization.Email.type('exampletest@gmail.com');
    authorization.Password.type('Diankavoy1412@');
    authorization.Checkbox.click({force: true});
    authorization.SubmitButton.click();
    authorization.EmailError.should('include.text', 'That email and password combination is not valid, or your browser could not be authenticated via recaptcha. Please try again.' ).and('include.text', 'That email and password combination is not valid, or your browser could not be authenticated via recaptcha. Please try again.');
    cy.screenshot('Testcase2');
  });
  it('Verify Products button and Storage link', () => {
    base.navigate();
    products.ProductButton.click({force: true});
    base.scrollandclick(products.StorageButton);
    base.scrollandclick(products.HowDoesTelnyxWork);
    products.TextTelnyx.should('include.text', 'Telnyx Storage works just like any other distributed cloud storage service. You can store and read data via API, or using the Telnyx Mission Control Portal. Your data is hosted on your choice of one of ten points of presence (and backed up with redundant data copies), situated in the fastest-growing metropolitan areas in the United States, meaning your applications can access this data with low latency.' );
  });
  it('Verify Search input on the LearnMore page', () => {
    base.navigate();
    base.scrollandclick(search.LearnMoreLink);
    search.DocsButton.click();
    search.SearchInput.click();
    search.SearchInput.type('Video');
    search.SearchQuery.click();
    search.TextSearch.should('include.text', 'Telnyx Meet - Video Rooms API Demo Using Next.js');
  });
  it('Verify “Read Customer Story →” links', () => {
    base.navigate();
    base.scrollandclick(links.LightspeedLink);
    links.TextOfPages.should('include.text', 'Lightspeed builds global, reliable, unified communications with Telnyx.');
    cy.go('back');
    base.scrollandclick(links.OomaLink);
    links.TextOfPages.should('include.text', 'global network to streamline carrier operations, reduce costs and lower latency.');
    cy.go('back');
    base.scrollandclick(links.ReplicantLink);
    links.TextOfPages.should('include.text', 'Replicant lowers latency, costs and leverages Telnyx Call Control for real-time autonomous contact center with conversational AI.');
  });
  it('Verify About link', () => {
    base.navigate();
    base.scrollandclick(about.AboutUsLink);
    about.TextDifferent.scrollIntoView();
    about.Texts.last().should('include.text', 'Automated number portability');
    base.scrollandclick(about.SeeOpenJobsLink);
    base.scrollandclick(about.NextItem);
    cy.url().should('include', 'careers');
  });
  it('Verify  5 first mobile phones.', () => {
    base.navigate();
    base.scrollandclick(mobile.RequestDemoLink);
    mobile.ListOfMobilePhones.scrollIntoView();
    mobile.EstoniaNumber.should('include.text', '+372 699 1435');
    mobile.FinlandNumber.should('include.text', '+358 753 255 300');
    mobile.IrelandNumber.should('include.text', '+353 818 123 457');
    mobile.IsraelNumber.should('include.text', '+972 772 2000 92');
    mobile.MexicoNumber.should('include.text', ' +52 558 897 4917');
  });
  it('Verify form of joining the waitlist.', () => {
    base.navigate();
    waitlist.WaitlistLink.click({force: true});
    waitlist.Form.scrollIntoView();
    waitlist.FirstName.type("Diana");
    waitlist.LastName.type("Voy");
    waitlist.Email.type("learningemail@gmail.com");
    waitlist.Information.type("Learning");
    waitlist.SubmitButton.click();
    cy.url().should('include', 'storage-waitlist');
  });
  it('Verify buttons with listbox .', () => {
    base.navigate();
    listbox.ElasticLink.click({force: true});
    listbox.UkraineButton.click({force: true});
    listbox.ValuteButton.click({force: true});
    listbox.Text.scrollIntoView();
    listbox.Text.should('include.text', 'Intelligent Service pricing for Ukraine');
  });
  it('take a screenshot after filled partner form', () => {
    base.navigate();
    partner.PartnerLink.click({force: true});
    partner.BecomePartnerForm.scrollIntoView();
    partner.FirstName.type("Diana");
    partner.LastName.type("Voy");
    partner.Company.type("Learning");
    partner.Email.type("learning@gmail.com");
    partner.Phone.type("0666666666");
    partner.TextAboutReason.type("bhjbdsvk");
    partner.ApplyButton.click();
    partner.PartnerTypeValid.should('include.text', 'This field is required.');
    cy.screenshot('Testcase10');
  });
});