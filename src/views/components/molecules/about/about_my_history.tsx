import { makeStyles } from "@material-ui/core/styles";
import SubTitle from "../../atoms/sub_title";
import AboutMyHistoryTable from "./about_my_history_table";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignContent: "left",
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
  },
  button: {
    marginLeft: theme.spacing(1),
    "&:focus": {
      outline: "none",
    },
    "&:active": {
      boxShadow: "none",
    },
  },
}));

function AboutMyHistory() {
  const classes = useStyles();
  return (
    <div className={classes.root} style={{ paddingBottom: 50 }}>
      <SubTitle text={"My History"} />
      <AboutMyHistoryTable />
    </div>
  );
}

export default AboutMyHistory;
