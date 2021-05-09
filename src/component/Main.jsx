import React from "react";
import Card from "./Card";

function Main() {
  return (
    <div className="container row mx-auto mt-5">
      <Card
        image="http://placekitten.com/500/400"
        cardBody="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem"
        cardLink="http://www.google.com"
        title="My awesome project"
        btnText="Google Me"
      />
      <Card
        image="http://placekitten.com/500/400"
        cardBody="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem"
        cardLink="http://www.google.com"
        title="My awesome project"
        btnText="Google Me"
      />
      <Card
        image="http://placekitten.com/500/400"
        cardBody="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem"
        cardLink="http://www.google.com"
        title="My awesome project"
        btnText="Google Me"
      />
      <Card
        image="http://placekitten.com/500/400"
        cardBody="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem"
        cardLink="http://www.google.com"
        title="My awesome project"
        btnText="Google Me"
      />
    </div>
  );
}

export default Main;
