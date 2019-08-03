import React from 'react';

const card = {
  boxSizing: 'border-box',
  width: '300px',
  boxShadow: '3px 3px 8px -4px',
  borderRadius: '15px',
  backgroundColor: '#30273c'
};

const flagImg = {
  width: '100%',
  height: '200px',
  borderRadius: '15px 15px 0px 0px'
};

const details = {
  paddingTop: '8px',
  paddingLeft: '1rem',
  paddingBottom: '8px',
  letterSpacing: '.5px',
  color: '#97f8ff'
};

const unorderedList = {
  listStyle: 'none',
  paddingTop: '8px'
};

const listItem = {
  paddingTop: '6px'
};

const fontWeight500 = {
  fontWeight: '500'
};

// const header = {};

// function to add commas inside of population value
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export default function CountryCard(props) {
  return (
    <div style={card}>
      <img style={flagImg} src={props.img} alt={props.name} />
      <div style={details}>
        <h3>{props.name}</h3>
        <span style={{ fontSize: '12px' }}>{props.nativeName}</span>
        <ul style={unorderedList}>
          <li style={listItem}>
            Capital: <span style={fontWeight500}>{props.capital}</span>
          </li>
          <li style={listItem}>
            Population:{' '}
            <span style={fontWeight500}>
              {numberWithCommas(props.population)}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
