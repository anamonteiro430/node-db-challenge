const express = require('express');

const Resources = require('./resources_model');

const router = express.Router();

//get projects
router.get('/', (req, res) => {
	Resources.getResources()
		.then(resources => {
			console.log('working');
			res.json(resources);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to get resources' });
		});
});

//create resource
router.post('/', (req, res) => {
	const resource = req.body;

	Resources.addResource(resource)
		.then(resource => {
			console.log(resource);
			res.status(201).json(resource);
		})
		.catch(err => {
			res.status(500).json({ message: 'Failed to create new resource' });
		});
});
module.exports = router;
