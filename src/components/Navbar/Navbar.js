import React, { useState } from "react"
import Drawer from "@mui/material/Drawer"
import { IoMenu, IoClose } from "react-icons/io5"
import { NavHashLink as NavLink } from "react-router-hash-link"
import { useScrollPosition } from "../../hooks/useScrollPosition"
import AccountHandler from "../../auth/accountHandler"
import "./Navbar.css"
// import logo from '../../assets/png/excel_logo_png.png';
import excel_logo from "../../assets/excellogowithtext.svg"

function Navbar() {
  const [drawer, setDrawer] = useState(false)
  const scrollPosition = useScrollPosition()

  const handleDrawerOpen = () => {
    setDrawer(true)
  }

  const handleDrawerClose = () => {
    setDrawer(false)
  }


  const navStyle = {
    background: scrollPosition > 90 ? "#050D18" : "transparent",
    boxShadow:
      scrollPosition > 90 ? "2px 4px 16px #05eafa5a" : "none",
    }

  return (
    <div className="navbar" style={navStyle}>
      <div className="navbar__main container">
        <div className="nav_logo">
        <NavLink to="/#">
          <img src={excel_logo} alt="" />
          </NavLink>
        </div>
        <div className="nav_contents">
          <NavLink to="/#home" className="nav__link">
            HOME
          </NavLink>
          <NavLink to="/#about" className="nav__link">
            ABOUT
          </NavLink>
          <NavLink to="/#benefits" className="nav__link">
            BENEFITS
          </NavLink>
          <NavLink to="/#rewards" className="nav__link">
            REWARDS
          </NavLink>
          <NavLink to="/#faq" className="nav__link">
            FAQ
          </NavLink>
          <NavLink to="/#contact" className="nav__link">
            CONTACT
          </NavLink>
          
        </div>

        <div className="nav_hamburger" onClick={handleDrawerOpen}>
          <IoMenu className="nam_menu_icon" />
        </div>
      </div>

      <Drawer
        disableScrollLock={true}
        anchor="left"
        open={drawer}
        onClose={handleDrawerClose}
        sx={{
          borderRadius: "20",
          width: "90%",
        }}
      >
        <div className="navbar__mob">
          <div className="navbar_mob_close" onClick={handleDrawerClose}>
            <IoClose className="close_nav_icon"/>
          </div>
          <div className="navbar__mobcontents">
            <NavLink
              to="/#home"
              onClick={handleDrawerClose}
              className="navmob__link"
            >
              HOME
            </NavLink>
            <NavLink
              to="/#about"
              onClick={handleDrawerClose}
              className="navmob__link"
            >
              ABOUT
            </NavLink>
            <NavLink
              to="/#rewards"
              onClick={handleDrawerClose}
              className="navmob__link"
            >
              REWARDS
            </NavLink>
            <NavLink
              to="/#faq"
              onClick={handleDrawerClose}
              className="navmob__link"
            >
              FAQ
            </NavLink>
            <NavLink
              to="/#contact"
              onClick={handleDrawerClose}
              className="navmob__link"
            >
              CONTACT
            </NavLink>
            {AccountHandler.isUserLoggedIn()?<button className="navmob__link nav__logout_btn" onClick={()=>{AccountHandler.logOutUser()}}>
              LOGOUT
            </button>:null}
            
          </div>
        </div>
      </Drawer>
    </div>
  )
}

export default Navbar