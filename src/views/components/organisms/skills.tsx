import Title from "../atoms/title";
import SkillsFrameworks from "../molecules/skills/skills_frameworks";
import SkillsLanguages from "../molecules/skills/skills_languages";
import SkillsOthers from "../molecules/skills/skills_others";

function Skills() {
  return (
    <div id="skills">
      <Title text={"SKILLS"}/>
        <SkillsLanguages />
        <SkillsFrameworks />
        <SkillsOthers />
    </div>
  );
};

export default Skills;
