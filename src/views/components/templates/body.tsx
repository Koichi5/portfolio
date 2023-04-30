import { makeStyles } from "@material-ui/core/styles";
import WelcomeText from "../atoms/welcome_text";
import About from "../organisms/about";
import Skills from "../organisms/skills";
import Title from "../atoms/title";
import Works from "../organisms/works";
import Contact from "../organisms/contact";

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

function Body() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Title text={"WELCOME"} />
      <WelcomeText text={"Mobile developer working primarily with Flutter"} />
      <About />
      <Skills />
      <Works />
      <Contact />
    </div>
  );
}

export default Body;
