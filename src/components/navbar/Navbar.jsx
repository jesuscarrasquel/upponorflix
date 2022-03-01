import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.scrollY > 0 && true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <Link to="/" className="link">
            <h1>Uponorflix</h1>
          </Link>
          <Link to="/" className="link">
            <span>Homepage</span>
          </Link>
          <Link to="/series" className="link">
            <span>Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span>Movies</span>
          </Link>
          <Link to="/" className="link">
            <span>New and Popular</span>
          </Link>
          <Link to="/" className="link">
            <span>My List</span>
          </Link>
          <Link to="/admin" className="link">
            <span>ADMIN PANEL</span>
          </Link>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KID</span>
          <Notifications className="icon" />
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="avatar"
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
