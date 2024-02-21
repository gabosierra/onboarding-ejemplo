let users = [{ id: 1, name: 'Juan Perez' }];

function findAll() {
  return users;
}

function findById(id) {
  return users.find(user => user.id === id);
}

function create(user) {
  users.push(user);
  return user;
}

function update(id, newUser) {
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    users[index] = { ...users[index], ...newUser };
    return users[index];
  }
  return null;
}

function remove(id) {
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[1];
  }
  return null;
}

function reset(){
    const clear = () => {
        users = [];
    }
}

module.exports = { findAll, findById, create, update, remove, reset };