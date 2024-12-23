import React from "react";
import MenuDrawer from './Drawer';
import './Header.css';
import Typography from "@mui/material/Typography";

export default function Header() {
  return (
    <div className="header">
      <MenuDrawer />
      <div className="center-header">
        <Typography variant="h4" component="h1">
            Matthew Leopold
        </Typography>
      </div>
      <div className='right-header'>
          <a href="https://www.linkedin.com/in/matthew-leopold-b90686227/">
            <img src="linkedin.svg" className="Linkedin-logo" alt="linkedin" />
          </a>
          <a href="https://github.com/H-137">
            <img src="github.svg" className="Github-logo" alt="github" />
          </a>
      </div>
    </div>
  );
}