import React, { Component } from 'react';

class Sidebar extends Component {

    render() {
        return (
            <div>
                {/* Sidebar */}
                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                    {/* Sidebar - Brand */}
                    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="file:///C:/Users/mai.tran22/Postman/startbootstrap-sb-admin-2/index.html">
                        <div className="sidebar-brand-icon rotate-n-15">
                            <i className="fas fa-laugh-wink" />
                        </div>
                        <div className="sidebar-brand-text mx-3">SB Admin <sup>Mai</sup></div>
                    </a>
                    {/* Divider */}
                    <hr className="sidebar-divider my-0" />
                    {/* Nav Item - Dashboard */}
                    <li className="nav-item">
                        <a className="nav-link" href="file:///C:/Users/mai.tran22/Postman/startbootstrap-sb-admin-2/index.html">
                            <i className="fas fa-fw fa-tachometer-alt" />
                            <span>Dashboard</span></a>
                    </li>
                    {/* Divider */}
                    <hr className="sidebar-divider" />
                    {/* Heading */}
                    <div className="sidebar-heading">
                        Interface
          </div>
                    {/* Nav Item - Utilities Collapse Menu */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="file:///C:/Users/mai.tran22/Postman/startbootstrap-sb-admin-2/charts.html#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
                            <i className="fas fa-fw fa-wrench" />
                            <span>Utilities</span>
                        </a>
                        <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Custom Utilities:</h6>
                                <a className="collapse-item" href="file:///C:/Users/mai.tran22/Postman/startbootstrap-sb-admin-2/utilities-color.html">Colors</a>
                                <a className="collapse-item" href="file:///C:/Users/mai.tran22/Postman/startbootstrap-sb-admin-2/utilities-border.html">Borders</a>
                                <a className="collapse-item" href="file:///C:/Users/mai.tran22/Postman/startbootstrap-sb-admin-2/utilities-animation.html">Animations</a>
                                <a className="collapse-item" href="file:///C:/Users/mai.tran22/Postman/startbootstrap-sb-admin-2/utilities-other.html">Other</a>
                            </div>
                        </div>
                    </li>
                    {/* Divider */}
                    <hr className="sidebar-divider" />
                    {/* Heading */}
                    <div className="sidebar-heading">
                        Addons
          </div>
                    {/* Nav Item - Pages Collapse Menu */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="file:///C:/Users/mai.tran22/Postman/startbootstrap-sb-admin-2/charts.html#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
                            <i className="fas fa-fw fa-folder" />
                            <span>Pages</span>
                        </a>
                        <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Login Screens:</h6>
                                <a className="collapse-item" href="file:///C:/Users/mai.tran22/Postman/startbootstrap-sb-admin-2/login.html">Login</a>
                                <a className="collapse-item" href="file:///C:/Users/mai.tran22/Postman/startbootstrap-sb-admin-2/register.html">Register</a>
                                <a className="collapse-item" href="file:///C:/Users/mai.tran22/Postman/startbootstrap-sb-admin-2/forgot-password.html">Forgot Password</a>
                                <div className="collapse-divider" />
                                <h6 className="collapse-header">Other Pages:</h6>
                                <a className="collapse-item" href="file:///C:/Users/mai.tran22/Postman/startbootstrap-sb-admin-2/404.html">404 Page</a>
                                <a className="collapse-item" href="file:///C:/Users/mai.tran22/Postman/startbootstrap-sb-admin-2/blank.html">Blank Page</a>
                            </div>
                        </div>
                    </li>
                    {/* Nav Item - Charts */}
                    <li className="nav-item active">
                        <a className="nav-link" href="file:///C:/Users/mai.tran22/Postman/startbootstrap-sb-admin-2/charts.html">
                            <i className="fas fa-fw fa-chart-area" />
                            <span>Charts</span></a>
                    </li>
                    {/* Nav Item - Tables */}
                    <li className="nav-item">
                        <a className="nav-link" href="file:///C:/Users/mai.tran22/Postman/startbootstrap-sb-admin-2/tables.html">
                            <i className="fas fa-fw fa-table" />
                            <span>Tables</span></a>
                    </li>
                    {/* Divider */}
                    <hr className="sidebar-divider d-none d-md-block" />
                    {/* Sidebar Toggler (Sidebar) */}
                    <div className="text-center d-none d-md-inline">
                        <button className="rounded-circle border-0" id="sidebarToggle" />
                    </div>
                </ul>
            </div>
        );
    }
}

export default Sidebar;