import React, { Component } from 'react'

class Footer extends Component {
	render() {
		return <footer className='footer'>
			<div className='footer__container'>
				<div className='footer__content'>
					<div className='footer__container__center'>
						<p className='footer__date'>2014-2017</p>
					</div>
				</div>

				<div className='footer__content'>
					<div className='footer__container__center footer__container__center--mobile-justify'>
						<span className="footer__social__network__icon icon-facebook2"></span>
						<span className="footer__social__network__icon icon-twitter"></span>
						<span className="footer__social__network__icon
							footer__social__network__icon--black 
							icon-github"></span>
					</div>
				</div>
			</div>
		</footer>
	}
}

export default Footer