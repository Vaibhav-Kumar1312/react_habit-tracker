import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

export default function MainNavigation() {
  return (
    <nav className={classes.navContainer}>
      <h1 className={classes.heading}>
        <span>Habit</span> Tracker
      </h1>
      <NavLink to="/" className={classes.homeLink} end>
        <h2>Home</h2>
      </NavLink>
    </nav>
  );
}
