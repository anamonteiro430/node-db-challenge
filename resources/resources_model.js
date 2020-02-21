const db = require('./../data/dbconfig.js');

//retrieving a list of resources
function getResources() {
	return db('resources');
}

//retrieving a list of tasks, should include the project name and project description.

//adding resources

//adding projects

module.exports = {
	getResources
};
