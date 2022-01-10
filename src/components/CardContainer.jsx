import React from 'react';
import Card from './Card';
import TellMe from './TellMe';

function CardContainer({ cats }) {
  let toggle = false;
  cats.length === 1 ? (toggle = true) : (toggle = false);

  return (
    <div
      className="card-container pa3"
      style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
    >
      {cats.map((cat, i) => {
        return (
          <Card
            key={i}
            name={cats[i].name}
            id={cats[i].id}
            email={cats[i].emai}
          />
        );
      })}

      {toggle === false ? null : <TellMe />}
    </div>
  );
}

export default CardContainer;
