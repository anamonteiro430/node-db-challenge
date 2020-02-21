exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('tasks')
		.del()
		.then(function() {
			// Inserts seed entries
			return knex('tasks').insert([
				{
					id: 1,
					project_id: 1,
					task_description: 'readme',
					notes: 'very important',
					completed: false
				},
				{
					id: 2,
					project_id: 1,
					task_description: 'draw',
					notes: 'think!',
					completed: false
				},
				{
					id: 3,
					project_id: 1,
					task_description: 'code',
					notes: 'fun',
					completed: false
				}
			]);
		});
};
