import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import CountriesIndex from './components/countries_index'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={CountriesIndex} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)