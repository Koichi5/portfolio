import SubTitle from "../../atoms/sub_title";
import ContactOthersTable from "./contact_others_table";

function ContactOthers() {
  return (
    <div style={{ paddingBottom: 50 }}>
      <SubTitle text={"Others"} />
      <ContactOthersTable />
    </div>
  );
}

export default ContactOthers;