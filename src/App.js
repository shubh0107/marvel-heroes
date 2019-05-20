import React, { Component } from 'react';
import './App.css';
import HeroList from './components/HeroList/HeroList';
import HeroDetails from './components/HeroDetails';
import NotFound from './components/NotFound';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {

  // constructor(props) {
  // super(props);
  // this.state = {
  //   characters: []
  // }
  // }

  // componentDidMount() {
  //   fetchAllCharacters();
  // }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={HeroList} />
            <Route path="/hero/:id" component={HeroDetails} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}


// const mapStateToProps = state => {
//   return {
//     characters: state.characters
//   }
// }

export default App;
