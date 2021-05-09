import React from "react";

function Card({ image, title, cardBody, cardLink, btnText }) {
  return (
    <div className="card" style={{ width: "300px" }}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{cardBody}</p>
        <a href={cardLink} className="btn btn-primary" rel="noreferrer">
          {btnText}
        </a>
      </div>
    </div>
  );
}

export default Card;
