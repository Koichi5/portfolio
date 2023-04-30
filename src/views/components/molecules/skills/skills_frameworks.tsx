import { makeStyles } from "@material-ui/core/styles";
import SubTitle from "../../atoms/sub_title";
import SkillsFrameworksTable from "./skills_frameworks_table";

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

function SkillsFrameworks() {
  const classes = useStyles();
  return (
    <div className={classes.root} style={{ paddingBottom: 50 }}>
      <SubTitle text={"Frameworks & Libraries"} />
      <SkillsFrameworksTable />
    </div>
  );
}

export default SkillsFrameworks;