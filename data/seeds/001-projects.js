exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('projects')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('projects').insert([
				{
					id: 1,
					project_name: 'sprint',
					description: 'finish this sprint',
					completed: false
				},
				{ id: 2, project_name: 'eat', description: 'to eat', completed: false },
				{
					id: 3,
					project_name: 'sleep',
					description: 'to sleep',
					completed: false
				}
			]);
		});
};
