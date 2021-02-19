import React from "react";

function Card({ name, email, id }) {
  return (
    <div className="tc bg-light-green white-90 dib br3 pa2 ma3 shadow-5 grow">
      <img
        src={`https://robohash.org/${id * Math.random()}?set=set4&size=250x250`}
        alt=""
      />
      <div>
        <p>{name}</p>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
