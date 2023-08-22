import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header class="header_area">
      <div class="top_menu">
        <div class="container">
          <div class="row">
            <div class="col-lg-7">
              <div class="float-left">
                <p>Phone: +01 256 25 235</p>
                <p>email: info@eiser.com</p>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="float-right">
                <ul class="right_side">
                  <li>
                    <a href="cart.html">gift card</a>
                  </li>
                  <li>
                    <a href="tracking.html">track order</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="main_menu">
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light w-100">
            <Link class="navbar-brand logo_h" to="/">
              Ecommers
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>

            <div
              class="collapse navbar-collapse offset w-100"
              id="navbarSupportedContent"
            >
              <div class="row w-100 mr-0">
                <div class="col-lg-7 pr-0">
                  <ul class="nav navbar-nav center_nav pull-right">
                    <li class="nav-item">
                      <Link class="nav-link" to="/shop-category">
                        Shop
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" to="/product-detail">
                        Product Detail
                      </Link>
                    </li>
                    {/* <li class="nav-item submenu dropdown">
                      <a
                        href="#"
                        class="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Shop
                      </a>
                      <ul class="dropdown-menu">
                        <li class="nav-item">
                          <a class="nav-link" href="category.html">
                            Shop Category
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="single-product.html">
                            Product Details
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="checkout.html">
                            Product Checkout
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="cart.html">
                            Shopping Cart
                          </a>
                        </li>
                      </ul>
                    </li> */}

                    <li class="nav-item submenu dropdown">
                      <a
                        href="#"
                        class="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Pages
                      </a>
                      <ul class="dropdown-menu">
                        <li class="nav-item">
                          <a class="nav-link" href="tracking.html">
                            Tracking
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="elements.html">
                            Elements
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="contact.html">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-5 pr-0">
                  <ul class="nav navbar-nav navbar-right right_nav pull-right">
                    <li class="nav-item">
                      <a href="#" class="icons">
                        <i class="ti-search" aria-hidden="true"></i>
                      </a>
                    </li>

                    <li class="nav-item">
                      <Link to="/cart" class="icons">
                        <i class="ti-shopping-cart"></i>
                      </Link>
                    </li>

                   
                    <li class="nav-item submenu dropdown">
                      <a
                        href="#"
                        class="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                         <i class="ti-user" aria-hidden="true" style={{
                          marginLeft:"20px"
                         }}></i>
                      </a>
                      <ul class="dropdown-menu">
                        <li class="nav-item">
                          <a class="nav-link" href="category.html">
                            Shop Category
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="single-product.html">
                            Product Details
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="checkout.html">
                            Product Checkout
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="cart.html">
                            Shopping Cart
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
