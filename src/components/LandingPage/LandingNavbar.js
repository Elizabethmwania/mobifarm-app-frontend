import React from 'react';
import { Link } from 'react-router-dom';

import classnames from 'classnames';
import {
    Collapse,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Button,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,

  } from "reactstrap";

  const linkStyle = {
    textDecoration: 'none',
    color: '#66615b',
    fontSize: 16,
    fontWeight: 500,
    padding: '10px 45px 10px 15px'
  }

  const LandingNavbar = () => {
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
      <Navbar className={classnames("fixed-top", navbarColor)}
      color-on-scroll="300"
      expand="lg"
      >

        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              data-placement="bottom"
              to="/"
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
            <Nav navbar style={{paddingTop: 30}}>
              <NavItem>
              {/* <NavItem> */}
              <NavLink to="/" tag={Link}>
                <i className="nc-icon nc-layout-11" /> Home
              </NavLink>
            </NavItem>
              <NavItem>
              <NavLink to="/about" tag={Link}>
                <i className="nc-icon nc-layout-11" /> About Us
              </NavLink>
              </NavItem>
              <NavItem>
              <NavLink to="/contact" tag={Link}>
                <i className="nc-icon nc-layout-11" /> Contact
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
                        Individuals
                      </DropdownToggle>
                      <DropdownMenu
                        aria-labelledby="dropdownMenuButton"
                        className="dropdown-info"
                      >
                        
                        <DropdownItem
                          onClick={(e) => e.preventDefault()}
                          >
                          <Link to="/farmers" style={linkStyle}>
                            Farmers
                          </Link>
                        </DropdownItem>
                        <DropdownItem
                          onClick={(e) => e.preventDefault()}
                        >
                          <Link to="/offtaker-login" style={linkStyle}>
                            Offtakers
                          </Link>  
                        </DropdownItem>
                        <DropdownItem
                          onClick={(e) => e.preventDefault()}
                        >
                          <Link to="/dealers-login" style={linkStyle}>
                            Agro Dealers
                          </Link> 
                        </DropdownItem>
                        <DropdownItem
                          onClick={(e) => e.preventDefault()}
                          >
                            <Link to="/admin-login" style={linkStyle}>
                              Financial Institution
                            </Link> 
                        </DropdownItem>
                       
                      </DropdownMenu>
                    </UncontrolledDropdown>
              
              {/* <NavItem>
                <Button
                  className="btn-round"
                  color="danger"
                >
                  <i className="nc-icon nc-spaceship"></i> Call Now! <br/> +254734246801
                </Button>
              </NavItem> */}
              
            </Nav>
          </Collapse>
        </Container>

      </Navbar>
        
    );
};

export default LandingNavbar;