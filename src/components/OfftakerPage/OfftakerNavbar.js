import React from 'react';
import { Link } from "react-router-dom";

const OfftakerNavbar = () => {
  
    return (
      
      <nav class="navbar p-0 fixed-top d-flex flex-row" >
          <div class="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center" >
              <a class="navbar-brand brand-logo-mini" href=""><h3 >M</h3></a>
          </div>
          <div class="navbar-menu-wrapper flex-grow d-flex align-items-stretch">
              <button class="navbar-toggler navbar-toggler align-self-center" type="button"
                  data-toggle="minimize">
                  <span class="mdi mdi-menu" ></span>
              </button>
              
              {/* <ul class="navbar-nav w-100">
                  <li class="nav-item w-100">
                      <form class="nav-link mt-2 mt-md-0 d-none d-lg-flex search">
                          <input type="text" class="form-control" placeholder="Search here..." style="background-color: rgb(78, 158, 70); border: 1px solid rgb(180, 174, 174);">
                      </form>
                  </li>
              </ul> */}
              <ul class="navbar-nav navbar-nav-right">
                  <li class="nav-item dropdown">
                      <a class="nav-link count-indicator dropdown-toggle" id="messageDropdown" href="#"
                          data-toggle="dropdown" aria-expanded="false">
                          <i className="mdi mdi-email"></i>
                          <span className="count bg-success"></span>
                      </a>
                      <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                          aria-labelledby="messageDropdown">
                          <h6 class="p-3 mb-0">Messages</h6>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item preview-item">
                              {/* <div class="preview-thumbnail">
                                  <img src="../../assets/images/faces/face4.jpg" alt="image"
                                      class="rounded-circle profile-pic">
                              </div> */}
                              <div class="preview-item-content">
                                  <p class="preview-subject ellipsis mb-1">Mark send you a message</p>
                                  <p class="text-muted mb-0"> 1 Minutes ago </p>
                              </div>
                          </a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item preview-item">
                              {/* <div class="preview-thumbnail">
                                  <img src="../../assets/images/faces/face2.jpg" alt="image"
                                      class="rounded-circle profile-pic">
                              </div> */}
                              <div class="preview-item-content">
                                  <p class="preview-subject ellipsis mb-1">Cregh send you a message</p>
                                  <p class="text-muted mb-0"> 15 Minutes ago </p>
                              </div>
                          </a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item preview-item">
                              {/* <div class="preview-thumbnail">
                                  <img src="../../assets/images/faces/face3.jpg" alt="image"
                                      class="rounded-circle profile-pic">
                              </div> */}
                              <div class="preview-item-content">
                                  <p class="preview-subject ellipsis mb-1">Profile picture updated</p>
                                  <p class="text-muted mb-0"> 18 Minutes ago </p>
                              </div>
                          </a>
                      </div>
                  </li>
                  <li class="nav-item dropdown">
                      <a class="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#"
                          data-toggle="dropdown">
                          <i class="mdi mdi-bell"></i>
                          <span class="count bg-danger"></span>
                      </a>
                      <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                          aria-labelledby="notificationDropdown">
                          <h6 class="p-3 mb-0">Notifications</h6>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item preview-item">
                              <div class="preview-thumbnail">
                                  <div class="preview-icon bg-dark rounded-circle">
                                      <i class="mdi mdi-plus text-info"></i>
                                  </div>
                              </div>
                              <div class="preview-item-content">
                                  <p class="preview-subject mb-1">Clients</p>
                                  <p class="text-muted ellipsis mb-0">100 clients added</p>
                              </div>
                          </a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item preview-item">
                              <div class="preview-thumbnail">
                                  <div class="preview-icon bg-dark rounded-circle">
                                      <i class="mdi mdi-check text-success"></i>
                                  </div>
                              </div>
                              <div class="preview-item-content">
                                  <p class="preview-subject mb-1">Approval</p>
                                  <p class="text-muted ellipsis mb-0"> 50 clients approved </p>
                              </div>
                          </a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item preview-item">
                              <div class="preview-thumbnail">
                                  <div class="preview-icon bg-dark rounded-circle">
                                      <i class="mdi mdi-link-variant text-warning"></i>
                                  </div>
                              </div>
                              <div class="preview-item-content">
                                  <p class="preview-subject mb-1">Pending</p>
                                  <p class="text-muted ellipsis mb-0">20 records pending </p>
                              </div>
                          </a>
                          <div class="dropdown-divider"></div>
                      </div>
                  </li>
                  <li class="nav-item dropdown">
                      <a class="nav-link" id="profileDropdown" href="#" data-toggle="dropdown">
                          {/* <div class="navbar-profile">
                              <img class="img-xs rounded-circle" src="../../assets/images/faces/face15.jpg"
                                  alt="">
                              <p class="mb-0 d-none d-sm-block navbar-profile-name">Kevin</p>
                              <i class="mdi mdi-menu-down d-none d-sm-block"></i>
                          </div> */}
                      </a>
                      <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                          aria-labelledby="profileDropdown">
                          <h6 class="p-3 mb-0">Profile</h6>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item preview-item">
                              <div class="preview-thumbnail">
                                  <div class="preview-icon bg-dark rounded-circle">
                                      <i class="mdi mdi-settings text-success"></i>
                                  </div>
                              </div>
                              <div class="preview-item-content">
                                  <p class="preview-subject mb-1">Settings</p>
                              </div>
                          </a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item preview-item" href="../../index.html">
                              <div class="preview-thumbnail">
                                  <div class="preview-icon bg-dark rounded-circle">
                                      <i class="mdi mdi-logout text-danger"></i>
                                  </div>
                              </div>
                              <div class="preview-item-content">
                                  <p class="preview-subject mb-1">Log out</p>
                              </div>
                          </a>

                      </div>
                  </li>
              </ul>
              <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button"
                  data-toggle="offcanvas">
                  <span class="mdi mdi-format-line-spacing"></span>
              </button>
          </div>
      </nav>
    );
};

export default OfftakerNavbar;