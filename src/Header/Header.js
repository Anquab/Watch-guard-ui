// Filename - Header.js

import * as React from "react";
import watchguard_logo from "../images/watchguard_logo.png";

// importing material UI components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "Background",
          borderBottom: "1px solid black",
        }}
      >
        {/*Inside the IconButton, we 
					can render various icons*/}
        {/* <section
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: "5rem",
          }}
        > */}
        <h1 style={{ color: "black", margin: "0px",position:'relative', top: '3px'}}>Social Media Assistant</h1>
        {/* </section> */}

        {/* The Typography component applies 
					default font weights and sizes */}
        <section
          style={{
            width: "20rem",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <h3 style={{ color: "black", paddingTop: "12px" }}>Welcome</h3>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            style={{ position: "relative", left: "20px", bottom: "-6px" }}
          >
            {/*This is a simple Menu 
					Icon wrapped in Icon */}
            <AccountCircleIcon color="primary" />
          </IconButton>
        </section>
      </Toolbar>
    </AppBar>
  );
}
