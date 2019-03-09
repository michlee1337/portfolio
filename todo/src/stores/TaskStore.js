import {observable, action, computed} from 'mobx';

class TaskStore {
	@observable tasks = [];

	@action addTask = (task) => {
		this.tasks.push(task);
	}

	@computed get taskCount() {
		return this.tasks.length;
	}
}

const store = new TaskStore();
export default store;