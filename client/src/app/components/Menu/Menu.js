import React, { Component } from 'react'
import { Link } from 'react-router' 

class Menu extends Component {
	render() {
		return <div>
			<h4>Menu de la aplicación</h4>
			<Link to='/eventos'>Eventos</Link>
		</div>
	}
}

export default Menu