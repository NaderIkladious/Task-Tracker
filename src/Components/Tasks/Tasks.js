import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';
import DataStore from '../DataStore';
import './Tasks.css';
import _ from 'lodash';

class Tasks extends Component {
	state = {
		tasks: []
	}
	refineTask(task) {
		return Object.assign(task.val(), {
			id: task.key,
			date: moment.utc(task.val().created).calendar(),
			time: task.val().created
		});
	}
	getColor(title) {
		let abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
		let result = [];
		_.each(_.take(title, 3), char => {
			result.push(_.indexOf(abc, _.toUpper(char)) * 10);
		});
		return `rgb(${result[0]}, ${result[1]}, ${result[2]})`;
	}
	dayWorkingHours(tasks) {
		let total = 0;
		tasks.forEach((task) => {
      let thisMoment = this.timeDifference(task.created, task.ended).unix();
      total += thisMoment;
    });
		return this.formatDuration(moment.utc(total*1000));
	}
	timeDifference(created, ended) {
		let time = moment(created);
		let now = moment(ended);
		return moment.utc(moment(now).diff(moment(time)));
	}
	formatDuration(diff) {
		let hours = diff.get('hours') ? diff.get('hours') : 0;
		let days = diff.get('date') === 1 ? 0 : ((diff.get('date') - 1) * 24); 
		return hours + days + ':' +  diff.format("mm:ss");
	}
	taskDuration(created, ended) {
		let diff = this.timeDifference(created, ended);
		return this.formatDuration(diff);
	}
	componentWillMount() {
		moment.locale('en', {
		    calendar : {
		        lastDay : '[Yesterday]',
		        sameDay : '[Today]',
		        nextDay : '[Tomorrow]',
		        lastWeek : '[last] dddd',
		        nextWeek : 'dddd',
		        sameElse : 'L'
		    }
		});
		this.DS = new DataStore;
		this.allTasks = this.DS.getTasks();
	
		this.allTasks.on('child_added', task => {
			let current = this.state.tasks;
			let refinedTask = this.refineTask(task);
			if (current[refinedTask.date] && current[refinedTask.date]['data']) {
				current[refinedTask.date]['data'].push(refinedTask);
			} else {
				current[refinedTask.date] = {data: [], order: refinedTask.time};
				current[refinedTask.date]['data'].push(refinedTask);
			}
			this.setState({
				tasks: current
			});
    });

	}
	render () {
	  return (
	    <List className="root" subheader={<li />}>
	      {_.reverse(_.keys(this.state.tasks)).map(date => (
	        <li key={`section-${date}`} className="listSection">
	          <ul className="ul">
	            <ListSubheader>{`${date}`} <span className="day-working-hours">{this.dayWorkingHours(this.state.tasks[date].data)}</span></ListSubheader>
	            {_.reverse(_.sortBy(this.state.tasks[date].data, (task) => task.created && task.created)).map(task => (
	              <ListItem key={`${task.id}`}>
	              	<Grid container spacing={24} styles={"height: 80vh"} alignItems='center'>
	              		<Grid item xs={4}>
	                		<ListItemText primary={`${task.taskTitle}`} />
	              		</Grid>
	              		<Grid item xs={3}>
	                		<span className="project" style={{backgroundColor: this.getColor(task.project)}}>{task.project}</span>
	              		</Grid>
	              		<Grid item xs={3}>
	              			{this.taskDuration(task.created, task.ended)}
	              		</Grid>
	              	</Grid>
	              </ListItem>
	            ))}
	          </ul>
	        </li>
	      ))}
	    </List>
	  );
	}
}

export default Tasks;