const db = require('../data/dbconfig.js');

//retrieving a list of resources
function getResources() {
	return db('resources');
}

function addResource(resource) {
	return db('resources')
		.insert(resource, 'resource')
		.then(ids => {
			return findByIdR(ids[0]);
		});
}

//retrieving a list of tasks, should include the project name and project description.

//adding resources

//adding projects

module.exports = {
	getResources,
	addResource
};
