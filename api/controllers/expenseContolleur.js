// importation du model

function create(req, res) {
    return res.json('Create an expense')
}

function findAll(req, res) {
    return res.json('Find All expenses')
}

function findById(req, res) {
    return res.json('Find one expense')
}

function updateAll(req, res) {
    return res.json('update all expense fields')
}

function update(req, res) {
    return res.json('Update one expense')
}

function remove(req, res) {
    return res.json('Remove one expense')
}

module.exports = {
    create,
    findAll,
    findById,
    updateAll,
    update,
    remove
}