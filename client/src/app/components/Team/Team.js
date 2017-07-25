import React, { Component } from 'react' 

class Team extends Component {
	render() {
		return <div className='team'>
			<h1 className='team__title'>Nuestro Grupo</h1>
			<div className='team__container__members'>
				
				<div className='team__member'>
					<div className='team__member__container__avatar'>
						<img className='team__member__avatar' src='http://infocree.hol.es/images/seba.jpg'/>
					</div>
					<h3 className='team__member__name'>Sebastian Troche</h3>
				</div>
				<div className='team__member'>
					<div className='team__member__container__avatar'>
						<img className='team__member__avatar' src='http://infocree.hol.es/images/karen.jpg'/>
					</div>
					<h3 className='team__member__name'>Karen Venialgo</h3>
				</div>
				<div className='team__member'>
					<div className='team__member__container__avatar'>
						<img className='team__member__avatar' src='http://infocree.hol.es/images/gama.jpg'/>
					</div>
					<h3 className='team__member__name'>Gamaliel Saracho</h3>
				</div>
				<div className='team__member'>
					<div className='team__member__container__avatar'>
						<img className='team__member__avatar' src='http://infocree.hol.es/images/lucas.png'/>
					</div>
					<h3 className='team__member__name'>Lucas Bogado</h3>
				</div>
				<div className='team__member'>
					<div className='team__member__container__avatar'>
						<img className='team__member__avatar' src='http://infocree.hol.es/images/sora.jpg'/>
					</div>
					<h3 className='team__member__name'>Soraya Camara</h3>
				</div>

			</div>
		</div>
	}
}

export default Team