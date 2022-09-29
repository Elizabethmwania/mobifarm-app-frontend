import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
    return (
        
        <nav class="sidebar sidebar-offcanvas" id="sidebar" style={{backgroundColor:'#e8ecf1', paddingTop:20}}>
            <div class="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
                <a class="sidebar-brand brand-logo" href=""><h3>Mobifarm</h3></a>
                <a class="sidebar-brand brand-logo-mini" href=""><h3>M</h3></a>
            </div>
            <ul class="nav">
                <li class="nav-item menu-items">
                    <Link to='/offtaker-dashboard'
                    className="nav-link" >
                        <span class="menu-icon">
                            <i class="mdi mdi-speedometer"></i>
                        </span>
                        <span class="menu-title">Dashboard</span>
                    </Link>
                </li>
                <li class="nav-item menu-items">
                    <Link to='/offtaker-clients'
                    className="nav-link" >
                        <span class="menu-icon">
                            <i class="mdi mdi-laptop"></i>
                        </span>
                        <span class="menu-title">Clients</span>
                    </Link>
                </li>
                <li class="nav-item menu-items">
                    <Link to='/offtaker-products'
                    className="nav-link" >
                        <span class="menu-icon">
                            <i class="mdi mdi-playlist-play"></i>
                        </span>
                        <span class="menu-title">Products</span>
                    </Link>
                </li>
                <li class="nav-item menu-items">
                    <Link to='/offtaker-payments'
                    className="nav-link" >
                        <span class="menu-icon">
                            <i class="mdi mdi-table-large"></i>
                        </span>
                        <span class="menu-title">Payments</span>
                    </Link>
                </li>
                <li class="nav-item menu-items">
                    <Link to='/farmer-registration'
                    className="nav-link" >
                        <span class="menu-icon">
                            <i class="mdi mdi-file-document-box"></i>
                        </span>
                        <span class="menu-title">Create Client</span>
                    </Link>
                </li>
            </ul>
        </nav>

    );
};

export default SideNav;