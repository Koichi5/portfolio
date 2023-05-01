import SubTitle from "../../atoms/sub_title";
import SkillsLanguagesTable from "./skills_languages_table";

function SkillsLanguages() {
  return (
    <div style={{ paddingBottom: 50 }}>
      <SubTitle text={"Languages"} />
      <SkillsLanguagesTable />
    </div>
  );
}

export default SkillsLanguages;
