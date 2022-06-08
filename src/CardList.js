import React from "react";
import CardItem from "./CardItem";

export default function CardList({ robots }) {
  return (
    <div className="col-md-6 mx-auto">
      <div className="row">
        {robots.map((robot) => (
          <CardItem robot={robot} key={robot.id} />
        ))}
      </div>
    </div>
  );
}
