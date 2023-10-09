import React from "react";

export default function Jumbotron({title,description}) {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1>{title}</h1>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
}
