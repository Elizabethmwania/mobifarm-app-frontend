import React from 'react';
import { Link } from 'react-router-dom';

const AdminSideNav = () => {
    return (
        <nav class="sidebar sidebar-offcanvas" id="sidebar" style={{backgroundColor:'#e8ecf1'}}>
            <div class="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
                <a class="sidebar-brand brand-logo" href=""><h3>Mobifarm</h3></a>
                <a class="sidebar-brand brand-logo-mini" href=""><h3>M</h3></a>
            </div>
            <ul class="nav">
                <li class="nav-item menu-items">
                    <Link to='/dealers-dashboard'
                    className="nav-link" >
                        <span class="menu-icon">
                            <i class="mdi mdi-speedometer"></i>
                        </span>
                        <span class="menu-title">Dashboard</span>
                    </Link>
                </li>
                <li class="nav-item menu-items">
                    <Link to='/loans-statistics'
                    className="nav-link" >
                        <span class="menu-icon">
                            <i class="mdi mdi-laptop"></i>
                        </span>
                        <span class="menu-title">Loans Statistics</span>
                    </Link>
                </li>
                <li class="nav-item menu-items">
                    <Link to='/create-client'
                    className="nav-link" >
                        <span class="menu-icon">
                            <i class="mdi mdi-table-large"></i>
                        </span>
                        <span class="menu-title">Create Client</span>
                    </Link>
                </li>
                <li class="nav-item menu-items">
                    <Link to='/farmers-records'
                    className="nav-link" >
                        <span class="menu-icon">
                            <i class="mdi mdi-chart-bar"></i>
                        </span>
                        <span class="menu-title">Farmers Records</span>
                    </Link>
                </li>
                <li class="nav-item menu-items">
                    <Link to='/dealers-loans'
                    className="nav-link" >
                        <span class="menu-icon">
                            <i class="mdi mdi-file-document-box"></i>
                        </span>
                        <span class="menu-title">Transactions</span>
                    </Link>
                </li>
                

            </ul>
        </nav>
    );
};
export default AdminSideNav;