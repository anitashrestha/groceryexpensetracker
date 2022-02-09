// Card component to display details
// src/components/Card.js

import React from 'react';

function Card({store}) {
  return(
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img className="br-100 h3 w3 dib" alt={store.name} src={process.env.PUBLIC_URL + store.imgPath} />
      <div>
        <h2>{store.name}</h2>
        <p>{store.location}</p>
      </div>
    </div>
  );
}

export default Card;