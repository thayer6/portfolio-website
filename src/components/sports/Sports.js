import React from "react";
import "./Sports.scss";
import {skillsSection} from "../../portfolio";

export default function Sports() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.favoriteSports.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.sport}
              >
                <i className={skills.fontAwesomeClassname}></i>
                <p>{skills.team}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
