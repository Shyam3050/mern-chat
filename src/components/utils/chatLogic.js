export const getSender = (loggedUser, users) => {
  console.log(loggedUser);
  console.log(users);
  console.log(users[0]?._id === loggedUser?._id);
  return users[0]?._id === loggedUser?._id
    ? users[1]
    : users[0];
};
