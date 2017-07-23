import React, { Component } from 'react'

class SubjectList extends Component {
	render() {
		return <div className='subject-list'>
			<h1 className='subject-list__title'>Asignaturas</h1>
			<div className='subject-list__container'>
				<div className='subject-list__content'>
					<h1 className='subject-list__content__title subject-list--first'>Primer curso</h1>
					
					<h4 className='subject-list__content__subtitle'>Plan Común</h4>
					<ul className='subject-list__content__subjects'>
						<li className='subject-list__content__subject'>Lengua Castellana y Literatura.</li>
						<li className='subject-list__content__subject'>Guaraní Ñe’e.</li>
						<li className='subject-list__content__subject'>Lengua Extranjera.</li>
						<li className='subject-list__content__subject'>Ciencias Naturales y Salud.</li>
						<li className='subject-list__content__subject'>Química.</li>
						<li className='subject-list__content__subject'>Física.</li>
						<li className='subject-list__content__subject'>Matemática.</li>
						<li className='subject-list__content__subject'>Historia y Geografía.</li>
						<li className='subject-list__content__subject'>Formación Ética y Ciudadana.</li>
						<li className='subject-list__content__subject'>Sociología y Antropología Cultural.</li>
						<li className='subject-list__content__subject'>Educación Física.</li>
						<li className='subject-list__content__subject'>Orientación Educacional y Sociolaboral.</li>
					</ul>

					<h4 className='subject-list__content__subtitle'>Plan Especifico</h4>
					<ul className='subject-list__content__subjects'>
						<li className='subject-list__content__subject'>Dibujo Técnico.</li>
						<li className='subject-list__content__subject'>Laboratorio.</li>
						<li className='subject-list__content__subject'>Software.</li>
						<li className='subject-list__content__subject'>Algorítmica.</li>
						<li className='subject-list__content__subject'>Matemática Aplicada a Informática.</li>
					</ul>
				</div>

				<div className='subject-list__content'>
					<h1 className='subject-list__content__title subject-list--second'>Segundo curso</h1>
					
					<h4 className='subject-list__content__subtitle'>Plan Común</h4>
					<ul className='subject-list__content__subjects'>
						<li className='subject-list__content__subject'>Lengua Castellana y Literatura.</li>
						<li className='subject-list__content__subject'>Guaraní Ñe’e.</li>
						<li className='subject-list__content__subject'>Lengua Extranjera.</li>
						<li className='subject-list__content__subject'>Ciencias Naturales y Salud.</li>
						<li className='subject-list__content__subject'>Química.</li>
						<li className='subject-list__content__subject'>Física.</li>
						<li className='subject-list__content__subject'>Matemática.</li>
						<li className='subject-list__content__subject'>Historia y Geografía.</li>
						<li className='subject-list__content__subject'>Formación Ética y Ciudadana.</li>
						<li className='subject-list__content__subject'>Educación Física.</li>
					</ul>

					<h4 className='subject-list__content__subtitle'>Plan Especifico</h4>
					<ul className='subject-list__content__subjects'>
						<li className='subject-list__content__subject'>Laboratorio.</li>
						<li className='subject-list__content__subject'>Software.</li>
						<li className='subject-list__content__subject'>Hardware.</li>
						<li className='subject-list__content__subject'>Algorítmica.</li>
						<li className='subject-list__content__subject'>Administración Financiera.</li>
						<li className='subject-list__content__subject'>Matemática Aplicada a Informática.</li>
					</ul>
				</div>

				<div className='subject-list__content'>
					<h1 className='subject-list__content__title subject-list--third'>Tercer curso</h1>
					
					<h4 className='subject-list__content__subtitle'>Plan Común</h4>
					<ul className='subject-list__content__subjects'>
						<li className='subject-list__content__subject'>Lengua Castellana y Literatura.</li>
						<li className='subject-list__content__subject'>Ciencias Naturales y Salud.</li>
						<li className='subject-list__content__subject'>Matemática.</li>
						<li className='subject-list__content__subject'>Historia y Geografía.</li>
						<li className='subject-list__content__subject'>Economía y Gestión.</li>
						<li className='subject-list__content__subject'>Psicología.</li>
						<li className='subject-list__content__subject'>Educación Física.</li>
						<li className='subject-list__content__subject'>Orientación Educacional y Sociolaboral.</li>
					</ul>

					<h4 className='subject-list__content__subtitle'>Plan Especifico</h4>
					<ul className='subject-list__content__subjects'>
						<li className='subject-list__content__subject'>Gabinete de Informática-Laboratorio.</li>
						<li className='subject-list__content__subject'>Algorítmica.</li>
						<li className='subject-list__content__subject'>Administración Financiera.</li>
						<li className='subject-list__content__subject'>Matemática Aplicada a Informática.</li>
						<li className='subject-list__content__subject'>Metodología de la investigación.</li>
					</ul>
				</div>
			</div>


			<div className='subject-list__container__events'>
				<h1 className='subject-list__events__title'>Eventos y Actividades realizados por los alumnos en Técnico en Informática del Cree.</h1>

				<h4 className='subject-list__event__title'>Promo 2006 – DESHABU</h4>
				<p className='subject-list__event__activity'>Ganaron concurso de boleta legal 50 millones (2005).</p>
				<p className='subject-list__event__activity'>Cambiaron las computadoras.</p>
				<p className='subject-list__event__activity'>Construyeron un aula para informática.</p>
				<p className='subject-list__event__activity'>1° Congreso Nacional de Informática del país.</p>
			
				<h4 className='subject-list__event__title'>Promoción 2008-SHENSAIKA	y Promoción 2009 DAIKIRI</h4>
				<p className='subject-list__event__activity'>3° Congreso Nacional de Informática.</p>

				<h4 className='subject-list__event__title'>Promoción 2010 BLUETOOTH</h4>
				<p className='subject-list__event__activity'>Primer Modding del Colegio con materiales reciclados de las Salas.</p>
				<p className='subject-list__event__activity'>Primer Concurso sobre quien sabe mas sobre la Guerra del Chaco.</p>

				<h4 className='subject-list__event__title'>Promoción 2010 BLUETOOTH (TM) y	UBUNTU (TN)</h4>
				<p className='subject-list__event__activity'>5° Congreso de Informática.</p>
				<p className='subject-list__event__activity'>Dentro del 5° Congreso, Realizaron la Primera Olimpiada de Programación.</p>

				<h4 className='subject-list__event__title'>Promoción 2011 SHABADOO</h4>
				<p className='subject-list__event__activity'>Participaron en la 2da Olimpiada de Programación en Caacupe.</p>
				<p className='subject-list__event__activity'>Inventaron software para Historia y Geografía por el año del Bicentenario.</p>

				<h4 className='subject-list__event__title'>Promoción 2012 SAUKIRIA</h4>
				<p className='subject-list__event__activity'>Desarrollaron el 1er Software tutor de Guaraní (software propietario).</p>

				<h4 className='subject-list__event__title'>Promoción 2013 DRYFOS (TN)</h4>
				<p className='subject-list__event__activity'>Desarrollaron 2do Software de Guaraní (software libre).</p>

			</div>

		</div>
	}
}

export default SubjectList