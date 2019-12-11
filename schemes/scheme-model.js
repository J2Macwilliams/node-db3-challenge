const db = require('../data/dbConfig.js');
module.exports = {
find,
findById,
findSteps,
add,
update,
remove,
};

function find() {
return db('schemes');
}

function findById(id) {
return db('schemes')
.where({ id })
.first();
}

function findSteps(id) {
    return db('schemes')

}
function add(post) {
return db('schemes')
.insert(post)
.then(ids => {
return findById(ids[0]);
});
}

function update(id, changes) {
return db('schemes')
.where({ id })
.update(changes);
}

function remove(id) {
return db('schemes')
.where('id', id)
.del();
}