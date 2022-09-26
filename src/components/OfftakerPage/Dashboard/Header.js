import React from 'react';
import { Container, Navbar, Table } from 'reactstrap';
import img from '../../../img/banner.png'

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
          backgroundColor: '#7CE717'
        }}
        className="page-header page-header-xs"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
      </div>
        </>
    )
};

export default Header;