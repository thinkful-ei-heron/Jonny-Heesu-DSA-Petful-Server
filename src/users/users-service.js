const {users, animals} = require('../STORE');

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
  moveLine() {
    if(users.first)
      return  {user: users.dequeue(), animal: animals.dequeue()};
    else {
      return null;
    }
  },
  resetUsers() {
    users.enqueue({id: 0, name: 'Tom'});
    users.enqueue({id: 1, name: 'Andrew'});
    users.enqueue({id: 2, name: 'Jenny'});
    users.enqueue({id: 3, name: 'Everlyn'});
  },
  postUser(user){
    users.enqueue({id: users.length, name: user});
    return {id: users.length-1, name: user};
  }
};

module.exports = UsersService;


