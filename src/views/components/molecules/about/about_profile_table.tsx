import TableItem from "../../atoms/table_item";

const AboutProfileTable = () => {
  return (
    <table
      style={{ alignSelf: "left", alignContent: "left", alignItems: "left" }}
    >
      <TableItem
        keyValue={"Name"}
        Value={"岸本 浩一智 ( Kishimoto Koichi )"}
        paddingBetween={100}
      />
      <TableItem keyValue={"Age"} Value={"20"} paddingBetween={100} />
      <TableItem
        keyValue={"Belonging"}
        Value={"関西大学経済学部"}
        paddingBetween={100}
      />
      <TableItem
        keyValue={"Speciality"}
        Value={"モバイルアプリケーション開発"}
        paddingBetween={100}
      />
    </table>
  );
};

export default AboutProfileTable;
