import TableItem from "../../atoms/table_item";

const SkillsLanguagesTable = () => {
  return (
    <table
      style={{ alignSelf: "left", alignContent: "left", alignItems: "left" }}
    >
      <TableItem keyValue={"Dart"} Value={"★ ★ ★ ★ ★"} paddingBetween={200} />
      <TableItem keyValue={"Swift"} Value={"★ ★ ★ ★ ☆"} paddingBetween={200} />
      <TableItem keyValue={"HTML"} Value={"★ ★ ★ ★ ☆"} paddingBetween={200} />
      <TableItem keyValue={"CSS"} Value={"★ ★ ★ ★ ☆"} paddingBetween={200} />
      <TableItem
        keyValue={"JavaScript"}
        Value={"★ ★ ★ ☆ ☆"}
        paddingBetween={200}
      />
      <TableItem keyValue={"Python"} Value={"★ ★ ★ ★ ☆"} paddingBetween={200} />
      <TableItem keyValue={"R"} Value={"★ ★ ☆ ☆ ☆"} paddingBetween={200} />
      <TableItem keyValue={"Unity"} Value={"★ ☆ ☆ ☆ ☆"} paddingBetween={200} />
    </table>
  );
};

export default SkillsLanguagesTable;
