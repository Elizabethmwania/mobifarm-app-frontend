import React from 'react';
import { Link } from "react-router-dom";
import classnames from "classnames";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const linkStyle = {
    textDecoration: 'none',
    color: '#66615b'
  }

const AdminNav = () => {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

    return (
        <Navbar className={classnames("fixed-top")}
        color-on-scroll="300"
        expand="lg"
        style={{ backgroundColor:'rgb(78, 231, 40)'}}
        >
  
          <Container>
            <div className="navbar-translate">
              <NavbarBrand
                data-placement="bottom"
                to="/admin-dashboard"
                target="_blank"
                tag={Link}
              >
                MobiFarm
              </NavbarBrand>
              <button
                aria-expanded={navbarCollapse}
                className={classnames("navbar-toggler navbar-toggler", {
                  toggled: navbarCollapse
                })}
                onClick={toggleNavbarCollapse}
              >
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
              
            </div>
            <Collapse
              className="justify-content-end"
              navbar
              isOpen={navbarCollapse}
            >
              <Nav navbar style={{paddingTop:30}}>
                
              <NavItem>
                <NavLink  tag={Link}>
                <i className="mdi mdi-bell" style={{fontSize:25}}   />
                {/* <span class="count bg-danger" style={{borderRadious:50}}>0</span> */}
                
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle
                          aria-expanded={false}
                          aria-haspopup={true}
                          caret
                          color="default"
                          data-toggle="dropdown"
                          href="#"
                          id="dropdownMenuButton"
                          nav
                          onClick={(e) => e.preventDefault()}
                          role="button"
                        >
                          <i className="mdi mdi-account" style={{fontSize:25}}   />
                        </DropdownToggle>
                        <DropdownMenu
                          aria-labelledby="dropdownMenuButton"
                          className="dropdown-info"
                          style={{backgroundColor:'rgb(78, 231, 40)', border:'none' }}
                        >
                          
                          <DropdownItem header tag="span">
                              <h5 class="p-3 mb-0" style={{fontWeight:500, color:'white'}}>Profile</h5>
                              <div class="dropdown-divider"></div>
                            
                          </DropdownItem>
                          <DropdownItem
                            onClick={(e) => e.preventDefault()}
                             tag={Link} color="link"
                          >
                            
                            <Link style={linkStyle}>
                            <i class="mdi mdi-settings text-success"></i>Settings
                            </Link> 
                          </DropdownItem>
                          <DropdownItem
                            onClick={(e) => e.preventDefault()}
                            >
                            <Link to="/admin-login" style={linkStyle}>
                            <i class="mdi mdi-logout text-danger"></i>
                               Logout 
                            </Link>  
                          </DropdownItem>
                        </DropdownMenu>
                  </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Container>
  
        </Navbar>  

    );
};

export default AdminNav;