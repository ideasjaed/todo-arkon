import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import "../styles/Header.css";
function Header() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link
            component={Button}
            to="/"
            variant="contained"
            color="prmary"
            className={classes.menuButton}
          >
            Home
          </Link>
          <Link
            component={Button}
            to="/history"
            variant="contained"
            color="prmary"
          >
            Historial
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
