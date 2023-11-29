import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container-sm" style={{height:"300px"}}>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="first-item">
              <div className="logo">
                <img
                  src="assets/images/white-logo.png"
                  alt="hexashop ecommerce templatemo"
                />
              </div>
              <ul>
                <li>
                  <a href="#">Isfahan, IRAN</a>
                </li>
                <li>
                  <a href="#">sadrabroo@gmail.com</a>
                </li>
                <li>
                  <a href="#">010-020-0340</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6 col-md-6">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <a href="#">Homepage</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="under-footer">
              <p>
                Copyright © 2022 HexaShop Co., Ltd. All Rights Reserved.
                <br />
                Design:{" "}
                <a
                  href="https://templatemo.com"
                  target="_parent"
                  title="free css templates"
                >
                  TemplateMo
                </a>
              </p>
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-behance"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
