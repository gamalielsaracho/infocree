import React, { Component } from 'react'

import Header from '../components/Header'
import Team from '../components/Team'

class HomePage extends Component {
	render() {
		return <div>
			<Header/>
			<Team/>
		</div>
	}
}

export default HomePage