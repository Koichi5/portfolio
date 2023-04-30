import TableItem from "../../atoms/table_item";

const SkillsFrameworksTable = () => {
  return (
    <table
      style={{ alignSelf: "left", alignContent: "left", alignItems: "left" }}
    >
      <TableItem
        keyValue={"Flutter"}
        Value={"★ ★ ★ ★ ★"}
        paddingBetween={200}
      />
      <TableItem
        keyValue={"SwiftUI"}
        Value={"★ ★ ★ ☆ ☆"}
        paddingBetween={200}
      />
      <TableItem
        keyValue={"ARKit"}
        Value={"★ ★ ☆ ☆ ☆"}
        paddingBetween={200}
      />
      <TableItem
        keyValue={"UIKit"}
        Value={"★ ☆ ☆ ☆ ☆"}
        paddingBetween={200}
      />
      <TableItem
        keyValue={"React"}
        Value={"★ ★ ☆ ☆ ☆"}
        paddingBetween={200}
      />
      <TableItem
        keyValue={"Numpy"}
        Value={"★ ★ ★ ☆ ☆"}
        paddingBetween={200}
      />
      <TableItem
        keyValue={"Pandas"}
        Value={"★ ★ ★ ☆ ☆"}
        paddingBetween={200}
      />
      <TableItem
        keyValue={"TensorFlow"}
        Value={"★ ★ ☆ ☆ ☆"}
        paddingBetween={200}
      />
    </table>
  );
};

export default SkillsFrameworksTable;