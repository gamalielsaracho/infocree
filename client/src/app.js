import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'

import { Provider } from 'react-redux'

import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'

import reducers from './reducers'
import routes from './routes'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
const store = createStoreWithMiddleware(reducers)


ReactDOM.render(<Provider store={store}>
	<Router history={browserHistory} routes={routes}/>
	</Provider>, document.getElementById('app'))

