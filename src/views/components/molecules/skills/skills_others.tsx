import SubTitle from "../../atoms/sub_title";
import SkillsOthersTable from "./skills_others_table";

function SkillsOthers() {
  return (
    <div style={{ paddingBottom: 50 }}>
      <SubTitle text={"Others"} />
      <SkillsOthersTable />
    </div>
  );
}

export default SkillsOthers;
