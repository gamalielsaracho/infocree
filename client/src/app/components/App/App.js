import React, { Component } from 'react'

import Menu from '../Menu'
import Header from '../Header'
import Team from '../Team'

class App extends Component {
	render() {
		return <div className='app'>
			<Menu/>
			<Header/>
			<Team/>
			
			{ this.props.children }
		</div>
	}
}

export default App