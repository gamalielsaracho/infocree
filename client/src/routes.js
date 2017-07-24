import React, { Component } from 'react'
import { Route, IndexRoute } from 'react-router'

import AppContainer from './app/components/App'

// Pages.
import HomePage from './app/pages/HomePage'
import SubjectListPage from './subject/pages/SubjectListPage'
import StudentProfileListPage from './student-profile/pages/StudentProfileListPage'
import QuestionListPage from './question/pages/QuestionListPage'
import PromotionListPage from './promotion/pages/PromotionListPage'

export default (
	<Route path='/' component={AppContainer}>
		<IndexRoute component={HomePage}/>
		<Route path='asignaturas' component={SubjectListPage}/>
		<Route path='perfil-alumno' component={StudentProfileListPage}/>
		<Route path='preguntas-frecuentes' component={QuestionListPage}/>
		<Route path='promociones-anteriores' component={PromotionListPage}/>
	</Route>
)