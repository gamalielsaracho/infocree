import React, { Component } from 'react'

import Menu from '../Menu'
import Footer from '../Footer'

class App extends Component {
	render() {
		return <div className='app'>
			<Menu/>
			{ this.props.children }
			<Footer/>
		</div>
	}
}

export default App