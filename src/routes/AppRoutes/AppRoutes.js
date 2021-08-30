import React, { Component } from "react";
import { Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from "../../pages/Dashboard/Dashboard"
import Favorites from "../../pages/Favorites/Favorites"
import ArtistPage from '../../pages/ArtistPage/ArtistPage'

class AppRoutes extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Redirect exact from="/" to="/dashboard" />
          <Route exact path='/dashboard' render={() => <Dashboard /> } />
          <Route exact path='/favorites' render={() => <Favorites /> } />
          <Route exact path='/artists/:artistsId' render={() => <ArtistPage /> } />
        </Switch>
      </React.Fragment>
    )
  }
}

export default AppRoutes