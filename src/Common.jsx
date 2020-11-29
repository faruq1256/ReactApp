import React from "react";
import { NavLink } from "react-router-dom";
import webImg from "../src/images/royal-bawarchi-1.jpg";
import { jquery } from "jquery";

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 max-auto max_auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h2>{props.text}</h2>
                  <h3 className="my-3">Taste the royal food</h3>
                  <div className="mt-3">
                    <NavLink className="btn btn-primary" to={props.visit}>
                      {props.btnName}
                    </NavLink>
                  </div>
                </div>
                <div className="col-md-6 pt-5 pt-lg-15 order-2 order-lg-1 d-flex justify-content-center">
                  <img
                    src={props.imgsrc}
                    alt="image"
                    className="img-fluid animated"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
