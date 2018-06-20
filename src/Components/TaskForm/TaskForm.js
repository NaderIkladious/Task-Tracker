import React, { Component } from 'react';
import styled from 'styled-components';
import ProjectSelect from './ProjectSelect';
import TextInputField from './TextInputField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import ButtonField from './ButtonField';
import GridHalf from '../Partials/GridHalf.js';
import DataStore from '../DataStore';
import * as moment from 'moment';

class TaskForm extends Component {
	state = {
			project: "",
			taskTitle: "",
			pendingTask: false,
			projectId: null
	}
	componentWillMount() {
		this.DS = new DataStore;
		this.currentTask = this.DS.getStartedTask();
		this.currentTask.on('value', (snapshot) => {
			if (snapshot.val()) {
				let keys = Object.keys(snapshot.val())
				if(keys.length) {
					let result = snapshot.val()[keys[0]];
					this.setState({
						pendingTask: true,
						project: result.project,
						taskId: keys[0],
						startTime: result.created,
						taskTitle: result.taskTitle
					});
				}
			}
		});
		this.DS.getTasks().on('child_changed', task => {
			if (task.key === this.state.taskId && task.val().ended) {
				this.setState({
					project: "",
					taskTitle: "",
					pendingTask: false,
					projectId: null
				})
			}
    });
	}
	componentDidUpdate() {
		if (!this.interval && this.state.pendingTask) {
	    this.interval = setInterval(() => {
	    	this.setState({counter: this.time()});
				console.log(this.state);
	    }, 1000);	
		}
	}
	constructor() {
		super();
		this.startTask = this.startTask.bind(this);
		this.endTask = this.endTask.bind(this);
		this.changeInput = this.changeInput.bind(this);
	}
	changeInput(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}
	startTask(e) {
		if (this.state.project.length && this.state.taskTitle.length) {
			this.DS.saveTask(this.state);
		}
	}
	endTask(e) {
		if (this.state.taskId) {
			this.DS.endTask(this.state.taskId);
		}
	}
	time() {
		let time = moment(this.state.startTime);
		let now = moment(new Date());
		let diff = moment.utc(moment(now).diff(moment(time)));
		let hours = diff.get('hours') ? diff.get('hours') : 0;
		let days = diff.get('date') === 1 ? 0 : ((diff.get('date') - 1) * 24); 
		return hours + days + ':' +  diff.format("mm:ss");
	}
	render () {

		const isPendingTask = this.state.pendingTask;
		    
    const button = isPendingTask ? (
      <ButtonField color="secondary" onClick={this.endTask}>{this.state.counter} <br/>Finish</ButtonField>    
    ) : (
			<ButtonField color="secondary" onClick={this.startTask}>Start</ButtonField>    	
    );

		return (
			<form className="uk-margin-bottom">
				<GridHalf container spacing={24} styles={"height: 80vh"} alignItems='center'>
					<Grid item xs={3}>
						<TextInputField name="project" value={this.state.project} changeValue={this.changeInput} title="Project"/>
					</Grid>
					<Grid item xs={6}>
						<TextInputField name="taskTitle" value={this.state.taskTitle} changeValue={this.changeInput} title="Task Name"/>
					</Grid>
					<Grid item xs={3}>
						{button}
					</Grid>
				</GridHalf>
			</form>
		);
	}
	componentWillUnmount() {
		clearInterval(this.interval);
		this.interval = undefined;
	}
}

export default TaskForm;