import React, {createRef, useContext} from "react";
import {Fade, Slide} from "react-reveal";
import "./AccomplishmentCard.scss";
import StyleContext from "../../contexts/StyleContext";

export default function AccomplishmentCard({category}) {
  const imgRef = createRef();

  const {isDark} = useContext(StyleContext);
  const GetDescBullets = ({descBullets}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li key={i} className={isDark ? "subTitle dark-mode-text" : "subTitle"}>
            {item}
          </li>
        ))
      : null;
  };

  if (!category.logo)
    console.error(`Image of ${category.name} is missing in accomplishment section`);
  return (
    <div>
      <Fade left duration={1000}>
        <div className="education-card">
          {category.logo && (
            <div className="education-card-left">
              <img
                crossOrigin={"anonymous"}
                ref={imgRef}
                className="education-roundedimg"
                src={category.logo}
                alt={category.name}
              />
            </div>
          )}
          <div className="education-card-right">
            <h5 className="education-text-school">{category.name}</h5>

            <div className="education-text-details">
              <h5
                className={
                  isDark
                    ? "dark-mode education-text-subHeader"
                    : "education-text-subHeader"
                }
              >
                {category.subHeader}
              </h5>
              <p
                className={`${
                  isDark ? "dark-mode" : ""
                } education-text-duration`}
              >
                {category.duration}
                <ul>
                  <GetDescBullets descBullets={category.descBullets} />
                </ul>
              </p>
              <div className="education-text-bullets">
              </div>
            </div>
          </div>
        </div>
      </Fade>
      <Slide left duration={2000}>
        <div className="education-card-border"></div>
      </Slide>
    </div>
  );
}
