import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
    fontWeight: "bold",
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

function Header() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <div className={classes.title}>
            <p color="inherit">Koichi's Portfolio</p>
          </div>
          <Button color="inherit" className={classes.button}>
            HOME
          </Button>
          <Button color="inherit" className={classes.button}>
            <a href="#about" style={{ color: "black" }}>
              ABOUT
            </a>
          </Button>
          <Button color="inherit" className={classes.button}>
            <a href="#skills" style={{ color: "black" }}>
              SKILLS
            </a>
          </Button>
          <Button color="inherit" className={classes.button}>
            <a href="#works" style={{ color: "black" }}>
              WORKS
            </a>
          </Button>
          <Button color="inherit" className={classes.button}>
            <a href="#contact" style={{ color: "black" }}>
              CONTACT
            </a>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
