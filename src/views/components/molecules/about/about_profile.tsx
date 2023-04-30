import { makeStyles } from "@material-ui/core/styles";
import AboutProfileTable from "./about_profile_table";
import SubTitle from "../../atoms/sub_title";

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

function AboutProfile() {
  const classes = useStyles();
  return (
    <div className={classes.root} style={{ paddingBottom: 50 }}>
      <SubTitle text={"Profile"} />
      <AboutProfileTable />
    </div>
  );
}

export default AboutProfile;
