exports.up = function(knex) {
	return knex.schema

		.createTable('projects', tbl => {
			tbl.increments();
			tbl.text('project_name', 128).notNullable();
			tbl.text('description', 255);
			tbl.boolean('completed').defaultTo(false);
		})

		.createTable('resources', tbl => {
			tbl.increments();
			tbl.text('resource_name', 128).notNullable();
			tbl.text('description', 255);
		})

		.createTable('tasks', tbl => {
			tbl.increments();
			tbl.text('task_description', 255).notNullable();
			tbl.text('notes', 255);
			tbl.boolean('completed').defaultTo(false);
			tbl
				.integer('project_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('projects')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
		})

		.createTable('resourcesofproject', tbl => {
			//composite key
			tbl.primary(['project_id', 'resource_id']);
			//FOREIGN KEY
			tbl
				.integer('project_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('projects')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
			//FOREIGN KEY
			tbl
				.integer('resource_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('resources')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
		});
};

exports.down = function(knex) {
	return knex.schema
		.dropTableIfExists('resourcesofproject')
		.dropTableIfExists('tasks')
		.dropTableIfExists('resources')
		.dropTableIfExists('projects');
};
