import React, { Component } from 'react'
import { Link } from 'react-router' 

class Menu extends Component {
	constructor(props) {
		super(props)
		this.state = {
			windowWidth: window.innerWidth,
		    mobileNavVisible: false
		}
	}

	handleResize() {
	  this.setState({ windowWidth: window.innerWidth });
	}

	componentDidMount() {
	  window.addEventListener('resize', this.handleResize.bind(this));
	}

	componentWillUnmount() {
	  window.removeEventListener('resize', this.handleResize.bind(this));
	}

	navigationLinks() { // MOVIL MENU.
		return <ul className='menu__btn'>
			<li className='menu__btn'>
				<Link to='/'> 
					<span className="menu__btn_icon icon-home3"></span> Home
				</Link>
			</li>
			<li className='menu__btn'>
				<Link to='/asignaturas'>
					<span className="menu__btn_icon icon-pencil2"></span> Asignaturas
				</Link>
			</li>
			<li className='menu__btn'>
				<Link to='/perfil-alumno'>
					<span className="menu__btn_icon icon-user-check"></span> Perfil del alumno
				</Link>
			</li>
			<li className='menu__btn'>
				<Link to='/preguntas-frecuentes'>
					<span className="menu__btn_icon icon-question"></span> Preguntas frecuentes
				</Link>
			</li>
			<li className='menu__btn'>
				<Link to='/promociones-anteriores'>
					<span className="menu__btn_icon icon-images"></span> Promociones
				</Link>
			</li>
		</ul>
	}

	renderMobileNav() {
	  if(this.state.mobileNavVisible) {
	    return this.navigationLinks();
	  }
	}

	handleNavClick() {
	  if(!this.state.mobileNavVisible) {
	    this.setState({ mobileNavVisible: true });
	  } else {
	    this.setState({ mobileNavVisible: false });
	  }
	}

	renderNavigation() {
	  if(this.state.windowWidth <= 635) {
	    return <nav className='menu__btn__list'>
	    	<span className="menu__btn_icon--responsive icon-indent-increase" onClick={this.handleNavClick.bind(this)}></span>

	        { this.renderMobileNav() }
			
		</nav>

	  } else {
	    return <nav className='menu__btn__list'>
	        <li className='menu__btn'>
				<Link to='/'> 
					<span className="menu__btn_icon icon-home3"></span> Home
				</Link>
			</li>
			<li className='menu__btn'>
				<Link to='/asignaturas'>
					<span className="menu__btn_icon icon-pencil2"></span> Asignaturas
				</Link>
			</li>
			<li className='menu__btn'>
				<Link to='/perfil-alumno'>
					<span className="menu__btn_icon icon-user-check"></span> Perfil del alumno
				</Link>
			</li>
			<li className='menu__btn'>
				<Link to='/preguntas-frecuentes'>
					<span className="menu__btn_icon icon-question"></span> Preguntas frecuentes
				</Link>
			</li>
			<li className='menu__btn'>
				<Link to='/promociones-anteriores'>
					<span className="menu__btn_icon icon-images"></span> Promociones
				</Link>
			</li>
		</nav>
	  }
	}

	render() {
		return <div className='menu'>
			{ this.renderNavigation() }
		</div>
	}
}

export default Menu