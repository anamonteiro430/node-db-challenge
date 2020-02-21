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

module.exports = router;
