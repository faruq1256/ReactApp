import React from "react";
import { NavLink } from "react-router-dom";
import webImg from "../src/images/royal-bawarchi-1.jpg";

const MenuCard = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img className="card-img-top" src={props.src} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
            <NavLink to="/services" className="btn btn-primary">
              More
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuCard;
