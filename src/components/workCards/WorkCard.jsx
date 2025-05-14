import React from "react";
import { Link } from "react-router";
import "./workCard.scss";

function WorkCard({ id, image, client }) {
  return (
    <div className="ourWorkImageWrapper" key={id}>
      <Link className="ourWorkImage" to="#">
        <img src={image} alt={`${client} Image`} />
      </Link>
      <Link className="ourWorkClient" to="#">
        {client}
      </Link>
    </div>
  );
}

export default WorkCard;
