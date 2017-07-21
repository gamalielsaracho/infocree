import React, { Component } from 'react'
import { Route, IndexRoute } from 'react-router'

import AppContainer from './app/components/App'

import EventListPage from './event/pages/EventListPage'


export default (
	<Route path='/' component={AppContainer}>
		<Route path='/eventos' component={EventListPage}/>
	</Route>
)