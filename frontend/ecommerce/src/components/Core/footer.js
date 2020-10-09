import React from "react";
import footerlogo from "./images/footerlogo.png";
import footerlogo2 from "./images/footerlogo2.png";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="page-footer font-small blue-grey lighten-5">
        <div className="bg-info shadow">
          <div className="container">
            <div className="row py-4 d-flex align-items-center">
              <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                <img src={footerlogo} alt="" style={{ width: "300px" }} />
              </div>

              <div className="col-md-6 col-lg-7 text-center text-md-right">
                <a className="fb-ic">
                  <i
                    className="fab fa-facebook-f white-text mr-4"
                    style={{ color: "#ffffff" }}
                  ></i>
                </a>
                <a className="tw-ic">
                  <i
                    className="fab fa-twitter white-text mr-4"
                    style={{ color: "#ffffff" }}
                  >
                    {" "}
                  </i>
                </a>
                <a className="gplus-ic">
                  <i
                    className="fab fa-google-plus-g white-text mr-4"
                    style={{ color: "#ffffff" }}
                  >
                    {" "}
                  </i>
                </a>
                <a className="li-ic">
                  <i
                    className="fab fa-linkedin-in white-text mr-4"
                    style={{ color: "#ffffff" }}
                  >
                    {" "}
                  </i>
                </a>
                <a className="ins-ic">
                  <i
                    className="fab fa-instagram white-text"
                    style={{ color: "#ffffff" }}
                  >
                    {" "}
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container text-center text-md-left mt-5">
          <div className="row mt-3 dark-grey-text">
            <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
              <img src={footerlogo2} alt="" style={{ width: "250px" }} />
              <hr
                className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase font-weight-bold">Products</h6>
              <hr
                className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>
                <a className="dark-grey-text" href="#!">
                  Green Food
                </a>
              </p>
              <p>
                <a className="dark-grey-text" href="#!">
                  Fast Food
                </a>
              </p>
              <p>
                <a className="dark-grey-text" href="#!">
                  Home Needs
                </a>
              </p>
              <p>
                <a className="dark-grey-text" href="#!">
                  Low Materials
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase font-weight-bold">Get Connected</h6>
              <hr
                className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>
                <a className="dark-grey-text" href="#!">
                  iwacumarket.com
                </a>
              </p>
              <p>
                <a className="dark-grey-text" href="#!">
                  Become a member
                </a>
              </p>
              <p>
                <a className="dark-grey-text" href="#!">
                  Apply for job
                </a>
              </p>
              <p>
                <a className="dark-grey-text" href="#!">
                  Need More Help Help
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase font-weight-bold">Contact</h6>
              <hr
                className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>
                <i className="fas fa-home mr-3 text-info"></i> Rwanda Kgl, NY
                10012, RW
              </p>
              <p>
                <i className="fas fa-envelope mr-3 text-info"></i>{" "}
                iwacumarket@yahoo.com
              </p>
              <p>
                <i className="fas fa-phone mr-3 text-info"></i> + 250 789 312
                195
              </p>
              <p>
                <i className="fas fa-print mr-3 text-info"></i> + 250 789 312
                195
              </p>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center text-black-50 py-3">
          © 2020 Copyright All Rights Reserved
        </div>
      </footer>
    </React.Fragment>
  );
};
export default Footer;
