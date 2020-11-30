import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './components/Home';
import Beers from './components/Beers';
import Newbeer from './components/NewBeer';

class App extends React.Component {
  state = {
    beers: [],
  };

  componentDidMount = async () => {
    const beers = await axios.get('https://ih-beers-api2.herokuapp.com/beers');
    this.setState({
      beers: beers.data,
    });
  };
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/beers"
              render={() => <Beers beers={this.state.beers} />}
            />
            <Route exact path="/new-beer" component={Newbeer} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
