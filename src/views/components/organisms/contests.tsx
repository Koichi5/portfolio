import Title from "../atoms/title";
import ContestsCardGrid from "../molecules/contests/contests_card_grid";

function Contests() {
  return (
    <div id="contests">
      <Title text={"CONTESTS"}/>
      <ContestsCardGrid />
    </div>
  );
};

export default Contests;