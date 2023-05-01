import SubTitle from "../../atoms/sub_title";
import SkillsFrameworksTable from "./skills_frameworks_table";

function SkillsFrameworks() {
  return (
    <div style={{ paddingBottom: 50 }}>
      <SubTitle text={"Frameworks & Libraries"} />
      <SkillsFrameworksTable />
    </div>
  );
}

export default SkillsFrameworks;