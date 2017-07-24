import React, { Component } from 'react'

import Header from '../components/Header'
import Team from '../components/Team'
import WatchVideo from '../components/WatchVideo'

class HomePage extends Component {
	render() {
		return <div>
			<Header/>
			<Team/>
			<WatchVideo/>
		</div>
	}
}

export default HomePage