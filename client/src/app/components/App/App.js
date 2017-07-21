import React, { Component } from 'react'

import Menu from '../Menu'

class App extends Component {
	render() {
		return <div>
			<Menu/>
			<h1>Hola mundoooo infoOrCree.!</h1>
			
			{ this.props.children }
		</div>
	}
}

export default App