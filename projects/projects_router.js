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

//get resources
router.get('/', (req, res) => {
	Projects.getResources()
		.then(resources => {
			console.log('working');
			res.json(resources);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to get resources' });
		});
});

//get tasks
router.get('/:id/tasks', (req, res) => {
	const { id } = req.params;
	console.log(id);
	Projects.getTasks(id)
		.then(tasks => {
			console.log('tasks', tasks);
			res.json(tasks);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to get tasks' });
		});
});

router.get('/tasks', (req, res) => {
	Projects.tasks()
		.then(tasks => {
			console.log('working');
			res.json(tasks);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to get tasks' });
		});
});

//create project
router.post('/', (req, res) => {
	const project = req.body;

	Projects.add(project)
		.then(project => {
			console.log(project);
			res.status(201).json(project);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to create new project' });
		});
});

//create task

router.post('/:id/tasks', (req, res) => {
	const { id } = req.params;

	const task = req.body;

	Projects.addTask(task, id)
		.then(task => {
			console.log('id', id);
			console.log('task', task);

			res.status(201).json(task);
		})

		.catch(err => {
			res.status(500).json({ message: 'Failed to create new task' });
		});
});

module.exports = router;
