import React from "react";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";
import "./topbar.css";
import { Link } from "react-router-dom";
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="left">
          <Link to="/" className="link">
            <span>Uponorflix Admin</span>
          </Link>
        </div>
        <div className="right">
          <div className="iconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="iconContainer">
            <Language />
          </div>
          <div className="iconContainer">
            <Settings />
          </div>
          <div className="iconContainer">
            <img
              src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
              className="topAvatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
