import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown} from "react-bootstrap";
import "./navbar.css";
import { First } from "react-bootstrap/esm/PageItem";
import LOGO from "../../imges/logo.JPG";

const NavBar = () => {
    document.body.style.backgroundColor = "white"
    const [isOpen, setIsOpen] = useState(true);
    const handleTrigger = () => setIsOpen(!isOpen);

    return (
      <div>
        <div className={`sidebar ${isOpen ? "sidebar--open" : ""} shadow-lg rounded-lg`}>
            {/* <div className="sidebar-position" onClick={handleTrigger}> */}
            <div className="sidebar-position">
              <div className="side_br">
                <i className="fas fa-thin fa-bars fa-2x"/>
                <span>
                  {/* <img src={LOGO} alt="Tech Saman Logo" style={{width: "-webkit-fill-available"}} /> */}
                </span>
              </div>
            </div>
            <div className="sidebar-position">
                <Link to="/dashboard" className="side_br rmv_under">
                <i className="fas fa-sharp fa-light fa-chart-column fa-2x"></i>
                  <span>Dashboard</span>
                </Link>
                <Link to="/users" className="side_br rmv_under">
                  <i className="fas fa-users fa-2x"></i>
                  <span>Users</span>
                </Link>
            </div>
        </div>
        <div>            
          <div className="header_right">
            <div className="d-flex align-items-center" style={{"marginLeft": "10px"}}>
              <Dropdown className='shadow-0' variant="success">
                <Dropdown.Toggle>
                  <i className="fas fa-duotone fa-circle-user fa-2x"></i>
                  {/* <i className="fas fa-solid fa-angle-down"></i> */}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item >
                  <div style={{"marginRight": "10px"}}>
                    <div>poorna</div>
                    <div>poorna@marensolutions.com</div>
                  </div>                 </Dropdown.Item>
                  <Dropdown.Item href="#">
                    Settings
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </div>
          </div>
        </div>
        <div>  
          <div className="container">
          </div>          
        </div>
      </div>
    );
};


export default NavBar;
