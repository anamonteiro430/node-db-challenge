const express = require('express');

const Projects = require('./projects_model');

const router = express.Router();

//get projects
router.get('/', (req, res) => {
	Projects.getProjects()
		.then(projects => {
			console.log('working');
			res.json(projects);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to get projects' });
		});
});

router.get('/:id/tasks', (req, res) => {
	const { id } = req.params;

	Projects.getTasks(id)
		.then(tasks => {
			console.log('tasks', tasks);
			if (tasks.length) {
				res.json(tasks);
			} else {
				res
					.status(404)
					.json({ message: 'Could not find tasks for given project' });
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to get tasks' });
		});
});

module.exports = router;
