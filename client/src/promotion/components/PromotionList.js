import React, { Component } from 'react'

class PromotionList extends Component {
	render() {
		return <div className='promotion-list'>
			<h1 className='promotion-list__title'>Promociones</h1>
			<div className='promotion-list__container__courses'>
				<div className='promotion-list__course'>
					<div className='promotion-list__container__image'>
						<img className='promotion-list__image' src='http://infocree.hol.es/images/mahaio.jpg'/>
					</div>
					<h4 className='promotion-list__course__title'>2014 MAHAIO</h4>
				</div>
				<div className='promotion-list__course'>
					<div className='promotion-list__container__image'>
						<img className='promotion-list__image' src='http://infocree.hol.es/images/kala.jpg'/>
					</div>
					<h4 className='promotion-list__course__title'>2013 KALAKAUA</h4>
				</div>
				<div className='promotion-list__course'>
					<div className='promotion-list__container__image'>
						<img className='promotion-list__image' src='http://infocree.hol.es/images/sau.jpg'/>
					</div>
					<h4 className='promotion-list__course__title'>2012 SAUKIRIA</h4>
				</div>
				<div className='promotion-list__course'>
					<div className='promotion-list__container__image'>
						<img className='promotion-list__image' src='http://infocree.hol.es/images/blu.jpg'/>
					</div>
					<h4 className='promotion-list__course__title'>2010 BLUETOOTH</h4>
				</div>
				<div className='promotion-list__course'>
					<div className='promotion-list__container__image'>
						<img className='promotion-list__image' src='http://infocree.hol.es/images/daiki.jpg'/>
					</div>
					<h4 className='promotion-list__course__title'>2009 DAIKIRI</h4>
				</div>
				<div className='promotion-list__course'>
					<div className='promotion-list__container__image'>
						<img className='promotion-list__image' src='http://infocree.hol.es/images/anagus.jpg'/>
					</div>
					<h4 className='promotion-list__course__title'>1997 ANAGUS</h4>
				</div>
			</div>
		</div>
	}
}

export default PromotionList