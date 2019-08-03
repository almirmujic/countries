import React, { Component } from 'react';
import CountryCard from './components/CountryCard';

// styling
import './App.css';

const url = 'https://restcountries.eu/rest/v2/all';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      isLoading: false,
      search: ''
    };
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({ countries: data, isLoading: false }))
      .catch(err => console.log(err));
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value.toLowerCase() });
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
            <span
              style={{
                fontSize: '26px',
                alignSelf: 'center',
                fontWeight: '500'
              }}
            >
              Countries
            </span>
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
            <h1 style={{ color: '#97f8ff' }}>Loading...</h1>
          ) : (
            countries
          )}
        </div>
      </div>
    );
  }
}

export default App;
