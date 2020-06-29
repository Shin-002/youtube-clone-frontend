import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { FiLogOut } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

export const NavBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <ToolBar>

        <button className="logo">
          <FaYoutube />
        </button>
        <Typography variant="h5" className={classes.title}>Youtube App</Typography>

        <button className="logout">
            <FiLogOut/>
        </button>

      </ToolBar>
    </AppBar>
  );
};
