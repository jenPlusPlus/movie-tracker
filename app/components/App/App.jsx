import React, { Component } from 'react'
import { getNowPlaying, getMovies } from '../../actions'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import CardCatalogContainer from './../../containers/CardCatalogContainer.js'
import { Switch } from 'react-router'
import RegisterContainer from './../../containers/RegisterContainer.js'
import LoginContainer from './../../containers/LoginContainer.js'
import HeaderContainer from './../../containers/HeaderContainer.js'


export default class App extends Component {
  constructor() {
    super();
  }

  render () {
    console.log('props: ', this.props);
    return (
      <BrowserRouter>
        <div className='app'>
          <Switch>

            <Route exact path='/' render={() => {
              return (
                <div>
                  <HeaderContainer />
                  <CardCatalogContainer />
                </div>
              )
            }} />

            <Route exact path='/login' component={LoginContainer} />
            <Route exact path='/register'
              render={() => {
                return (
                  <div>
                    <HeaderContainer />
                    <RegisterContainer />
                  </div>
                )
              }}/>
          </Switch>

      </div>
      </BrowserRouter>
    )
  }
}
