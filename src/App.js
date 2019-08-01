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
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => this.setState({ countries: data, isLoading: false }));
  }
  render() {
    console.log(this.state.countries);
    const countries = this.state.countries.map((country, i) => (
      <CountryCard key={i} name={country.name} img={country.flag} />
    ));
    return <div className="App">{countries}</div>;
  }
}

export default App;
