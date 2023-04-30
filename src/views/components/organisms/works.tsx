import Title from "../atoms/title";
import CardGrid from "../molecules/works/works_card_grid";

const Works = () => {
  return (
    <div id="works">
      <Title text={"WORKS"} />
      <CardGrid />
      {/* <CardWithDialog imageSrc={"https://about.twitter.com/content/dam/about-twitter/en/brand-toolkit/brand-download-img-1.jpg.twimg.1920.jpg"} title={"twitter"} content={"this is twitter"} /> */}
      </div>
  );
};

export default Works;