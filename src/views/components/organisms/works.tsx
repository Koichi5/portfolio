import Title from "../atoms/title";
import WorksCardGrid from "../molecules/works/works_card_grid";

const Works = () => {
  return (
    <div id="works">
      <Title text={"WORKS"} />
      <WorksCardGrid />
      </div>
  );
};

export default Works;