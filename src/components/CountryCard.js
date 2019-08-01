import React from 'react';

const card = {
  boxSizing: 'border-box',
  width: '350px'
};

export default function CountryCard(props) {
  return (
    <div style={card}>
      <img style={{ maxWidth: '100%' }} src={props.img} alt={props.name} />
      <p>{props.name}</p>
    </div>
  );
}
