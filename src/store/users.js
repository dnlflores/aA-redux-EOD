import users from '../data/data.json';

const CREATE_USER = 'users/CREATE_USER';
const GET_USERS = 'users/GET_USERS';
const DELETE_USER = 'users/DELETE_USER';

export const getUsers = () => ({
  type: GET_USERS,
  users
})

export const createUser = user => ({
  type: CREATE_USER,
  user
});

export const removeUser = userId => ({
  type: DELETE_USER,
  userId
})


const initialState = {};
export default function usersReducer(state = initialState, action) {
  switch(action.type) {
    case GET_USERS: {
      const newState = {...state};
      action.users.forEach(user => newState[user.id] = user);
      return newState;
    }
    case CREATE_USER: {
      const newState = {...state};
      newState[action.user.id] = action.user;
      return newState;
    }
    case DELETE_USER: {
      const newState = {...state};
      delete newState[action.userId];
      return newState;
    }
    default:
      return state;
  }
}