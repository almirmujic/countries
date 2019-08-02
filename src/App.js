import React, { Component } from 'react';
import CountryCard from './components/CountryCard';

// styling
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { countries: [], isLoading: false };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    fetch('https://restcountries.eu/rest/v2/' + 'name/united')
      .then(res => res.json())
      .then(data => this.setState({ countries: data, isLoading: false }));
  }
  render() {
    console.log(this.state.countries);
    const countries = this.state.countries.map((country, i) => (
      <CountryCard
        key={i}
        name={country.name}
        nativeName={country.nativeName}
        img={country.flag}
        population={country.population}
        capital={country.capital === '' ? 'N/A' : country.capital}
      />
    ));
    return (
      <div className="App">
        <nav className="Nav">
          <div className="Nav-content">
            <span style={{ fontSize: '26px', alignSelf: 'center' }}>
              Find a country
            </span>
            <input type="text" placeholder="Search Country" />
          </div>
        </nav>
        <div className="AppGrid">
          {this.state.isLoading ? <h1>Loading...</h1> : countries}
        </div>
      </div>
    );
  }
}

export default App;
