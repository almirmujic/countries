import React from 'react';

const card = {
  boxSizing: 'border-box',
  width: '300px',
  boxShadow: '3px 3px 8px -4px',
  borderRadius: '15px'
};

const cImg = {
  width: '100%',
  height: '200px',
  borderRadius: '15px 15px 0px 0px'
};

const details = {
  paddingTop: '8px',
  paddingLeft: '8px',
  paddingBottom: '8px'
};

const unorderedList = {
  listStylePosition: 'inside',
  paddingTop: '8px'
};

// const header = {};

// function to add commas inside of population
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export default function CountryCard(props) {
  return (
    <div style={card}>
      <img style={cImg} src={props.img} alt={props.name} />
      <div style={details}>
        <h4>{props.name}</h4>
        <ul style={unorderedList}>
          <li>Population: {numberWithCommas(props.population)}</li>
        </ul>
      </div>
    </div>
  );
}
