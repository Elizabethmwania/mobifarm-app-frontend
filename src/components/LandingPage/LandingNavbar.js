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
    Button
  } from "reactstrap";

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
              to="/index"
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
                <NavLink to="/" tag={Link}>
                  <i className="nc-icon nc-layout-11" /> Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/">
                  <i className="nc-icon nc-book-bookmark" /> About Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/">
                    <i className="nc-icon nc-book-bookmark" /> Individuals
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/">
                    <i className="nc-icon nc-book-bookmark" /> Contact
                </NavLink>
              </NavItem>
              <NavItem>
                <Button
                  className="btn-round"
                  color="danger"
                >
                  <i className="nc-icon nc-spaceship"></i> Call Now! <br/> +254734246801
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>

      </Navbar>
        
    );
};

export default LandingNavbar;