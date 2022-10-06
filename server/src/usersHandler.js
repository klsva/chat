let users = []
const usersHandler = (socket, io) => {
  //adds new user
  const addUser = ({userId, username}) => {
    const index = users.findIndex(u => u.userId === userId)
    if (index < 0) {
      users.push({userId, username})
    }
    getUsers();
  }
  //gets list of users
  const getUsers = () => {
    io.emit('get_users', users)
  }
  //remove user after disconnection
  const removeUser = (userId) => {
    users = users.filter(u => u.userId !== userId)
    getUsers();
  }

  socket.on('add_user', addUser);
  socket.on('remove_user', removeUser);
}

export default usersHandler;