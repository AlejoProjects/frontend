import React, { Component } from 'react';
import InformacionUsuario from "./userInformation";

//data of service providers from the server
class ServiceProviderSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      results: [],
    };
  }

  handleSearchChange = (e) => {
    const searchQuery = e.target.value;
    this.setState({ searchQuery });

    // Perform a simple client-side search
    const filteredResults = InformacionUsuario.filter((provider) =>
      provider.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    this.setState({ results: filteredResults });
  };

  render() {
    return (
      <div>
        <h1>Service Provider Search</h1>
        <input
          type="text"
          placeholder="Search for service providers"
          value={this.state.searchQuery}
          onChange={this.handleSearchChange}
        />
        <ul>
          {this.state.results.map((provider) => (
            <li key={provider.id}>
              {provider.name} - {provider.service} - {provider.contact}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ServiceProviderSearch;
