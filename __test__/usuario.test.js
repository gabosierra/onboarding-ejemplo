const users = require('../users/users');
const db = require('../users/usersDb');

//beforeEach(() => {
  // Restablece la base de datos antes de cada prueba
  //db.reset();
//});

test('find all users', () => {
  expect(users.getAllUsers()).toHaveLength(1);
});

test('find user by id', () => {
  expect(users.getUser(1)).toEqual({ id: 1, name: 'Juan Jimenez' });
});

test('create a new user', () => {
  const newUser = { id: 2, name: 'Ana Beltran' };
  users.addUser(newUser);
  expect(users.getAllUsers()).toContainEqual(newUser);
});

test('update a user', () => {
  const updatedUser = { name: 'Juan Beltran' };
  users.updateUser(1, updatedUser);
  expect(users.getUser(1)).toMatchObject(updatedUser);
});

test('delete a user', () => {
  users.deleteUser(1);
  expect(users.getAllUsers()).toHaveLength(1);
});