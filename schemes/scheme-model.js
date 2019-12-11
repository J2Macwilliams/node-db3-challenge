const db = require('../data/dbConfig.js');
module.exports = {
	find,
	findById,
	findSteps,
	add,
	update,
	remove
};

function find() {
	return db('schemes');
}

function findById(id) {
	return db('schemes')
		.where({ id })
		.first();
}

function findSteps(scheme_id) {
    // select sc.scheme_name 
    // , st.step_number
    // , st.instructions
    // from schemes as sc
    // join steps as st
    //     on sc.id = st.scheme_id;

    return db('schemes as sc')
    .select("sc.scheme_name", "st.step_number" , "st.instructions")
    .join('steps as st', 'sc.id', 'st.scheme_id')
    .orderBy('st.step_number')
    .where("scheme_id", scheme_id);    
}

function add(scheme) {
	return db('schemes')
		.insert(scheme)
		.then(ids => {
			return findById(ids[0]);
		});
}

function addStep(id) {
	return db('schemes')
		.findById(id)
		.then(foundId => {});
}

function update(changes, id) {
	return db('schemes')
		.where({ id })
		.update(changes);
}

function remove(id) {
	return db('schemes')
		.where('id', id)
		.del();
}
