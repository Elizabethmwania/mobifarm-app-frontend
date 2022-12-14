import React from 'react';
import { Button, Container } from "reactstrap";
import { Link } from 'react-router-dom';
const Header = () => {
    let pageHeader = React.createRef();

    React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
    return (
    <>
      <div
        style={{
          backgroundImage: "url(" + require("../../img/banner.png") + ")"
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1>Mobifarm</h1>
            <h3>We train and offer loans for quality produce
            </h3>
            <br />
            <Button
              style={{color:'white', border:'1px solid white',borderRadius:'20px'}}
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="btn-round mr-1"
              color="neutral"
              target="_blank"
              outline
            >
              <i className="fa fa-play" />
              Watch video
            </Button>
            &nbsp;&nbsp;
            <Button 
            style={{color:'white', border:'1px solid white',borderRadius:'20px'}}
            className="btn-round" color="neutral" type="button" outline to="/farmers" tag={Link}>
              {/* <Link to="/farmers"> */}
              Get started
              {/* </Link> */}
            </Button>
          </div>
        </Container>
      </div>
    </>
    );
};

export default Header;