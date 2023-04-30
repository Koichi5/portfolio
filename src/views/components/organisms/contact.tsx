import AboutProfile from "../molecules/about/about_profile";
import AboutMyHistory from "../molecules/about/about_my_history";
import Title from "../atoms/title";
import ContactWithSubtitle from "../molecules/contact/contact_others";
import ContactEmail from "../molecules/contact/contact_email";
import ContactOthers from "../molecules/contact/contact_others";

const Contact = () => {
  return (
    <div id="contact">
      <Title text={"CONTACT"} />
      <ContactEmail />
      <ContactOthers />
    </div>
  );
};

export default Contact;
