import React, { Component } from 'react'
import { Link } from 'react-router' 

class Menu extends Component {
	render() {
		return <div className='menu'>
				<nav className='menu__btn__list'>
					<li className='menu__btn'>
					<Link to='/'> 
							<span className="menu__btn_icon icon-home3"></span> Home
					</Link>
					</li>
						<li className='menu__btn'>
					<Link to='/eventos'>
							<span className="menu__btn_icon icon-pencil2"></span> Asignaturas
					</Link>
						</li>
						<li className='menu__btn'>
					<Link to='/eventos'>
							<span className="menu__btn_icon icon-user-check"></span> Perfil del alumno
					</Link>
						</li>
						<li className='menu__btn'>
					<Link to='/eventos'>
							<span className="menu__btn_icon icon-question"></span> Preguntas frecuentes
					</Link>
						</li>
						<li className='menu__btn'>
					<Link to='/eventos'>
							<span className="menu__btn_icon icon-images"></span> Promociones
					</Link>
						</li>
				</nav>
		</div>
	}
}

export default Menu