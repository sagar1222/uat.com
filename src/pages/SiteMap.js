import React from "react";
import Product from "../components/Product";
const AboutUs = () => {
  return (
    <div className="about">
      <div className="about__body">
        <div className="about__image">
          <div
            className="about__image-bg"
            style={{
              backgroundImage: 'url("assets/images/about-1903x1903.jpg")',
            }}
          />{" "}
          <div className="decor about__image-decor ">
            <div className="decor__body">
              <div className="decor__start" />
              <div className="decor__end" />
              <div className="decor__center" />
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="about__card">
          <div className="about__card-title"> Site Map </div>{" "}
          <div className="about__card-text">
            Gaadiweb is an international company with 30 years of history
            selling spare parts for cars, trucks and motorcycles.During our work
            we managed to create a unique service for the sale and delivery of
            spare parts around the world.{" "}
          </div>{" "}
          <div className="about__card-author"> Ryan Ford, CEO Gaadiweb </div>{" "}
          <div className="about__card-signature">
            <img
              src="assets/images/signature.jpg"
              width={160}
              height={55}
              alt=""
            />
          </div>{" "}
        </div>{" "}
        <div className="about__indicators">
          <div className="about__indicators-body">
            <div className="about__indicators-item">
              <div className="about__indicators-item-value"> 350 </div>{" "}
              <div className="about__indicators-item-title">
                Stores around the world{" "}
              </div>{" "}
            </div>{" "}
            <div className="about__indicators-item">
              <div className="about__indicators-item-value"> 80 000 </div>{" "}
              <div className="about__indicators-item-title">
                Original auto parts{" "}
              </div>{" "}
            </div>{" "}
            <div className="about__indicators-item">
              <div className="about__indicators-item-value"> 5 000 </div>{" "}
              <div className="about__indicators-item-title">
                Satisfied customers{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default AboutUs;
