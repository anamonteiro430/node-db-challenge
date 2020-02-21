exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('resourcesofproject')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('resourcesofproject').insert([
				{ project_id: 1, resource_id: '1' },
				{ project_id: 1, resource_id: '2' },
				{ project_id: 1, resource_id: '3' }
			]);
		});
};
