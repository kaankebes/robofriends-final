import React from "react";

export default function CardItem({ robot }) {
  return (
    <div  className="mb-4 col-md-4">
        <div class="border bg-white">
        <img src={`https://robohash.org/${robot.id}?size=200x200`} className="img-fluid" />
            <p>{robot.name}</p>
            <p>{robot.email}</p>
        </div>
    </div>
  );
}
