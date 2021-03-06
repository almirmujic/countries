import React, { Component } from 'react';
import CountryCard from './components/CountryCard';

// styling
import './App.css';

const logoStyle = {
  fontSize: '26px',
  alignSelf: 'center',
  fontWeight: '500'
};

const loadingStyle = {
  color: '#97f8ff'
};

const countriesUrl = 'https://restcountries.eu/rest/v2/all';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      isLoading: false,
      search: ''
    };
    this.onChange = this.onChange.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  async fetchData() {
    this.setState({ isLoading: true });
    let response = await fetch(countriesUrl);
    let data = await response.json();
    this.setState({ countries: data, isLoading: false });
  }

  componentDidMount() {
    this.fetchData();
  }
  onChange(e) {
    const updatedValue = e.target.value.toLowerCase();
    this.setState({ [e.target.name]: updatedValue });
  }
  render() {
    const countries = this.state.countries
      .filter(
        ({ name, nativeName, capital }) =>
          name.toLowerCase().includes(this.state.search) ||
          nativeName.toLowerCase().includes(this.state.search) ||
          capital.toLowerCase().includes(this.state.search)
      )
      .map(({ name, nativeName, flag, population, capital, languages }, i) => (
        <CountryCard
          key={i}
          name={name}
          nativeName={nativeName}
          img={flag}
          population={population}
          capital={capital === '' ? 'N/A' : capital}
          lang={languages[0].name}
          nativeLang={languages[0].nativeName}
        />
      ));
    return (
      <div className="App">
        <nav className="Nav">
          <div className="Nav-content">
            <span style={logoStyle}>Countries</span>
            <input
              type="text"
              name="search"
              onChange={this.onChange}
              placeholder="country or capital city..."
            />
          </div>
        </nav>
        <div className="AppGrid">
          {this.state.isLoading ? (
            <h2 style={loadingStyle}>Loading...</h2>
          ) : (
            countries
          )}
        </div>
      </div>
    );
  }
}

export default App;
