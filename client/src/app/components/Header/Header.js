import React, { Component } from 'react'

import Menu from '../Menu'

class Header extends Component {
	render() {
		return <div className='header'>
			<div className='header__container__content'>
				<div className='header__container__logo'>
					<img className='header__logo' src='http://infocree.hol.es/images/logo.png'/>
				</div>
				<p className='header__description'>Somos un grupo de estudiantes del Tercer curso del Bachillerato Técnico en Informática. Esta página esta enfocada en brindar información acerca del Bachillerato Técnico en informática del Centro Regional de Educación Gral. Patricio Escobar, como tambien para motivar a los alumnos interesados en este énfasis, para una buena elección y tener una noción de lo que implica este Bachillerato Técnico.</p>
			</div>
		</div>
	}
}

export default Header