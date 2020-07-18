import React from "react";
import { Link } from "gatsby"
import classNames from "classnames";
import DarkModeSwitch from "../DarkModeSwitch/DarkModeSwitch";
import "./MainNav.css";

export default function MainNav(props) {
  const { children, className } = props;
  const formatting = []; //["overlay"];//"clearfix"
  const classes = classNames("main-nav", formatting, className);

  return <nav className={classes}>
    <section className="nav-bar">
      <div className="nav-item">
        <Link to="/" activeClassName="active">BN</Link>
      </div>

      <div className="nav-item">
        <Link to="/blog" activeClassName="active">BLOG</Link>
      </div>
      <div className="nav-item">
        <Link to="/projects" activeClassName="active">PROJECTS</Link>
      </div>
      <div className="nav-item">
        <Link to="/about" activeClassName="active">ABOUT</Link>
      </div>

    </section>

    <DarkModeSwitch />
    {children}
  </nav>;
}

