import React, { Component } from 'react';
import CenteredWrapper from '../Partials/CenteredWrapper';
import TaskForm from '../TaskForm/TaskForm';


class Home extends Component {
	render() {
		return (
			<CenteredWrapper>
				<TaskForm/>
			</CenteredWrapper>
		)
	}
} 

export default Home;