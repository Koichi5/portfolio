import AboutProfile from "../molecules/about/about_profile";
import AboutMyHistory from "../molecules/about/about_my_history";
import Title from "../atoms/title";

const About = () => {
  return (
    <div id="about">
      <Title text={"ABOUT"}/>
      <AboutProfile />
      <AboutMyHistory />
    </div>
  );
};

export default About;
