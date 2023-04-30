import Title from "../atoms/title";
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
