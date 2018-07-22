import _ from 'lodash';
import Fire from '../Fire';

class DataStore {
	constructor() {
		this.timer = Fire.database().ref();
	}

	saveTask(data) {
		data = _.pick(data, ['project', 'taskTitle']);
		data['created'] = new Date().getTime();
		this.timer
			.child('tasks')
			.push()
			.set(data);
	}
	endTask(id) {
		let ended = new Date().getTime();
		this.timer.child(`tasks/${id}`).update({ ended: ended });
	}
	getStartedTask() {
		let Tasks = this.timer.child('tasks');
		return Tasks.orderByChild('ended')
			.equalTo(null)
			.limitToFirst(1);
	}
	getTasks() {
		return this.timer.child('tasks').orderByChild('created');
	}
}
export default DataStore;
