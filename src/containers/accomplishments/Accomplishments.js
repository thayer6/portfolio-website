import React from "react";
import "./Accomplishments.scss";
import AccomplishmentCard from "../../components/accomplishmentsCard/AccomplishmentCard.js";
import {accomplishmentInfo} from "../../portfolio";

export default function Education() {
  if (accomplishmentInfo.display) {
    return (
      <div className="accomplishments-section" id="accomplishments">
        <h1 className="accomplishments-heading">Accomplishments</h1>
        <div className="accomplishments-card-container">
          {accomplishmentInfo.category.map((category, index) => (
            <AccomplishmentCard key={index} category={category} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
