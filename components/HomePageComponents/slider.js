import React from "react";
import Link from "next/link";

const Slider = ({ title, desc, data }) => {
  return (
    <section className="section" id="men">
      <div className="container-sm">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-heading">
              <h2>Men's Latest {title}</h2>
              <span>
                {desc}
                Details to details is what makes Hexashop different from the
                other themes.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container-sm px-3">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-11">
            <div className="men-item-carousel">
              <div className="owl-men-item owl-carousel">
                <div className="item">
                  <div className="thumb">
                    <div className="hover-content">
                      <ul>
                        <li>
                          <a href="single-product.html">
                            <i className="fa fa-eye"></i>
                          </a>
                        </li>
                        <li>
                          <a href="single-product.html">
                            <i className="fa fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="single-product.html">
                            <i className="fa fa-shopping-cart"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <Link href="/product">
                      <img src="assets/images/men-01.jpg" alt="" />
                    </Link>
                  </div>
                  <div className="down-content">
                    <h4>Classic Spring</h4>
                    <span>$120.00</span>
                    <ul className="stars">
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="item">
                  <div className="thumb">
                    <div className="hover-content">
                      <ul>
                        <li>
                          <a href="single-product.html">
                            <i className="fa fa-eye"></i>
                          </a>
                        </li>
                        <li>
                          <a href="single-product.html">
                            <i className="fa fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="single-product.html">
                            <i className="fa fa-shopping-cart"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <img src="assets/images/men-02.jpg" alt="" />
                  </div>
                  <div className="down-content">
                    <h4>Air Force 1 X</h4>
                    <span>$90.00</span>
                    <ul className="stars">
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="item">
                  <div className="thumb">
                    <div className="hover-content">
                      <ul>
                        <li>
                          <a href="single-product.html">
                            <i className="fa fa-eye"></i>
                          </a>
                        </li>
                        <li>
                          <a href="single-product.html">
                            <i className="fa fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="single-product.html">
                            <i className="fa fa-shopping-cart"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <img src="assets/images/men-03.jpg" alt="" />
                  </div>
                  <div className="down-content">
                    <h4>Love Nana ‘20</h4>
                    <span>$150.00</span>
                    <ul className="stars">
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="item">
                  <div className="thumb">
                    <div className="hover-content">
                      <ul>
                        <li>
                          <a href="single-product.html">
                            <i className="fa fa-eye"></i>
                          </a>
                        </li>
                        <li>
                          <a href="single-product.html">
                            <i className="fa fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="single-product.html">
                            <i className="fa fa-shopping-cart"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <img src="assets/images/men-01.jpg" alt="" />
                  </div>
                  <div className="down-content">
                    <h4>Classic Spring</h4>
                    <span>$120.00</span>
                    <ul className="stars">
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
