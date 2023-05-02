import { useDispatch } from "react-redux";
import { removeUser } from "../../store/users";

export default function UserSlice({ user }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeUser(user.id))
  };

  if (!user) return null;

  return (
    <div className="user-slice">
      <img className="user-pic" src={user.profileImg} alt="user" />
      <div className="user-info">
        <h2>{user.fullName}</h2>
        <p>{user.description}</p>
        <button className="red-btn" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}