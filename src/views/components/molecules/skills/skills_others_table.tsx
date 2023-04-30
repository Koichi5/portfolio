import TableItem from "../../atoms/table_item";

const SkillsOthersTable = () => {
  return (
    <table
      style={{ alignSelf: "left", alignContent: "left", alignItems: "left" }}
    >
      <TableItem
        keyValue={"Firebase"}
        Value={"★ ★ ★ ★ ☆"}
        paddingBetween={200}
      />
      <TableItem keyValue={"GitHub"} Value={"★ ★ ★ ★ ☆"} paddingBetween={200} />
      <TableItem keyValue={"Slack"} Value={"★ ★ ★ ★ ☆"} paddingBetween={200} />
      <TableItem
        keyValue={"Blender"}
        Value={"★ ★ ★ ☆ ☆"}
        paddingBetween={200}
      />
    </table>
  );
};

export default SkillsOthersTable;
