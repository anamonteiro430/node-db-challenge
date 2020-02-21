const db = require('./../data/dbconfig.js');

//retrieving a list of projects
function getProjects() {
	return db('projects');
}

function getResources() {
	return db('resources');
}

//retrieving a list of tasks, should include the project name and project description.
function getTasks(id) {
	return db('tasks')
		.select(
			'tasks.task_description as Task',
			'tasks.notes as Notes',
			'projects.project_name as Project Name',
			'projects.description as Project Description'
		)
		.join('projects', 'projects.id', 'tasks.project_id')
		.where('projects.id', id);
}

function insert(tasks) {
	return db('tasks')
		.insert(tasks)
		.then(([id]) => get(id));
}

//adding projects
function add(project) {
	return db('projects')
		.insert(project, 'project')
		.then(ids => {
			return findById(ids[0]);
		});
}

function addTask(task, project_id) {
	console.log('here');
	const newTask = {
		project_id: project_id,
		task_description: task.task_description,
		notes: task.notes,
		completed: false
	};
	return db('tasks').insert(newTask);
}
function findById(id) {
	return db('projects')
		.where({ id })
		.first();
}

function findByIdR(id) {
	return db('resources')
		.where({ id })
		.first();
}

module.exports = {
	getProjects,
	getTasks,
	add,
	addTask,
	findById,
	insert,
	getResources,
	findByIdR
};
