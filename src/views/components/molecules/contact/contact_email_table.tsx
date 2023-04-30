import TableItem from "../../atoms/table_item";

const ContactEmailTable = () => {
  return (
    <table
      style={{ alignSelf: "left", alignContent: "left", alignItems: "left" }}
    >
      <TableItem
        keyValue={"Email"}
        Value={"koichi20021217@gmail.com"}
        paddingBetween={100}
      />
      <TableItem
        keyValue={"Phone"}
        Value={"080-4558-9517"}
        paddingBetween={100}
      />
    </table>
  );
};

export default ContactEmailTable;