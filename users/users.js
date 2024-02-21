const db = require('./usersDb');

function getAllUsers() {
  return db.findAll();
}

function getUser(id) {
  return db.findById(id);
}

function addUser(user) {
  return db.create(user);
}

function updateUser(id, user) {
  return db.update(id, user);
}

function deleteUser(id) {
  return db.remove(id);
}

module.exports = { getAllUsers, getUser, addUser, updateUser, deleteUser };