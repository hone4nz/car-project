import React, { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <div className="wrapper ovh">
        {/* <div className="preloader"></div> */}
        <div className="listing_sidebar">
          <div className="siderbar_left_home pt20">
            <a className="sidebar_switch sidebar_close_btn float-end" href="#">
              X
            </a>
            <div className="footer_contact_widget mt100">
              <h3 className="title">Quick contact info</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis Theme
                natoque penatibus et magnis dis parturient montes, nascetur.
              </p>
            </div>
            <div className="footer_contact_widget">
              <h5 className="title">CONTACT</h5>
              <div className="footer_phone">+1 670 936 46 70</div>
              <p>hello@voiture.com</p>
            </div>
            <div className="footer_about_widget">
              <h5 className="title">OFFICE</h5>
              <p>
                Germany —<br />
                329 Queensberry Street,
                <br />
                North Melbourne VIC 3051
              </p>
            </div>
            <div className="footer_contact_widget">
              <h5 className="title">OPENING HOURS</h5>
              <p>
                Monday – Friday: 09:00AM – 09:00PM
                <br />
                Saturday: 09:00AM – 07:00PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        <header className="header-nav menu_style_home_one home2_style main-menu">
          <nav>
            <div className="container-fluid">
              <div className="menu-toggle">
                <button type="button" id="menu-btn">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>
              <a href="index-2.html" className="navbar_brand float-start dn-md">
                <img
                  className="logo1 img-fluid"
                  src="images/header-logo2.svg"
                  alt="header-logo2.png"
                />
                <img
                  className="logo2 img-fluid"
                  src="images/header-logo2.svg"
                  alt="header-logo2.svg"
                />
              </a>

              <ul
                id="respMenu"
                className="ace-responsive-menu menu_list_custom_code wa text-end"
                data-menu-style="horizontal"
              >
                <li>
                  {" "}
                  <a href="#">
                    <span className="title">Home</span>
                  </a>
                  <ul>
                    <li>
                      <a href="index-2.html">Home V1</a>
                    </li>
                    <li>
                      <a href="index2.html">Home V2</a>
                    </li>
                    <li>
                      <a href="index3.html">Home V3</a>
                    </li>
                    <li>
                      <a href="index4.html">Home V4</a>
                    </li>
                    <li>
                      <a href="index5.html">Home V5</a>
                    </li>
                    <li>
                      <a href="index6.html">Home V6</a>
                    </li>
                    <li>
                      <a href="index7.html">Home V7</a>
                    </li>
                  </ul>
                </li>
                <li>
                  {" "}
                  <a href="#">
                    <span className="title">Explore</span>
                  </a>
                  <ul>
                    <li>
                      {" "}
                      <a href="#">User Info</a>
                      <ul>
                        <li>
                          <a href="page-dashboard.html">Dashboard</a>
                        </li>
                        <li>
                          <a href="page-dashboard-profile.html">Profile</a>
                        </li>
                        <li>
                          <a href="page-dashboard-listing.html">My Listing</a>
                        </li>
                        <li>
                          <a href="page-dashboard-favorites.html">Favorites</a>
                        </li>
                        <li>
                          <a href="page-dashboard-add-listings.html">
                            Add Listing
                          </a>
                        </li>
                        <li>
                          <a href="page-dashboard-messages.html">Messages</a>
                        </li>
                        <li>
                          <a href="page-login.html">Logout</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="page-user-profile.html">User Profile</a>
                    </li>
                  </ul>
                </li>
                <li>
                  {" "}
                  <a href="#">
                    <span className="title">Listing</span>
                  </a>
                  <ul>
                    <li>
                      {" "}
                      <a href="#">Listing Styles</a>
                      <ul>
                        <li>
                          <a href="page-list-v1.html">Listing v1</a>
                        </li>
                        <li>
                          <a href="page-list-v2.html">Listing v2</a>
                        </li>
                        <li>
                          <a href="page-list-v3.html">Listing v3</a>
                        </li>
                        <li>
                          <a href="page-list-v4.html">Listing v4</a>
                        </li>
                        <li>
                          <a href="page-list-v5.html">Listing v5</a>
                        </li>
                        <li>
                          <a href="page-list-v6.html">Listing v6</a>
                        </li>
                        <li>
                          <a href="page-list-v7.html">Listing v7</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      {" "}
                      <a href="#">Listing Map</a>
                      <ul>
                        <li>
                          <a href="page-list-v8.html">Map v1</a>
                        </li>
                        <li>
                          <a href="page-list-v9.html">Map v2</a>
                        </li>
                        <li>
                          <a href="page-list-v10.html">Map v3</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      {" "}
                      <a href="#">Listing Single</a>
                      <ul>
                        <li>
                          <a href="page-car-single-v1.html">Single V1</a>
                        </li>
                        <li>
                          <a href="page-car-single-v2.html">Single V2</a>
                        </li>
                        <li>
                          <a href="page-car-single-v3.html">Single V3</a>
                        </li>
                        <li>
                          <a href="page-car-single-v4.html">Single V4</a>
                        </li>
                        <li>
                          <a href="page-car-single-v5.html">Single V5</a>
                        </li>
                        <li>
                          <a href="page-car-single-v6.html">Single V6</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="page-dashboard-add-listings.html">New Listing</a>
                    </li>
                  </ul>
                </li>
                <li>
                  {" "}
                  <a href="#">
                    <span className="title">Blog</span>
                  </a>
                  <ul>
                    <li>
                      <a href="page-blog-grid.html">Blog Grid</a>
                    </li>
                    <li>
                      <a href="page-blog-list.html">Blog List</a>
                    </li>
                    <li>
                      <a href="page-blog-single.html">Blog Single</a>
                    </li>
                  </ul>
                </li>
                <li>
                  {" "}
                  <a href="#">
                    <span className="title">Shop</span>
                  </a>
                  <ul>
                    <li>
                      <a href="page-shop.html">Shop</a>
                    </li>
                    <li>
                      <a href="page-shop-cart.html">Cart</a>
                    </li>
                    <li>
                      <a href="page-shop-checkout.html">Checkout</a>
                    </li>
                    <li>
                      <a href="page-shop-complete-order.html">Complete Order</a>
                    </li>
                    <li>
                      <a href="page-shop-single.html">Single</a>
                    </li>
                    <li>
                      <a href="page-user-profile.html">User Profile</a>
                    </li>
                  </ul>
                </li>
                <li>
                  {" "}
                  <a href="#">
                    <span className="title">Pages</span>
                  </a>
                  <ul>
                    <li>
                      <a href="page-about.html">About Us</a>
                    </li>
                    <li>
                      <a href="page-calculator.html">Calculator</a>
                    </li>
                    <li>
                      <a href="page-compare.html">Compare</a>
                    </li>
                    <li>
                      <a href="page-contact.html">Contact</a>
                    </li>
                    <li>
                      <a href="page-error.html">404 Page</a>
                    </li>
                    <li>
                      <a href="page-faq.html">Faq</a>
                    </li>
                    <li>
                      <a href="page-login.html">Login</a>
                    </li>
                    <li>
                      <a href="page-pricing.html">Pricing</a>
                    </li>
                    <li>
                      <a href="page-register.html">Register</a>
                    </li>
                    <li>
                      <a href="page-service.html">Service</a>
                    </li>
                    <li>
                      <a href="page-terms.html">Terms and Conditions</a>
                    </li>
                    <li>
                      <a href="page-ui-element.html">UI Elements</a>
                    </li>
                  </ul>
                </li>
                <li className="add_listing">
                  <a href="page-dashboard-add-listings.html">+ Add Listing</a>
                </li>
                <li className="sidebar_panel">
                  <a className="sidebar_switch pt0" href="#">
                    <span></span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        <div
          className="sign_up_modal modal fade"
          id="logInModal"
          data-backdrop="static"
          data-keyboard="false"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body container p60">
                <div className="row">
                  <div className="col-lg-12">
                    <ul
                      className="sign_up_tab nav nav-tabs"
                      id="myTab"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          id="home-tab"
                          data-bs-toggle="tab"
                          href="#home"
                          role="tab"
                          aria-controls="home"
                          aria-selected="true"
                        >
                          Login
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="profile-tab"
                          data-bs-toggle="tab"
                          href="#profile"
                          role="tab"
                          aria-controls="profile"
                          aria-selected="false"
                        >
                          Register
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="tab-content container p0" id="myTabContent">
                  <div
                    className="row mt30 tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="col-lg-12">
                      <div className="login_form">
                        <p>
                          New to Cars.com?{" "}
                          <a href="page-register.html">Sign up.</a> Are you a
                          dealer?
                        </p>
                        <form action="#">
                          <div className="mb-2 mr-sm-2">
                            <label className="form-label">
                              Username or email address *
                            </label>
                            <input type="text" className="form-control" />
                          </div>
                          <div className="form-group mb5">
                            <label className="form-label">Password *</label>
                            <input type="password" className="form-control" />
                          </div>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="exampleCheck3"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="exampleCheck3"
                            >
                              Remember me
                            </label>
                            <a className="btn-fpswd float-end" href="#">
                              Lost your password?
                            </a>
                          </div>
                          <button
                            type="submit"
                            className="btn btn-log btn-thm mt5"
                          >
                            Sign in
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div
                    className="row mt30 tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="col-lg-12">
                      <div className="sign_up_form">
                        <p>
                          Already have a profile?{" "}
                          <a href="page-login.html">Sign in.</a>
                        </p>
                        <form action="#">
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label className="form-label">First Name</label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label className="form-label">Last Name</label>
                                <input type="text" className="form-control" />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="form-group">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group mb20">
                                <label className="form-label">Password</label>
                                <input
                                  type="password"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="form-group mb20">
                                <label className="form-label">
                                  Confirm Password
                                </label>
                                <input
                                  type="password"
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>
                          <button
                            type="submit"
                            className="btn btn-signup btn-thm mb0"
                          >
                            Sign Up
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="page" className="stylehome1 h0">
          <div className="mobile-menu">
            <div className="header stylehome1">
              <div className="mobile_menu_bar">
                <a className="menubar" href="#menu">
                  <small>Menu</small>
                  <span></span>
                </a>
              </div>
              <div className="mobile_menu_main_logo">
                <img
                  className="nav_logo_img img-fluid"
                  src="images/header-logo2.svg"
                  alt="images/header-logo2.png"
                />
              </div>
            </div>
          </div>

          <nav id="menu" className="stylehome1">
            <ul>
              <li>
                <span>Home</span>
                <ul>
                  <li>
                    <a href="index-2.html">Home V1</a>
                  </li>
                  <li>
                    <a href="index2.html">Home V2</a>
                  </li>
                  <li>
                    <a href="index3.html">Home V3</a>
                  </li>
                  <li>
                    <a href="index4.html">Home V4</a>
                  </li>
                  <li>
                    <a href="index5.html">Home V5</a>
                  </li>
                  <li>
                    <a href="index6.html">Home V6</a>
                  </li>
                  <li>
                    <a href="index7.html">Home V7</a>
                  </li>
                </ul>
              </li>
              <li>
                <span>Explore</span>
                <ul>
                  <li>
                    <span>User Dashboard</span>
                    <ul>
                      <li>
                        <a href="page-dashboard.html">Dashboard</a>
                      </li>
                      <li>
                        <a href="page-dashboard-profile.html">Profile</a>
                      </li>
                      <li>
                        <a href="page-dashboard-listing.html">My Listing</a>
                      </li>
                      <li>
                        <a href="page-dashboard-favorites.html">Favorites</a>
                      </li>
                      <li>
                        <a href="page-dashboard-add-listings.html">
                          Add Listing
                        </a>
                      </li>
                      <li>
                        <a href="page-dashboard-messages.html">Messages</a>
                      </li>
                      <li>
                        <a href="page-login.html">Login</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="page-user-profile.html">User Profile</a>
                  </li>
                </ul>
              </li>
              <li>
                <span>Listings</span>
                <ul>
                  <li>
                    <span>Listing Styles</span>
                    <ul>
                      <li>
                        <a href="page-list-v1.html">Lising V1</a>
                      </li>
                      <li>
                        <a href="page-list-v2.html">Lising V2</a>
                      </li>
                      <li>
                        <a href="page-list-v3.html">Lising V3</a>
                      </li>
                      <li>
                        <a href="page-list-v4.html">Lising V4</a>
                      </li>
                      <li>
                        <a href="page-list-v5.html">Lising V5</a>
                      </li>
                      <li>
                        <a href="page-list-v6.html">Lising V6</a>
                      </li>
                      <li>
                        <a href="page-list-v7.html">Lising V7</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>Listing Map</span>
                    <ul>
                      <li>
                        <a href="page-list-v8.html">Map V1</a>
                      </li>
                      <li>
                        <a href="page-list-v9.html">Map V2</a>
                      </li>
                      <li>
                        <a href="page-list-v10.html">Map V3</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>Listing Single</span>
                    <ul>
                      <li>
                        <a href="page-car-single-v1.html">Single V1</a>
                      </li>
                      <li>
                        <a href="page-car-single-v2.html">Single V2</a>
                      </li>
                      <li>
                        <a href="page-car-single-v3.html">Single V3</a>
                      </li>
                      <li>
                        <a href="page-car-single-v4.html">Single V4</a>
                      </li>
                      <li>
                        <a href="page-car-single-v5.html">Single V5</a>
                      </li>
                      <li>
                        <a href="page-car-single-v6.html">Single V6</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="page-dashboard-add-listings.html">Add Listing</a>
                  </li>
                </ul>
              </li>
              <li>
                <span>Blog</span>
                <ul>
                  <li>
                    <a href="page-blog-grid.html">Blog Grid</a>
                  </li>
                  <li>
                    <a href="page-blog-list.html">Blog List</a>
                  </li>
                  <li>
                    <a href="page-blog-single.html">Blog Single</a>
                  </li>
                </ul>
              </li>
              <li>
                <span>Shop</span>
                <ul>
                  <li>
                    <a href="page-shop.html">Shop</a>
                  </li>
                  <li>
                    <a href="page-shop-cart.html">Shop Cart</a>
                  </li>
                  <li>
                    <a href="page-shop-checkout.html">Shop Checkout</a>
                  </li>
                  <li>
                    <a href="page-shop-complete-order.html">Order Completed</a>
                  </li>
                  <li>
                    <a href="page-shop-single.html">Shop Single</a>
                  </li>
                  <li>
                    <a href="page-user-profile.html">User Profile</a>
                  </li>
                </ul>
              </li>
              <li>
                <span>Pages</span>
                <ul>
                  <li>
                    <a href="page-about.html">About Us</a>
                  </li>
                  <li>
                    <a href="page-calculator.html">Loan Calculator</a>
                  </li>
                  <li>
                    <a href="page-compare.html">Compare</a>
                  </li>
                  <li>
                    <a href="page-contact.html">Contact</a>
                  </li>
                  <li>
                    <a href="page-error.html">Error</a>
                  </li>
                  <li>
                    <a href="page-faq.html">Faq</a>
                  </li>
                  <li>
                    <a href="page-login.html">Login</a>
                  </li>
                  <li>
                    <a href="page-pricing.html">Pricing Table</a>
                  </li>
                  <li>
                    <a href="page-register.html">Sign up</a>
                  </li>
                  <li>
                    <a href="page-service.html">Service</a>
                  </li>
                  <li>
                    <a href="page-terms.html">Terms & Condition</a>
                  </li>
                  <li>
                    <a href="page-ui-element.html">UI Elements</a>
                  </li>
                </ul>
              </li>

              <li className="mm-add-listing">
                <span className="border-none">
                  <span className="mmenu-contact-info">
                    <span className="phone-num">
                      <i className="flaticon-map"></i>{" "}
                      <a href="#">47 Bakery Street, London, UK</a>
                    </span>
                    <span className="phone-num">
                      <i className="flaticon-phone-call"></i>{" "}
                      <a href="#">1-800-458-56987</a>
                    </span>
                    <span className="phone-num">
                      <i className="flaticon-clock"></i>{" "}
                      <a href="#">Mon - Fri 8:00 - 18:00</a>
                    </span>
                  </span>
                  <span className="social-links">
                    <a href="#">
                      <span className="fab fa-facebook-f"></span>
                    </a>
                    <a href="#">
                      <span className="fab fa-twitter"></span>
                    </a>
                    <a href="#">
                      <span className="fab fa-instagram"></span>
                    </a>
                    <a href="#">
                      <span className="fab fa-youtube"></span>
                    </a>
                    <a href="#">
                      <span className="fab fa-pinterest"></span>
                    </a>
                  </span>
                </span>
              </li>
            </ul>
          </nav>
        </div>

        <section className="home-one mt10 mt70-992 p0 bdrs16 bdrs0-md ovh">
          <div className="container-fluid p0">
            <div className="row">
              <div className="col-xl-12">
                <div className="main-banner-wrapper home2_main_slider mb30-md">
                  <div className="banner-style-one owl-theme owl-carousel dots_none">
                    <div
                      className="slide slide-one"
                      style={{
                        backgroundImage: "url(images/home/2.jpg)",
                        height: "750px",
                      }}
                    >
                      <div className="container">
                        <div className="row home-content-home2-style">
                          <div className="col-lg-12 p0">
                            <h2 className="banner-title">
                              <small>2021</small> <br /> Audi A8 L 55
                            </h2>
                            <h3 className="banner_top_title text-thm">
                              <span className="aminated-object1">
                                <img
                                  className="objects"
                                  src="images/home/title-bottom-border.svg"
                                  alt=""
                                />
                              </span>
                              <span>$746</span>{" "}
                              <small className="text-white">/ Month</small>
                            </h3>
                            <a
                              href="page-car-single-v1.html"
                              className="btn banner-btn"
                            >
                              Learn More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slide slide-one"
                      style={{
                        backgroundImage: "url(images/home/1.jpg)",
                        height: "750px",
                      }}
                    >
                      <div className="container">
                        <div className="row home-content-home2-style">
                          <div className="col-lg-12 p0">
                            <h2 className="banner-title">
                              <small>2021</small> <br /> Audi A8 L 55
                            </h2>
                            <h3 className="banner_top_title text-thm">
                              <span className="aminated-object1">
                                <img
                                  className="objects"
                                  src="images/home/title-bottom-border.svg"
                                  alt=""
                                />
                              </span>
                              <span>$746</span>{" "}
                              <small className="text-white">/ Month</small>
                            </h3>
                            <a
                              href="page-car-single-v1.html"
                              className="btn banner-btn"
                            >
                              Learn More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slide slide-one"
                      style={{
                        backgroundImage: "url(images/home/6.jpg)",
                        height: "750px",
                      }}
                    >
                      <div className="container">
                        <div className="row home-content-home2-style">
                          <div className="col-lg-12 p0">
                            <h2 className="banner-title">
                              <small>2021</small> <br /> BMW M8 Gran Coupe
                            </h2>
                            <h3 className="banner_top_title text-thm">
                              <span className="aminated-object1">
                                <img
                                  className="objects"
                                  src="images/home/title-bottom-border.svg"
                                  alt=""
                                />
                              </span>
                              <span>$746</span>{" "}
                              <small className="text-white">/ Month</small>
                            </h3>
                            <a
                              href="page-car-single-v1.html"
                              className="btn banner-btn"
                            >
                              Learn More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-btn-block banner-carousel-btn">
                    <span className="carousel-btn left-btn">
                      <i className="flaticon-left-arrow left"></i>
                    </span>
                    <span className="carousel-btn right-btn">
                      <i className="flaticon-right-arrow right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="whychose_us pb70 pt0">
          <div className="container">
            <div className="row mb20">
              <div className="col-lg-10 m-auto">
                <div className="advance_search_panel home2_style">
                  <div className="row">
                    <div className="col-lg-12">
                      <ul
                        className="nav nav-pills justify-content-center"
                        id="pills-tab"
                        role="tablist"
                      >
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link active"
                            id="pills-allstatus-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-allstatus"
                            type="button"
                            role="tab"
                            aria-controls="pills-allstatus"
                            aria-selected="true"
                          >
                            All Status
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="pills-usedcar-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-usedcar"
                            type="button"
                            role="tab"
                            aria-controls="pills-usedcar"
                            aria-selected="false"
                          >
                            Used Cars
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button
                            className="nav-link"
                            id="pills-newcar-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-newcar"
                            type="button"
                            role="tab"
                            aria-controls="pills-newcar"
                            aria-selected="false"
                          >
                            New Cars
                          </button>
                        </li>
                      </ul>
                      <div className="adss_bg_stylehome1">
                        <div className="tab-content" id="pills-tabContent">
                          <div
                            className="tab-pane fade show active"
                            id="pills-allstatus"
                            role="tabpanel"
                            aria-labelledby="pills-allstatus-tab"
                          >
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="home1_advance_search_wrapper">
                                  <ul className="mb0 text-center">
                                    <li className="list-inline-item">
                                      <div className="select-boxes">
                                        <div className="car_brand">
                                          <h6 className="title">Make</h6>
                                          <select className="selectpicker">
                                            <option>Select Makes</option>
                                            <option>Audi</option>
                                            <option>Bentley</option>
                                            <option>BMW</option>
                                            <option>Ford</option>
                                            <option>Honda</option>
                                            <option>Mercedes</option>
                                          </select>
                                        </div>
                                      </div>
                                    </li>
                                    <li className="list-inline-item">
                                      <div className="select-boxes">
                                        <div className="car_models">
                                          <h6 className="title">Models</h6>
                                          <select className="selectpicker">
                                            <option>Select Models</option>
                                            <option>A3 Sportback</option>
                                            <option>A4</option>
                                            <option>A6</option>
                                            <option>Q5</option>
                                          </select>
                                        </div>
                                      </div>
                                    </li>
                                    <li className="list-inline-item">
                                      <div className="select-boxes">
                                        <div className="car_prices">
                                          <h6 className="title">Price</h6>
                                          <select className="selectpicker">
                                            <option>All Price</option>
                                            <option>No max Price</option>
                                            <option>$2,000</option>
                                            <option>$5,000</option>
                                            <option>$10,000</option>
                                            <option>$15,000</option>
                                            <option>$5,000</option>
                                          </select>
                                        </div>
                                      </div>
                                    </li>
                                    <li className="list-inline-item">
                                      <div className="d-block">
                                        <button className="btn btn-thm advnc_search_form_btn">
                                          <span className="flaticon-magnifiying-glass"></span>
                                          Search
                                        </button>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="pills-usedcar"
                            role="tabpanel"
                            aria-labelledby="pills-usedcar-tab"
                          >
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="home1_advance_search_wrapper">
                                  <ul className="mb0 text-center">
                                    <li className="list-inline-item">
                                      <div className="select-boxes">
                                        <div className="car_brand">
                                          <h6 className="title">Make</h6>
                                          <select className="selectpicker">
                                            <option>Select Makes</option>
                                            <option>Audi</option>
                                            <option>Bentley</option>
                                            <option>BMW</option>
                                            <option>Ford</option>
                                            <option>Honda</option>
                                            <option>Mercedes</option>
                                          </select>
                                        </div>
                                      </div>
                                    </li>
                                    <li className="list-inline-item">
                                      <div className="select-boxes">
                                        <div className="car_models">
                                          <h6 className="title">Models</h6>
                                          <select className="selectpicker">
                                            <option>Select Models</option>
                                            <option>A3 Sportback</option>
                                            <option>A4</option>
                                            <option>A6</option>
                                            <option>Q5</option>
                                          </select>
                                        </div>
                                      </div>
                                    </li>
                                    <li className="list-inline-item">
                                      <div className="select-boxes">
                                        <div className="car_prices">
                                          <h6 className="title">Price</h6>
                                          <select className="selectpicker">
                                            <option>All Price</option>
                                            <option>No max Price</option>
                                            <option>$2,000</option>
                                            <option>$5,000</option>
                                            <option>$10,000</option>
                                            <option>$15,000</option>
                                            <option>$5,000</option>
                                          </select>
                                        </div>
                                      </div>
                                    </li>
                                    <li className="list-inline-item">
                                      <div className="select-boxes">
                                        <button className="btn btn-thm advnc_search_form_btn">
                                          <span className="flaticon-magnifiying-glass"></span>
                                          Search
                                        </button>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="pills-newcar"
                            role="tabpanel"
                            aria-labelledby="pills-newcar-tab"
                          >
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="home1_advance_search_wrapper">
                                  <ul className="mb0 text-center">
                                    <li className="list-inline-item">
                                      <div className="select-boxes">
                                        <div className="car_brand">
                                          <h6 className="title">Make</h6>
                                          <select className="selectpicker">
                                            <option>Select Makes</option>
                                            <option>Audi</option>
                                            <option>Bentley</option>
                                            <option>BMW</option>
                                            <option>Ford</option>
                                            <option>Honda</option>
                                            <option>Mercedes</option>
                                          </select>
                                        </div>
                                      </div>
                                    </li>
                                    <li className="list-inline-item">
                                      <div className="select-boxes">
                                        <div className="car_models">
                                          <h6 className="title">Models</h6>
                                          <select className="selectpicker">
                                            <option>Select Models</option>
                                            <option>A3 Sportback</option>
                                            <option>A4</option>
                                            <option>A6</option>
                                            <option>Q5</option>
                                          </select>
                                        </div>
                                      </div>
                                    </li>
                                    <li className="list-inline-item">
                                      <div className="select-boxes">
                                        <div className="car_prices">
                                          <h6 className="title">Price</h6>
                                          <select className="selectpicker">
                                            <option>All Price</option>
                                            <option>No max Price</option>
                                            <option>$2,000</option>
                                            <option>$5,000</option>
                                            <option>$10,000</option>
                                            <option>$15,000</option>
                                            <option>$5,000</option>
                                          </select>
                                        </div>
                                      </div>
                                    </li>
                                    <li className="list-inline-item">
                                      <div className="select-boxes">
                                        <button className="btn btn-thm advnc_search_form_btn">
                                          <span className="flaticon-magnifiying-glass"></span>
                                          Search
                                        </button>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt100 justify-content-center">
              <div className="col-lg-8">
                <div className="main-title text-center">
                  <h2>Why Choose Us?</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-lg-4">
                <div className="why_chose_us">
                  <div className="icon float-start fn-520">
                    <span className="flaticon-price-tag"></span>
                  </div>
                  <div className="details">
                    <h5 className="title">Best Price</h5>
                    <p>
                      Our stress-free finance department that can find financial
                      solutions to save you money.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="why_chose_us">
                  <div className="icon float-start fn-520 style2">
                    <span className="flaticon-price-tag"></span>
                  </div>
                  <div className="details">
                    <h5 className="title">Trusted By Thousands</h5>
                    <p>
                      Our stress-free finance department that can find financial
                      solutions to save you money.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div className="why_chose_us">
                  <div className="icon float-start fn-520 style3">
                    <span className="flaticon-price-tag"></span>
                  </div>
                  <div className="details">
                    <h5 className="title">Wide Range of Brands</h5>
                    <p>
                      Our stress-free finance department that can find financial
                      solutions to save you money.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="featured-product pt0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="main-title text-center">
                  <h2>Featured Listings</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="popular_listing_sliders row">
                  <div
                    className="nav nav-tabs col-lg-12 justify-content-center"
                    role="tablist"
                  >
                    <button
                      className="nav-link active"
                      id="nav-home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-home"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      All Status
                    </button>
                    <button
                      className="nav-link"
                      id="nav-shopping-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-shopping"
                      role="tab"
                      aria-controls="nav-shopping"
                      aria-selected="false"
                    >
                      New Cars
                    </button>
                    <button
                      className="nav-link"
                      id="nav-hotels-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-hotels"
                      role="tab"
                      aria-controls="nav-hotels"
                      aria-selected="false"
                    >
                      Used Cars
                    </button>
                  </div>

                  <div className="tab-content col-lg-12" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="nav-home"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      <div className="row">
                        <div className="col-sm-6 col-xl-6">
                          <div className="car-listing list_style">
                            <div className="thumb">
                              <div className="tag">FEATURED</div>
                              <img
                                className="h100p"
                                src="images/listing/1.jpg"
                                alt="1.jpg"
                              />
                              <div className="thmb_cntnt2">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a className="text-white" href="#">
                                      <span className="flaticon-photo-camera mr3"></span>{" "}
                                      22
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a className="text-white" href="#">
                                      <span className="flaticon-play-button mr3"></span>{" "}
                                      3
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="thmb_cntnt3">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-shuffle-arrows"></span>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-heart"></span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="details">
                              <div className="wrapper">
                                <h5 className="price">$129</h5>
                                <h6 className="title">
                                  <a href="page-car-single-v1.html">
                                    Volvo XC90 - 2020
                                  </a>
                                </h6>
                                <div className="listign_review">
                                  <ul className="mb0">
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">4.7</a>
                                    </li>
                                    <li className="list-inline-item">
                                      (684 reviews)
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="listing_footer">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-road-perspective me-2"></span>
                                      77362
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-gas-station me-2"></span>
                                      Diesel
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-gear me-2"></span>
                                      Automatic
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="car-listing list_style">
                            <div className="thumb">
                              <div className="tag">FEATURED</div>
                              <img
                                className="h100p"
                                src="images/listing/5.jpg"
                                alt="5.jpg"
                              />
                              <div className="thmb_cntnt2">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a className="text-white" href="#">
                                      <span className="flaticon-photo-camera mr3"></span>{" "}
                                      22
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a className="text-white" href="#">
                                      <span className="flaticon-play-button mr3"></span>{" "}
                                      3
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="thmb_cntnt3">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-shuffle-arrows"></span>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-heart"></span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="details">
                              <div className="wrapper">
                                <h5 className="price">$129</h5>
                                <h6 className="title">
                                  <a href="page-car-single-v1.html">
                                    Audi A8 L 55 - 2021
                                  </a>
                                </h6>
                                <div className="listign_review">
                                  <ul className="mb0">
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">4.7</a>
                                    </li>
                                    <li className="list-inline-item">
                                      (684 reviews)
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="listing_footer">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-road-perspective me-2"></span>
                                      77362
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-gas-station me-2"></span>
                                      Diesel
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-gear me-2"></span>
                                      Automatic
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="car-listing list_style">
                            <div className="thumb">
                              <div className="tag">FEATURED</div>
                              <img
                                className="h100p"
                                src="images/listing/7.jpg"
                                alt="7.jpg"
                              />
                              <div className="thmb_cntnt2">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a className="text-white" href="#">
                                      <span className="flaticon-photo-camera mr3"></span>{" "}
                                      22
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a className="text-white" href="#">
                                      <span className="flaticon-play-button mr3"></span>{" "}
                                      3
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="thmb_cntnt3">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-shuffle-arrows"></span>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-heart"></span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="details">
                              <div className="wrapper">
                                <h5 className="price">$129</h5>
                                <h6 className="title">
                                  <a href="page-car-single-v1.html">
                                    Bentley Bentayga V8 - 2020
                                  </a>
                                </h6>
                                <div className="listign_review">
                                  <ul className="mb0">
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">4.7</a>
                                    </li>
                                    <li className="list-inline-item">
                                      (684 reviews)
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="listing_footer">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-road-perspective me-2"></span>
                                      77362
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-gas-station me-2"></span>
                                      Diesel
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-gear me-2"></span>
                                      Automatic
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-xl-6">
                          <div className="car-listing list_style">
                            <div className="thumb">
                              <div className="tag">FEATURED</div>
                              <img
                                className="h100p"
                                src="images/listing/2.jpg"
                                alt="2.jpg"
                              />
                              <div className="thmb_cntnt2">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a className="text-white" href="#">
                                      <span className="flaticon-photo-camera mr3"></span>{" "}
                                      22
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a className="text-white" href="#">
                                      <span className="flaticon-play-button mr3"></span>{" "}
                                      3
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="thmb_cntnt3">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-shuffle-arrows"></span>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-heart"></span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="details">
                              <div className="wrapper">
                                <h5 className="price">$129</h5>
                                <h6 className="title">
                                  <a href="page-car-single-v1.html">
                                    Mercedes-Benz S 560 - 2021
                                  </a>
                                </h6>
                                <div className="listign_review">
                                  <ul className="mb0">
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">4.7</a>
                                    </li>
                                    <li className="list-inline-item">
                                      (684 reviews)
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="listing_footer">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-road-perspective me-2"></span>
                                      77362
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-gas-station me-2"></span>
                                      Diesel
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-gear me-2"></span>
                                      Automatic
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="car-listing list_style">
                            <div className="thumb">
                              <div className="tag">FEATURED</div>
                              <img
                                className="h100p"
                                src="images/listing/3.jpg"
                                alt="3.jpg"
                              />
                              <div className="thmb_cntnt2">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a className="text-white" href="#">
                                      <span className="flaticon-photo-camera mr3"></span>{" "}
                                      22
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a className="text-white" href="#">
                                      <span className="flaticon-play-button mr3"></span>{" "}
                                      3
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="thmb_cntnt3">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-shuffle-arrows"></span>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-heart"></span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="details">
                              <div className="wrapper">
                                <h5 className="price">$129</h5>
                                <h6 className="title">
                                  <a href="page-car-single-v1.html">
                                    BMW M8 Gran Coupe Base - 2021
                                  </a>
                                </h6>
                                <div className="listign_review">
                                  <ul className="mb0">
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">4.7</a>
                                    </li>
                                    <li className="list-inline-item">
                                      (684 reviews)
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="listing_footer">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-road-perspective me-2"></span>
                                      77362
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-gas-station me-2"></span>
                                      Diesel
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-gear me-2"></span>
                                      Automatic
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="car-listing list_style">
                            <div className="thumb">
                              <div className="tag">FEATURED</div>
                              <img
                                className="h100p"
                                src="images/listing/8.jpg"
                                alt="8.jpg"
                              />
                              <div className="thmb_cntnt2">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a className="text-white" href="#">
                                      <span className="flaticon-photo-camera mr3"></span>{" "}
                                      22
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a className="text-white" href="#">
                                      <span className="flaticon-play-button mr3"></span>{" "}
                                      3
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="thmb_cntnt3">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-shuffle-arrows"></span>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-heart"></span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="details">
                              <div className="wrapper">
                                <h5 className="price">$129</h5>
                                <h6 className="title">
                                  <a href="page-car-single-v1.html">
                                    Ferrari 488 Spider Base - 2019
                                  </a>
                                </h6>
                                <div className="listign_review">
                                  <ul className="mb0">
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">4.7</a>
                                    </li>
                                    <li className="list-inline-item">
                                      (684 reviews)
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="listing_footer">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-road-perspective me-2"></span>
                                      77362
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-gas-station me-2"></span>
                                      Diesel
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-gear me-2"></span>
                                      Automatic
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-shopping"
                      role="tabpanel"
                      aria-labelledby="nav-shopping-tab"
                    >
                      <div className="row">
                        <div className="col-sm-6 col-xl-3">
                          <div className="car-listing">
                            <div className="thumb">
                              <div className="tag">FEATURED</div>
                              <img
                                className="h100p"
                                src="images/listing/1.jpg"
                                alt="1.jpg"
                              />
                              <div className="thmb_cntnt2">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a className="text-white" href="#">
                                      <span className="flaticon-photo-camera mr3"></span>{" "}
                                      22
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a className="text-white" href="#">
                                      <span className="flaticon-play-button mr3"></span>{" "}
                                      3
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="thmb_cntnt3">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-shuffle-arrows"></span>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-heart"></span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="details">
                              <div className="wrapper">
                                <h5 className="price">$129</h5>
                                <h6 className="title">
                                  <a href="page-car-single-v1.html">
                                    Volvo XC90 - 2020
                                  </a>
                                </h6>
                                <div className="listign_review">
                                  <ul className="mb0">
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">4.7</a>
                                    </li>
                                    <li className="list-inline-item">
                                      (684 reviews)
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="listing_footer">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-road-perspective me-2"></span>
                                      77362
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-gas-station me-2"></span>
                                      Diesel
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-gear me-2"></span>
                                      Automatic
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="car-listing">
                            <div className="thumb">
                              <div className="tag">FEATURED</div>
                              <img
                                className="h100p"
                                src="images/listing/5.jpg"
                                alt="5.jpg"
                              />
                              <div className="thmb_cntnt2">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a className="text-white" href="#">
                                      <span className="flaticon-photo-camera mr3"></span>{" "}
                                      22
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a className="text-white" href="#">
                                      <span className="flaticon-play-button mr3"></span>{" "}
                                      3
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="thmb_cntnt3">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-shuffle-arrows"></span>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-heart"></span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="details">
                              <div className="wrapper">
                                <h5 className="price">$129</h5>
                                <h6 className="title">
                                  <a href="page-car-single-v1.html">
                                    Audi A8 L 55 - 2021
                                  </a>
                                </h6>
                                <div className="listign_review">
                                  <ul className="mb0">
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">4.7</a>
                                    </li>
                                    <li className="list-inline-item">
                                      (684 reviews)
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="listing_footer">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-road-perspective me-2"></span>
                                      77362
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-gas-station me-2"></span>
                                      Diesel
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-gear me-2"></span>
                                      Automatic
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-xl-3">
                          <div className="car-listing">
                            <div className="thumb">
                              <div className="tag">FEATURED</div>
                              <img
                                className="h100p"
                                src="images/listing/2.jpg"
                                alt="2.jpg"
                              />
                              <div className="thmb_cntnt2">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a className="text-white" href="#">
                                      <span className="flaticon-photo-camera mr3"></span>{" "}
                                      22
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a className="text-white" href="#">
                                      <span className="flaticon-play-button mr3"></span>{" "}
                                      3
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="thmb_cntnt3">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-shuffle-arrows"></span>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-heart"></span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="details">
                              <div className="wrapper">
                                <h5 className="price">$56</h5>
                                <h6 className="title">
                                  <a href="page-car-single-v1.html">
                                    Mercedes-Benz S 560 - 2021
                                  </a>
                                </h6>
                                <div className="listign_review">
                                  <ul className="mb0">
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">4.7</a>
                                    </li>
                                    <li className="list-inline-item">
                                      (684 reviews)
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="listing_footer">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-road-perspective me-2"></span>
                                      77362
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-gas-station me-2"></span>
                                      Diesel
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-gear me-2"></span>
                                      Automatic
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="car-listing">
                            <div className="thumb">
                              <div className="tag">FEATURED</div>
                              <img
                                className="h100p"
                                src="images/listing/6.jpg"
                                alt="6.jpg"
                              />
                              <div className="thmb_cntnt2">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a className="text-white" href="#">
                                      <span className="flaticon-photo-camera mr3"></span>{" "}
                                      22
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a className="text-white" href="#">
                                      <span className="flaticon-play-button mr3"></span>{" "}
                                      3
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="thmb_cntnt3">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-shuffle-arrows"></span>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-heart"></span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="details">
                              <div className="wrapper">
                                <h5 className="price">$56</h5>
                                <h6 className="title">
                                  <a href="page-car-single-v1.html">
                                    Land Rover Range Rover HSE Westminster
                                  </a>
                                </h6>
                                <div className="listign_review">
                                  <ul className="mb0">
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">4.7</a>
                                    </li>
                                    <li className="list-inline-item">
                                      (684 reviews)
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="listing_footer">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-road-perspective me-2"></span>
                                      77362
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-gas-station me-2"></span>
                                      Diesel
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-gear me-2"></span>
                                      Automatic
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-xl-3">
                          <div className="car-listing">
                            <div className="thumb">
                              <div className="tag">FEATURED</div>
                              <img
                                className="h100p"
                                src="images/listing/3.jpg"
                                alt="3.jpg"
                              />
                              <div className="thmb_cntnt2">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a className="text-white" href="#">
                                      <span className="flaticon-photo-camera mr3"></span>{" "}
                                      22
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a className="text-white" href="#">
                                      <span className="flaticon-play-button mr3"></span>{" "}
                                      3
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="thmb_cntnt3">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-shuffle-arrows"></span>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-heart"></span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="details">
                              <div className="wrapper">
                                <h5 className="price">$230</h5>
                                <h6 className="title">
                                  <a href="page-car-single-v1.html">
                                    BMW M8 Gran Coupe Base - 2021
                                  </a>
                                </h6>
                                <div className="listign_review">
                                  <ul className="mb0">
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">4.7</a>
                                    </li>
                                    <li className="list-inline-item">
                                      (684 reviews)
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="listing_footer">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-road-perspective me-2"></span>
                                      77362
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-gas-station me-2"></span>
                                      Diesel
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-gear me-2"></span>
                                      Automatic
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="car-listing">
                            <div className="thumb">
                              <div className="tag">FEATURED</div>
                              <img
                                className="h100p"
                                src="images/listing/7.jpg"
                                alt="7.jpg"
                              />
                              <div className="thmb_cntnt2">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a className="text-white" href="#">
                                      <span className="flaticon-photo-camera mr3"></span>{" "}
                                      22
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a className="text-white" href="#">
                                      <span className="flaticon-play-button mr3"></span>{" "}
                                      3
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="thmb_cntnt3">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-shuffle-arrows"></span>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-heart"></span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="details">
                              <div className="wrapper">
                                <h5 className="price">$230</h5>
                                <h6 className="title">
                                  <a href="page-car-single-v1.html">
                                    Bentley Bentayga V8 - 2020
                                  </a>
                                </h6>
                                <div className="listign_review">
                                  <ul className="mb0">
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">4.7</a>
                                    </li>
                                    <li className="list-inline-item">
                                      (684 reviews)
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="listing_footer">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-road-perspective me-2"></span>
                                      77362
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-gas-station me-2"></span>
                                      Diesel
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-gear me-2"></span>
                                      Automatic
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-xl-3">
                          <div className="car-listing">
                            <div className="thumb">
                              <div className="tag blue">SPECIAL</div>
                              <img
                                className="h100p"
                                src="images/listing/4.jpg"
                                alt="4.jpg"
                              />
                              <div className="thmb_cntnt2">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a className="text-white" href="#">
                                      <span className="flaticon-photo-camera mr3"></span>{" "}
                                      22
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a className="text-white" href="#">
                                      <span className="flaticon-play-button mr3"></span>{" "}
                                      3
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="thmb_cntnt3">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-shuffle-arrows"></span>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-heart"></span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="details">
                              <div className="wrapper">
                                <h5 className="price">$478</h5>
                                <h6 className="title">
                                  <a href="page-car-single-v1.html">
                                    Nıssan Qasqai - Sky Pack
                                  </a>
                                </h6>
                                <div className="listign_review">
                                  <ul className="mb0">
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">4.7</a>
                                    </li>
                                    <li className="list-inline-item">
                                      (684 reviews)
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="listing_footer">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-road-perspective me-2"></span>
                                      77362
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-gas-station me-2"></span>
                                      Diesel
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-gear me-2"></span>
                                      Automatic
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="car-listing">
                            <div className="thumb">
                              <div className="tag">FEATURED</div>
                              <img
                                className="h100p"
                                src="images/listing/8.jpg"
                                alt="8.jpg"
                              />
                              <div className="thmb_cntnt2">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a className="text-white" href="#">
                                      <span className="flaticon-photo-camera mr3"></span>{" "}
                                      22
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a className="text-white" href="#">
                                      <span className="flaticon-play-button mr3"></span>{" "}
                                      3
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="thmb_cntnt3">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-shuffle-arrows"></span>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-heart"></span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="details">
                              <div className="wrapper">
                                <h5 className="price">$478</h5>
                                <h6 className="title">
                                  <a href="page-car-single-v1.html">
                                    Ferrari 488 Spider Base - 2019
                                  </a>
                                </h6>
                                <div className="listign_review">
                                  <ul className="mb0">
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">4.7</a>
                                    </li>
                                    <li className="list-inline-item">
                                      (684 reviews)
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="listing_footer">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-road-perspective me-2"></span>
                                      77362
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-gas-station me-2"></span>
                                      Diesel
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-gear me-2"></span>
                                      Automatic
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-hotels"
                      role="tabpanel"
                      aria-labelledby="nav-hotels-tab"
                    >
                      <div className="row">
                        <div className="col-sm-6 col-xl-3">
                          <div className="car-listing">
                            <div className="thumb">
                              <div className="tag">FEATURED</div>
                              <img
                                className="h100p"
                                src="images/listing/1.jpg"
                                alt="1.jpg"
                              />
                              <div className="thmb_cntnt2">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a className="text-white" href="#">
                                      <span className="flaticon-photo-camera mr3"></span>{" "}
                                      22
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a className="text-white" href="#">
                                      <span className="flaticon-play-button mr3"></span>{" "}
                                      3
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="thmb_cntnt3">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-shuffle-arrows"></span>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-heart"></span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="details">
                              <div className="wrapper">
                                <h5 className="price">$129</h5>
                                <h6 className="title">
                                  <a href="page-car-single-v1.html">
                                    Volvo XC90 - 2020
                                  </a>
                                </h6>
                                <div className="listign_review">
                                  <ul className="mb0">
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">4.7</a>
                                    </li>
                                    <li className="list-inline-item">
                                      (684 reviews)
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="listing_footer">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-road-perspective me-2"></span>
                                      77362
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-gas-station me-2"></span>
                                      Diesel
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-gear me-2"></span>
                                      Automatic
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="car-listing">
                            <div className="thumb">
                              <div className="tag">FEATURED</div>
                              <img
                                className="h100p"
                                src="images/listing/5.jpg"
                                alt="5.jpg"
                              />
                              <div className="thmb_cntnt2">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a className="text-white" href="#">
                                      <span className="flaticon-photo-camera mr3"></span>{" "}
                                      22
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a className="text-white" href="#">
                                      <span className="flaticon-play-button mr3"></span>{" "}
                                      3
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="thmb_cntnt3">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-shuffle-arrows"></span>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-heart"></span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="details">
                              <div className="wrapper">
                                <h5 className="price">$129</h5>
                                <h6 className="title">
                                  <a href="page-car-single-v1.html">
                                    Audi A8 L 55 - 2021
                                  </a>
                                </h6>
                                <div className="listign_review">
                                  <ul className="mb0">
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">4.7</a>
                                    </li>
                                    <li className="list-inline-item">
                                      (684 reviews)
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="listing_footer">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-road-perspective me-2"></span>
                                      77362
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-gas-station me-2"></span>
                                      Diesel
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-gear me-2"></span>
                                      Automatic
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-xl-3">
                          <div className="car-listing">
                            <div className="thumb">
                              <div className="tag">FEATURED</div>
                              <img
                                className="h100p"
                                src="images/listing/2.jpg"
                                alt="2.jpg"
                              />
                              <div className="thmb_cntnt2">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a className="text-white" href="#">
                                      <span className="flaticon-photo-camera mr3"></span>{" "}
                                      22
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a className="text-white" href="#">
                                      <span className="flaticon-play-button mr3"></span>{" "}
                                      3
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="thmb_cntnt3">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-shuffle-arrows"></span>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-heart"></span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="details">
                              <div className="wrapper">
                                <h5 className="price">$56</h5>
                                <h6 className="title">
                                  <a href="page-car-single-v1.html">
                                    Mercedes-Benz S 560 - 2021
                                  </a>
                                </h6>
                                <div className="listign_review">
                                  <ul className="mb0">
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">4.7</a>
                                    </li>
                                    <li className="list-inline-item">
                                      (684 reviews)
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="listing_footer">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-road-perspective me-2"></span>
                                      77362
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-gas-station me-2"></span>
                                      Diesel
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-gear me-2"></span>
                                      Automatic
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="car-listing">
                            <div className="thumb">
                              <div className="tag">FEATURED</div>
                              <img
                                className="h100p"
                                src="images/listing/6.jpg"
                                alt="6.jpg"
                              />
                              <div className="thmb_cntnt2">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a className="text-white" href="#">
                                      <span className="flaticon-photo-camera mr3"></span>{" "}
                                      22
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a className="text-white" href="#">
                                      <span className="flaticon-play-button mr3"></span>{" "}
                                      3
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="thmb_cntnt3">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-shuffle-arrows"></span>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-heart"></span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="details">
                              <div className="wrapper">
                                <h5 className="price">$56</h5>
                                <h6 className="title">
                                  <a href="page-car-single-v1.html">
                                    Land Rover Range Rover HSE Westminster
                                  </a>
                                </h6>
                                <div className="listign_review">
                                  <ul className="mb0">
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">4.7</a>
                                    </li>
                                    <li className="list-inline-item">
                                      (684 reviews)
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="listing_footer">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-road-perspective me-2"></span>
                                      77362
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-gas-station me-2"></span>
                                      Diesel
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-gear me-2"></span>
                                      Automatic
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-xl-3">
                          <div className="car-listing">
                            <div className="thumb">
                              <div className="tag">FEATURED</div>
                              <img
                                className="h100p"
                                src="images/listing/3.jpg"
                                alt="3.jpg"
                              />
                              <div className="thmb_cntnt2">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a className="text-white" href="#">
                                      <span className="flaticon-photo-camera mr3"></span>{" "}
                                      22
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a className="text-white" href="#">
                                      <span className="flaticon-play-button mr3"></span>{" "}
                                      3
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="thmb_cntnt3">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-shuffle-arrows"></span>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-heart"></span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="details">
                              <div className="wrapper">
                                <h5 className="price">$230</h5>
                                <h6 className="title">
                                  <a href="page-car-single-v1.html">
                                    BMW M8 Gran Coupe Base - 2021
                                  </a>
                                </h6>
                                <div className="listign_review">
                                  <ul className="mb0">
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">4.7</a>
                                    </li>
                                    <li className="list-inline-item">
                                      (684 reviews)
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="listing_footer">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-road-perspective me-2"></span>
                                      77362
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-gas-station me-2"></span>
                                      Diesel
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-gear me-2"></span>
                                      Automatic
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="car-listing">
                            <div className="thumb">
                              <div className="tag">FEATURED</div>
                              <img
                                className="h100p"
                                src="images/listing/7.jpg"
                                alt="7.jpg"
                              />
                              <div className="thmb_cntnt2">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a className="text-white" href="#">
                                      <span className="flaticon-photo-camera mr3"></span>{" "}
                                      22
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a className="text-white" href="#">
                                      <span className="flaticon-play-button mr3"></span>{" "}
                                      3
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="thmb_cntnt3">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-shuffle-arrows"></span>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-heart"></span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="details">
                              <div className="wrapper">
                                <h5 className="price">$230</h5>
                                <h6 className="title">
                                  <a href="page-car-single-v1.html">
                                    Bentley Bentayga V8 - 2020
                                  </a>
                                </h6>
                                <div className="listign_review">
                                  <ul className="mb0">
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">4.7</a>
                                    </li>
                                    <li className="list-inline-item">
                                      (684 reviews)
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="listing_footer">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-road-perspective me-2"></span>
                                      77362
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-gas-station me-2"></span>
                                      Diesel
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-gear me-2"></span>
                                      Automatic
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-xl-3">
                          <div className="car-listing">
                            <div className="thumb">
                              <div className="tag blue">SPECIAL</div>
                              <img
                                className="h100p"
                                src="images/listing/4.jpg"
                                alt="4.jpg"
                              />
                              <div className="thmb_cntnt2">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a className="text-white" href="#">
                                      <span className="flaticon-photo-camera mr3"></span>{" "}
                                      22
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a className="text-white" href="#">
                                      <span className="flaticon-play-button mr3"></span>{" "}
                                      3
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="thmb_cntnt3">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-shuffle-arrows"></span>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-heart"></span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="details">
                              <div className="wrapper">
                                <h5 className="price">$478</h5>
                                <h6 className="title">
                                  <a href="page-car-single-v1.html">
                                    Nıssan Qasqai - Sky Pack
                                  </a>
                                </h6>
                                <div className="listign_review">
                                  <ul className="mb0">
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">4.7</a>
                                    </li>
                                    <li className="list-inline-item">
                                      (684 reviews)
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="listing_footer">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-road-perspective me-2"></span>
                                      77362
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-gas-station me-2"></span>
                                      Diesel
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-gear me-2"></span>
                                      Automatic
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="car-listing">
                            <div className="thumb">
                              <div className="tag">FEATURED</div>
                              <img src="images/listing/8.jpg" alt="8.jpg" />
                              <div className="thmb_cntnt2">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a className="text-white" href="#">
                                      <span className="flaticon-photo-camera mr3"></span>{" "}
                                      22
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a className="text-white" href="#">
                                      <span className="flaticon-play-button mr3"></span>{" "}
                                      3
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="thmb_cntnt3">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-shuffle-arrows"></span>
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-heart"></span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="details">
                              <div className="wrapper">
                                <h5 className="price">$478</h5>
                                <h6 className="title">
                                  <a href="page-car-single-v1.html">
                                    Ferrari 488 Spider Base - 2019
                                  </a>
                                </h6>
                                <div className="listign_review">
                                  <ul className="mb0">
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">
                                        <i className="fa fa-star"></i>
                                      </a>
                                    </li>
                                    <li className="list-inline-item">
                                      <a href="#">4.7</a>
                                    </li>
                                    <li className="list-inline-item">
                                      (684 reviews)
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="listing_footer">
                                <ul className="mb0">
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-road-perspective me-2"></span>
                                      77362
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-gas-station me-2"></span>
                                      Diesel
                                    </a>
                                  </li>
                                  <li className="list-inline-item">
                                    <a href="#">
                                      <span className="flaticon-gear me-2"></span>
                                      Automatic
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt20">
              <div className="col-lg-12">
                <div className="text-center">
                  <a href="page-list-v1.html" className="more_listing">
                    Show All Cars{" "}
                    <span className="icon">
                      <span className="fas fa-plus"></span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="popular-listing pb80 pt0">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="main-title text-center">
                  <h2>Browse By Type</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="explore_city">
                  <div className="thumb">
                    <img
                      className="img-fluid"
                      src="images/listing/browse1.jpg"
                      alt="browse1.jpg"
                    />
                  </div>
                  <div className="details">
                    <h4 className="title">
                      <a href="page-listing-single-v3.html">Compact</a>
                    </h4>
                    <p>59 Listings</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="explore_city">
                  <div className="thumb">
                    <img
                      className="img-fluid"
                      src="images/listing/browse2.jpg"
                      alt="browse2.jpg"
                    />
                  </div>
                  <div className="details">
                    <h4 className="title">
                      <a href="page-listing-single-v3.html">Sedan</a>
                    </h4>
                    <p>8912 Listings</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="explore_city">
                  <div className="thumb">
                    <img
                      className="img-fluid"
                      src="images/listing/browse3.jpg"
                      alt="browse3.jpg"
                    />
                  </div>
                  <div className="details">
                    <h4 className="title">
                      <a href="page-listing-single-v3.html">SUV</a>
                    </h4>
                    <p>775 Listings</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="explore_city">
                  <div className="thumb">
                    <img
                      className="img-fluid"
                      src="images/listing/browse4.jpg"
                      alt="browse4.jpg"
                    />
                  </div>
                  <div className="details">
                    <h4 className="title">
                      <a href="page-listing-single-v3.html">Convertible</a>
                    </h4>
                    <p>12 Listings</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="explore_city">
                  <div className="thumb">
                    <img
                      className="img-fluid"
                      src="images/listing/browse5.jpg"
                      alt="browse5.jpg"
                    />
                  </div>
                  <div className="details">
                    <h4 className="title">
                      <a href="page-listing-single-v3.html">Coupe</a>
                    </h4>
                    <p>45 Listings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="popular-listing pb80 pt0">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="main-title text-center">
                  <h2>Popular Listings</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="home1_popular_listing home2_style">
                  <div className="listing_item_4grid_slider dots_none">
                    <div className="item">
                      <div className="car-listing">
                        <div className="thumb">
                          <div className="tag">FEATURED</div>
                          <img src="images/listing/1.jpg" alt="1.jpg" />
                          <div className="thmb_cntnt2">
                            <ul className="mb0">
                              <li className="list-inline-item">
                                <a className="text-white" href="#">
                                  <span className="flaticon-photo-camera mr3"></span>{" "}
                                  22
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a className="text-white" href="#">
                                  <span className="flaticon-play-button mr3"></span>{" "}
                                  3
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="thmb_cntnt3">
                            <ul className="mb0">
                              <li className="list-inline-item">
                                <a href="#">
                                  <span className="flaticon-shuffle-arrows"></span>
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="#">
                                  <span className="flaticon-heart"></span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="details">
                          <div className="wrapper">
                            <h5 className="price">$129</h5>
                            <h6 className="title">
                              <a href="page-car-single-v1.html">
                                Volvo XC90 - 2020
                              </a>
                            </h6>
                            <div className="listign_review">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a href="#">
                                    <i className="fa fa-star"></i>
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <i className="fa fa-star"></i>
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <i className="fa fa-star"></i>
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <i className="fa fa-star"></i>
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <i className="fa fa-star"></i>
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">4.7</a>
                                </li>
                                <li className="list-inline-item">
                                  (684 reviews)
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="listing_footer">
                            <ul className="mb0">
                              <li className="list-inline-item">
                                <a href="#">
                                  <span className="flaticon-road-perspective me-2"></span>
                                  77362
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="#">
                                  <span className="flaticon-gas-station me-2"></span>
                                  Diesel
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="#">
                                  <span className="flaticon-gear me-2"></span>
                                  Automatic
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="car-listing">
                        <div className="thumb">
                          <div className="tag">FEATURED</div>
                          <img src="images/listing/2.jpg" alt="2.jpg" />
                          <div className="thmb_cntnt2">
                            <ul className="mb0">
                              <li className="list-inline-item">
                                <a className="text-white" href="#">
                                  <span className="flaticon-photo-camera mr3"></span>{" "}
                                  22
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a className="text-white" href="#">
                                  <span className="flaticon-play-button mr3"></span>{" "}
                                  3
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="thmb_cntnt3">
                            <ul className="mb0">
                              <li className="list-inline-item">
                                <a href="#">
                                  <span className="flaticon-shuffle-arrows"></span>
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="#">
                                  <span className="flaticon-heart"></span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="details">
                          <div className="wrapper">
                            <h5 className="price">$56</h5>
                            <h6 className="title">
                              <a href="page-car-single-v1.html">
                                Mercedes-Benz S 560 - 2021
                              </a>
                            </h6>
                            <div className="listign_review">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a href="#">
                                    <i className="fa fa-star"></i>
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <i className="fa fa-star"></i>
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <i className="fa fa-star"></i>
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <i className="fa fa-star"></i>
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <i className="fa fa-star"></i>
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">4.7</a>
                                </li>
                                <li className="list-inline-item">
                                  (684 reviews)
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="listing_footer">
                            <ul className="mb0">
                              <li className="list-inline-item">
                                <a href="#">
                                  <span className="flaticon-road-perspective me-2"></span>
                                  77362
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="#">
                                  <span className="flaticon-gas-station me-2"></span>
                                  Diesel
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="#">
                                  <span className="flaticon-gear me-2"></span>
                                  Automatic
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="car-listing">
                        <div className="thumb">
                          <div className="tag">FEATURED</div>
                          <img src="images/listing/3.jpg" alt="3.jpg" />
                          <div className="thmb_cntnt2">
                            <ul className="mb0">
                              <li className="list-inline-item">
                                <a className="text-white" href="#">
                                  <span className="flaticon-photo-camera mr3"></span>{" "}
                                  22
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a className="text-white" href="#">
                                  <span className="flaticon-play-button mr3"></span>{" "}
                                  3
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="thmb_cntnt3">
                            <ul className="mb0">
                              <li className="list-inline-item">
                                <a href="#">
                                  <span className="flaticon-shuffle-arrows"></span>
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="#">
                                  <span className="flaticon-heart"></span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="details">
                          <div className="wrapper">
                            <h5 className="price">$230</h5>
                            <h6 className="title">
                              <a href="page-car-single-v1.html">
                                BMW M8 Gran Coupe Base - 2021
                              </a>
                            </h6>
                            <div className="listign_review">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a href="#">
                                    <i className="fa fa-star"></i>
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <i className="fa fa-star"></i>
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <i className="fa fa-star"></i>
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <i className="fa fa-star"></i>
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <i className="fa fa-star"></i>
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">4.7</a>
                                </li>
                                <li className="list-inline-item">
                                  (684 reviews)
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="listing_footer">
                            <ul className="mb0">
                              <li className="list-inline-item">
                                <a href="#">
                                  <span className="flaticon-road-perspective me-2"></span>
                                  77362
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="#">
                                  <span className="flaticon-gas-station me-2"></span>
                                  Diesel
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="#">
                                  <span className="flaticon-gear me-2"></span>
                                  Automatic
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="car-listing">
                        <div className="thumb">
                          <div className="tag blue">SPECIAL</div>
                          <img src="images/listing/4.jpg" alt="4.jpg" />
                          <div className="thmb_cntnt2">
                            <ul className="mb0">
                              <li className="list-inline-item">
                                <a className="text-white" href="#">
                                  <span className="flaticon-photo-camera mr3"></span>{" "}
                                  22
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a className="text-white" href="#">
                                  <span className="flaticon-play-button mr3"></span>{" "}
                                  3
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="thmb_cntnt3">
                            <ul className="mb0">
                              <li className="list-inline-item">
                                <a href="#">
                                  <span className="flaticon-shuffle-arrows"></span>
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="#">
                                  <span className="flaticon-heart"></span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="details">
                          <div className="wrapper">
                            <h5 className="price">$478</h5>
                            <h6 className="title">
                              <a href="page-car-single-v1.html">
                                Nıssan Qasqai - Sky Pack
                              </a>
                            </h6>
                            <div className="listign_review">
                              <ul className="mb0">
                                <li className="list-inline-item">
                                  <a href="#">
                                    <i className="fa fa-star"></i>
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <i className="fa fa-star"></i>
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <i className="fa fa-star"></i>
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <i className="fa fa-star"></i>
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">
                                    <i className="fa fa-star"></i>
                                  </a>
                                </li>
                                <li className="list-inline-item">
                                  <a href="#">4.7</a>
                                </li>
                                <li className="list-inline-item">
                                  (684 reviews)
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="listing_footer">
                            <ul className="mb0">
                              <li className="list-inline-item">
                                <a href="#">
                                  <span className="flaticon-road-perspective me-2"></span>
                                  77362
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="#">
                                  <span className="flaticon-gas-station me-2"></span>
                                  Diesel
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="#">
                                  <span className="flaticon-gear me-2"></span>
                                  Automatic
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="home2_img_divider bg-img2">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-xxl-5">
                <div className="iconbox_home2 d-block d-lg-flex mb30-sm text-center text-md-start">
                  <div className="icon me-2 wobble-horizontal">
                    <span className="flaticon-car-1"></span>
                  </div>
                  <div className="details ms-0 ms-lg-4">
                    <h3 className="title">Are You looking for a car?</h3>
                    <p>
                      Search your car in our Inventory and request a quote on
                      the vehicle of your choosing.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xxl-5 offset-xxl-2">
                <div className="iconbox_home2 style2 text-center text-md-end">
                  <div className="icon float-none float-lg-end ms-0 ms-lg-4 wobble-horizontal">
                    <span className="flaticon-car-2"></span>
                  </div>
                  <div className="details">
                    <h3 className="title">Are You looking for a car?</h3>
                    <p>
                      Request search your car in our Inventory and a quote on
                      the vehicle of your choosing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="our-testimonial">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="main-title text-center">
                  <h2>Our Testimonials</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="home2_testimonial_tabs">
                  <div className="tab-content" id="pills-tabContent2">
                    <div
                      className="tab-pane fade show active"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      <div className="testimonial_post_home2 text-center">
                        <div className="details">
                          <p>
                            I believe in lifelong learning and Voiture is a
                            great place to learn from experts. I've learned a
                            lot and recommend it to all my friends.Programs are
                            available in fall, spring, and summer semesters.
                            Many fall and spring programs offer similar shorter
                            programs in the summer, and some may be combined for
                            a full academic year.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                    >
                      <div className="testimonial_post_home2 text-center">
                        <div className="details">
                          <p>
                            I believe in lifelong learning and Voiture is a
                            great place to learn from experts. I've learned a
                            lot and recommend it to all my friends.Programs are
                            available in fall, spring, and summer semesters.
                            Many fall and spring programs offer similar shorter
                            programs in the summer, and some may be combined for
                            a full academic year.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-contact"
                      role="tabpanel"
                      aria-labelledby="pills-contact-tab"
                    >
                      <div className="testimonial_post_home2 text-center">
                        <div className="details">
                          <p>
                            I believe in lifelong learning and Voiture is a
                            great place to learn from experts. I've learned a
                            lot and recommend it to all my friends.Programs are
                            available in fall, spring, and summer semesters.
                            Many fall and spring programs offer similar shorter
                            programs in the summer, and some may be combined for
                            a full academic year.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul
                    className="nav justify-content-center mb-3"
                    id="pills-tab2"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link active"
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        href="#pills-home"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        <div className="thumb d-inline-flex">
                          <img
                            className="rounded-circle"
                            src="images/testimonial/1.jpg"
                            alt="1.jpg"
                          />
                          <h4 className="title">
                            Albert Cole
                            <br />
                            <small>Designer</small>
                          </h4>
                        </div>
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link"
                        id="pills-profile-tab"
                        data-bs-toggle="pill"
                        href="#pills-profile"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        <div className="thumb d-inline-flex">
                          <img
                            className="rounded-circle"
                            src="images/testimonial/2.jpg"
                            alt="2.jpg"
                          />
                          <h4 className="title">
                            Alison Dawn
                            <br />
                            <small>WordPress Developer</small>
                          </h4>
                        </div>
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link"
                        id="pills-contact-tab"
                        data-bs-toggle="pill"
                        href="#pills-contact"
                        role="tab"
                        aria-controls="pills-contact"
                        aria-selected="false"
                      >
                        <div className="thumb d-inline-flex">
                          <img
                            className="rounded-circle"
                            src="images/testimonial/3.jpg"
                            alt="3.jpg"
                          />
                          <h4 className="title">
                            Daniel Parker
                            <br />
                            <small>Front-end Developer</small>
                          </h4>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="footer_one home2_style pt50 pb25">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-xl-7">
                <div className="footer_about_widget home2 text-center text-md-start">
                  <div className="logo mb40 mb0-sm">
                    <img src="images/header-logo2.svg" alt="header-logo2.png" />
                  </div>
                </div>
              </div>
              <div className="col-md-8 col-xl-5">
                <div className="footer_menu_widget home2 text-end tac-md mt15">
                  <ul>
                    <li className="list-inline-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Explore</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Listings</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Blog</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Shop</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Pages</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="container pt80 pt20-sm pb70 pb0-sm">
            <div className="row">
              <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3">
                <div className="footer_about_widget home2">
                  <h5 className="title">OFFICE</h5>
                  <p>
                    Germany —<br />
                    329 Queensberry Street,
                    <br />
                    North Melbourne VIC 3051
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3">
                <div className="footer_contact_widget home2">
                  <h5 className="title">NEED HELP</h5>
                  <div className="footer_phone">+1 670 936 46 70</div>
                  <p>hello@voiture.com</p>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3 col-xl-3">
                <div className="footer_contact_widget home2">
                  <h5 className="title">OPENING HOURS</h5>
                  <p>
                    Monday – Friday: 09:00AM – 09:00PM
                    <br />
                    Saturday: 09:00AM – 07:00PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
                <div className="footer_contact_widget home2">
                  <h5 className="title">KEEP IN TOUCH</h5>
                  <form className="footer_mailchimp_form">
                    <div className="wrapper">
                      <div className="col-auto">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Your Email..."
                        />
                        <button type="submit">GO</button>
                      </div>
                    </div>
                  </form>
                  <p>Get latest updates and offers.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-8 col-xl-9">
                <div className="copyright-widget home2 mt5 text-center text-md-start mb20-sm">
                  <p>CreativeLayers © 2022. All Rights Reserved.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-xl-3">
                <div className="footer_social_widget home2 text-center text-md-end">
                  <ul className="mb0">
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <a className="scrollToHome" href="#">
          <i className="fas fa-arrow-up"></i>
        </a>
      </div>
    </Fragment>
  );
};
export default Home;
