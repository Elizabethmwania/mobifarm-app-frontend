import React from 'react';
import { Link } from "react-router-dom";
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Badge
} from "reactstrap";

const OfftakerNavbar = () => {
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
              <Nav navbar>
                <NavItem>
                {/* <NavItem> */}
                <NavLink to="/" tag={Link}>
                <i className="fa fa-envelope" size="lg" />
                <span class="count bg-danger"></span>
                
                </NavLink>
              </NavItem>
                <NavItem>
                <NavLink to="/about" tag={Link}>
                  <i className="mdi mdi-email" /> About Us
                </NavLink>
                </NavItem>
                <NavItem>
                <NavLink to="/contact" tag={Link}>
                  <i className="nc-icon nc-layout-11" /> Contact
                </NavLink>
              </NavItem>
                {/* <UncontrolledDropdown nav inNavbar>
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
                  
                            <Link to="/farmers">
                              Farmers
                            </Link>
                          </DropdownItem>
                          <DropdownItem
                            onClick={(e) => e.preventDefault()}
                             tag={Link} color="link">
                            <Link to="/offtaker-login">
                            Offtakers
                            </Link>  
                          </DropdownItem>
                          <DropdownItem
                            onClick={(e) => e.preventDefault()}
                            to="/dealers-login" tag={Link}>
                            Agro Dealers
                          </DropdownItem>
                          <DropdownItem
                            onClick={(e) => e.preventDefault()}
                            to="/admin-login" tag={Link}>
                              Financial Institution
                          </DropdownItem>
                         
                        </DropdownMenu>
                      </UncontrolledDropdown>
                 */}
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

export default OfftakerNavbar;