import TableItem from "../../atoms/table_item";

const ContactOthersTable = () => {
  return (
    <table
      style={{ alignSelf: "left", alignContent: "left", alignItems: "left" }}
    >
      <TableItem
        keyValue={"Twitter"}
        Value={<a href="https://twitter.com/koichi_mobile" target="_blank"
        rel="noopener noreferrer" style={{color: "black"}}>@koichi_mobile</a>}
        paddingBetween={100}
      />
      <TableItem
        keyValue={"Qiita"}
        Value={<a href="https://qiita.com/KKoichi51" target="_blank"
        rel="noopener noreferrer" style={{color: "black"}}>@KKoichi51</a>}
        paddingBetween={100}
      />
      <TableItem
        keyValue={"Zenn"}
        Value={<a href="https://zenn.dev/koichi_51" target="_blank"
        rel="noopener noreferrer" style={{color: "black"}}>@koichi_51</a>}
        paddingBetween={100}
      />
      <TableItem
        keyValue={"GitHub"}
        Value={<a href="https://github.com/Koichi5" target="_blank"
        rel="noopener noreferrer" style={{color: "black"}}>@Koichi5</a>}
        paddingBetween={100}
      />
    </table>
  );
};

export default ContactOthersTable;
