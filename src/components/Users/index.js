import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUsers } from "../../store/users";
import UserSlice from "./UserSlice";

export default function Users() {
  const usersObj = useSelector(state => state.users);
  const users = Object.values(usersObj);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch]);

  if (!users.length) return null;
  
  return (
    <div className="users-container">
      {users.map(user => (
        <UserSlice key={user.id} user={user} />
      ))}
      <button className="blue-btn" onClick={() => history.push("/users/new")}>Create User!</button>
    </div>
  )
}