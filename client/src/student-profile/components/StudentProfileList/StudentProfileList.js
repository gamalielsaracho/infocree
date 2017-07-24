import React, { Component } from 'react'

class StudentProfileList extends Component {
	render() {
		return <div className='student-profile-list'>
			<h1 className='student-profile-list__title'>Perfil del Alumno</h1>
		
			<div className='student-profile-list__container__themes'>
				
				<div className='student-profile-list__theme'>
					<div className='student-profile-list__container__image'>
						<img className='student-profile-list__image' src='https://cdn-images-1.medium.com/max/800/1*TFyTjyu6jLYrKG0WAcPJWw.jpeg'/>
					</div>
					<div className='student-profile-list__description'>
						<h3 className='student-profile-list__theme-title'>Emplear conocimientos científicos, humanísticos y tecnológicos en la práctica laboral de su especialidad y/o prosecución de estudios superiores</h3>
						<ul className='student-profile-list__container__items'>
							<li className='student-profile-list__item'>Planificar, organizar, conducir y controlar, trabajos en el área de su competencia bajo el control y la dirección de instancias superiores.</li>
							<li className='student-profile-list__item'>Analizar y proponer soluciones a problemas informáticos acordes a su nivel de preparación.</li>
							<li className='student-profile-list__item'>Adaptarse a los cambios tecnológicos de la especialidad.</li>
						</ul>
					</div>
				</div>

				<div className='student-profile-list__theme'>
					<div className='student-profile-list__description'>
						<h3 className='student-profile-list__theme-title'>Aplicar con eficiencia y eficacia los conocimientos tecnológicos e informáticos adquiridos, para la ejecución de trabajos de calidad</h3>
						<ul className='student-profile-list__container__items'>
							<li className='student-profile-list__item'>Utilizar el pensamiento crítico, el método tecnológico y científico para el estudio y la resolución de problemas.</li>
							<li className='student-profile-list__item'>Elaborar presupuestos de los proyectos y/o trabajos que le son encomendados bajo la supervisión de instancias superiores.</li>
							<li className='student-profile-list__item'>Utilizar eficientemente los recursos del hardware, software y la literatura técnica correspondiente en formato impreso y/o digital.</li>
						</ul>
					</div>
					<div className='student-profile-list__container__image'>
						<img className='student-profile-list__image' src='https://www.exceptionnotfound.net/content/images/2015/04/the-coder.jpg'/>
					</div>
				</div>

				<div className='student-profile-list__theme'>
					<div className='student-profile-list__container__image'>
						<img className='student-profile-list__image' src='https://blogs.adobe.com/digitalmarketing/wp-content/uploads/2015/04/ThinkstockPhotos-477089113-e1429550802497.jpg'/>
					</div>
					<div className='student-profile-list__description'>
						<h3 className='student-profile-list__theme-title'>Aplicar habilidades y destrezas en el uso y desarrollo de aplicaciones informáticas</h3>
						<ul className='student-profile-list__container__items'>
							<li className='student-profile-list__item'>Manejar con solvencia software de aplicaciones generales.</li>
							<li className='student-profile-list__item'>Desarrollar programas de aplicación de complejidad básica utilizando diversos paradigmas de programación.</li>
							<li className='student-profile-list__item'>Implementar capacidades emprendedoras para desarrollar proyectos, producir trabajos originales y resolver problemas.</li>
						</ul>
					</div>
				</div>

				<div className='student-profile-list__theme'>
					<div className='student-profile-list__description'>
						<h3 className='student-profile-list__theme-title'>Desarrollar destrezas generales para el uso y mantenimiento de equipos informáticos</h3>
						<ul className='student-profile-list__container__items'>
							<li className='student-profile-list__item'>Instalar y configurar sistemas informáticos básicos (hardware y software)</li>
							<li className='student-profile-list__item'>Realizar mantenimiento técnico preventivo y correctivo a equipos, insumos, productos y sistemas informáticos básicos.</li>
							<li className='student-profile-list__item'>Asistir para la compra-venta de equipos informáticos básicos.</li>
							<li className='student-profile-list__item'>Asistencia técnica a usuarios en el uso de sistemas informáticos básicos.</li>
							<li className='student-profile-list__item'>Utilizar con eficiencia equipos, procedimientos y técnicas habituales en la ejecución de trabajos de instalación y mantenimiento.</li>
							<li className='student-profile-list__item'>Montar, instalar y configurar una red de complejidad sencilla bajo la supervisión de instancias superiores.</li>
						</ul>
					</div>
					<div className='student-profile-list__container__image'>
						<img className='student-profile-list__image' src='https://www.orangehilldev.com/wp-content/uploads/2015/03/developer-working-osx.jpg'/>
					</div>
				</div>

				<div className='student-profile-list__theme'>
					<div className='student-profile-list__container__image'>
						<img className='student-profile-list__image' src='http://static4.businessinsider.com/image/58360a81e02ba72a008b61cf-480/happy-programmer-work.jpg'/>
					</div>
					<div className='student-profile-list__description'>
						<h3 className='student-profile-list__theme-title'>Aplicar el pensamiento crítico y la ética en el manejo de informaciones y en el desempeño de sus funciones</h3>
						<ul className='student-profile-list__container__items'>
							<li className='student-profile-list__item'>Aplicar criterios de calidad en los procesos para elaborar trabajos de producción de software.</li>
							<li className='student-profile-list__item'>Comunicar informaciones e ideas en forma creativa, usando con solvencia variedad de medios y de formatos.</li>
							<li className='student-profile-list__item'>Promover y practicar el uso seguro, legal y responsable de la información.</li>
							<li className='student-profile-list__item'>Demostrar actitud positiva frente al uso de las TIC´s como medio de comunicación interpersonal y grupal para apoyar la colaboración, el aprendizaje y la productividad.</li>
							<li className='student-profile-list__item'>Actuar con ética y responsabilidad en el manejo de equipos de terceros, instalación de software legal, calidad y veracidad de los componentes a instalar, así como el manejo eficiente de los tiempos para la realización de los trabajos encomendados.</li>
						</ul>
					</div>
				</div>

			</div>
		</div>
	}
}

export default StudentProfileList