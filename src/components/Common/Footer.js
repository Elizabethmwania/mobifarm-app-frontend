import React from 'react';
import { Row, Container } from "reactstrap";

const Footer = () => {
    return (
        <footer class="footer">
        <div class=" d-sm-flex justify-content-center justify-content-sm-between">
            <span class="text-muted d-block text-center text-sm-left d-sm-inline-block">Copyright
                ©
                Neostream
                2022</span>
            <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center"> Managed by KCB<a href=""
                    target="_blank"></a></span>
        </div>
    </footer>

       
    );
};

export default Footer;