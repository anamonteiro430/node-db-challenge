const db = require('./../data/dbconfig.js');

//retrieving a list of projects
function getProjects() {
	return db('projects');
}

//retrieving a list of tasks, should include the project name and project description.
function getTasks(id) {
	return db('tasks as t')
		.join('projects as p', 't.project_id', 'p.id')
		.select(
			'p.project_name as Project Name',
			'p.description as Project Description',
			't.description as Task',
			't.notes as Notes'
		)
		.where('p.id', id);
}
//adding resources

//adding projects

module.exports = {
	getProjects,
	getTasks
};
