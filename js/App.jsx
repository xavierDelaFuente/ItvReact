// @flow
//component={(props) =>  <Details show={preload.shows.find((show) => props.match.params.id === show.imdbID)} />} to Solve
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import type { Match } from 'react-router-dom'
import Landing from './Landing';
import Search from './Search';
import Details from './Details';
import preload from '../data.json'

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route 
          path="/search" 
          component={(props) => <Search shows={preload.shows} {...props} />
        } />
        <Route 
          path="/details/:id" 
          component={(props: {match: Match}) => {
          const showCompent = preload.shows.find(show => props.match.params.id === show.imdbID);       
          return <Details shows={showCompent} {...props } />}
        } />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
