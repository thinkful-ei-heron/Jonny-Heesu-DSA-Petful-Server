const {users} = require('../STORE');

const UsersService = {
  getAllUsers() {
    let usersTemp = users.first;
    let usersArr = [];
    while (usersTemp !== null) {
      usersArr.push(usersTemp.value);
      usersTemp = usersTemp.next;
    }
    return usersArr;
  },

  getById(id) {
    let usersTemp = users.first;
    let user = null;
    while (usersTemp !== null && usersTemp.value.id+'' !== id) {
      usersTemp = usersTemp.next;
    }
    if(!usersTemp)
      return null;
    return usersTemp.value
  },
  deleteUser(user) {
    return users.remove(user.name)
  },
  moveLine() {
    return  users.dequeue();
  },
  postUser(user){
    users.enqueue({id: users.length, name: user});
    return {id: users.length-1, name: user};
  }
};

module.exports = UsersService;


