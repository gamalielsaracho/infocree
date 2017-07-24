import React, { Component } from 'react'

class QuestionList extends Component {
	render() {
		return <div className='question-list'>
			<h1 className='question-list__title'>Preguntas</h1>

			<h4 className='question-list__content__title'>¿Qué es el Bachillerato Técnico?</h4>
			<p className='question-list__content__description'>Una modalidad de la Educación Media que tiene como finalidad la formación integral de jóvenes centrada en la empleabilidad y emprendibilidad, que los prepare adecuadamente para el ejercicio de una profesión. Actualmente se implementan 24 especialidades en todos los departamentos del país, en los sectores industrial, agropecuario y servicios.</p>
			
			<h4 className='question-list__content__title'>¿Cómo se accede al Bachillerato Técnico?</h4>
			<p className='question-list__content__description'>A través de un proceso de admisión que valora de manera equitativa el rendimiento académico obtenido por los postulantes en los tres últimos años de la Educación Escolar Básica y por otra parte los resultados de un conjunto de pruebas psicotécnicas.</p>
			
			<h4 className='question-list__content__title'>¿Porqué ingresar a un Bachillerato Técnico?</h4>
			<li className='question-list__content__description'>Porque el desarrollo del país requiere la preparación de jóvenes para el campo laboral, con suficiente creatividad, con capacidad de trabajar en equipo y de adaptarse a los constantes cambios.</li>
			<br/>
			<li className='question-list__content__description'>Por las condiciones socioeconómicas actuales, que motivan en muchos jóvenes el deseo de ingresar al mundo del trabajo al concluir sus estudios secundarios.</li>
			<br/>
			<li className='question-list__content__description'>Porque al tiempo de ofrecer oportunidades para el acceso de los jóvenes al mundo del trabajo, permite la continuidad de los estudios en el nivel superior.</li>
			<br/>
			<li className='question-list__content__description'>Porque la diversidad de especialidades disponibles puede dar respuesta a una amplia gama de intereses vocacionales de los jóvenes.</li>

			<h4 className='question-list__content__title'>¿Qué especialidades se ofertan en el Departamento de Itapúa?</h4>
			<p className='question-list__content__description'>Actualmente se implementan 14 especialidades: Contabilidad, Salud, Informática, Agropecuario, Administración de Negocios, Mecánica General, Ciencias Ambientales, Diseño Gráfico y Publicidad, Electricidad, Construcciones Civiles, Electromecánica, Mecánica Automotriz, Mercadotecnia y Química Industrial. Las disciplinas que componen los planes de estudio de estas especialidades y la carga horaria de las mismas se indican en este material.</p>
		</div>
	}
}

export default QuestionList