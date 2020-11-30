import React from 'react';
import Header from './Header';
import axios from 'axios';

class BeersDetails extends React.Component {
  state = {
    beer: [],
  };

  componentDidMount() {
    this.getSingleBeer();
  }

  getSingleBeer = () => {
    const { params } = this.props.match;
    axios
      .get(`'https://ih-beers-api2.herokuapp.com/beers/${params.id}`)
      .then((response) => {
        const theBeer = response.data;
        console.log(theBeer);
        this.setState({
          beer: theBeer,
        });
      });
  };

  render() {
    return (
      <div>
        <Header />
        <h1>BEER DETAILS</h1>
        <div>
          <div>
            <img src={this.state.beer.image_url} />

            <div>
              <h2>Name: {this.state.beer.name}</h2>
              <h3>Tagline: {this.state.beer.tagline}</h3>
              <p>Description: {this.state.beer.description}</p>
              <p>First brewed: {this.state.beer.first_brewed} </p>
              <p>Attenuation level: {this.state.beer.attenuation_level} </p>
              <p>Created by:{this.state.beer.contributed_by}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BeersDetails;
