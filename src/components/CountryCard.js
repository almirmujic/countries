import React from 'react';

// styling
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

const detailsContainer = {
  paddingTop: '8px',
  paddingLeft: '1rem',
  paddingBottom: '8px',
  letterSpacing: '.5px',
  color: '#97f8ff'
};

const countryName = {
  paddingTop: '1rem'
};

const countryNativeName = {
  fontSize: '12px',
  display: 'inline-block',
  paddingBottom: '1rem'
};

const unorderedList = {
  listStyle: 'none',
  paddingTop: '8px'
};

const listItem = {
  paddingBottom: '1rem'
};

const fontWeight500 = {
  fontWeight: '500'
};

// function to add commas inside of population value
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export default function CountryCard({
  img,
  name,
  nativeName,
  capital,
  population,
  lang,
  nativeLang
}) {
  return (
    <div style={card}>
      <img style={flagImg} src={img} alt={name} />
      <div style={detailsContainer}>
        <h3 style={countryName}>{name}</h3>
        <span style={countryNativeName}>{nativeName}</span>
        <ul style={unorderedList}>
          <li style={listItem}>
            Capital: <span style={fontWeight500}>{capital}</span>
          </li>
          <li style={listItem}>
            Population:{' '}
            <span style={fontWeight500}>{numberWithCommas(population)}</span>
          </li>
          <li style={listItem}>
            Language: {nativeLang}
            {lang === nativeLang ? '' : ` (${lang})`}
          </li>
        </ul>
      </div>
    </div>
  );
}
