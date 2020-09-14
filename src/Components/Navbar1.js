import React, { Component } from "react";
import { NavbarBrand, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";

const navli = {
  position: "fixed",
  top: "0",
  left: "0",
  width: "100vw",
  backgroundColor: "rgb(61, 70, 73)",
  overflow: "hidden",
  zIndex: "1",
};
const title = {
  fontSize: "140%",
  fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
  fontWeight: "bold",
};
class Navbar1 extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg" style={navli}>
          <NavbarBrand className="text-danger" style={title} href="/">
            Nitesh Kumar
          </NavbarBrand>
          <div className="spacer" />
          <Button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <i className="fa fa-bars" style={{ color: "#fff" }} />
            </span>
          </Button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <Link to="/" className="nav-link text-info">
                <li className="nav-item">Home</li>
              </Link>

              <Link to="/worldclock" className="nav-link text-info">
                <li className="nav-item">World Clock</li>
              </Link>

              <Link to="/stopwatch" className="nav-link text-info">
                <li className="nav-item">Stop-Watch</li>
              </Link>

              <Link to="/timer" className="nav-link text-info">
                <li className="nav-item">Timer</li>
              </Link>

              <Link to="/profile" className="nav-btn text-warning">
                <a className="btn btn-outline-warning">
                  <li className="nav-item">About-Me</li>
                </a>
              </Link>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar1;
