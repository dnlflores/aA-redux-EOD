import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { createUser } from '../../store/users';

export default function UserForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profileImg, setProfileImg] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async event => {
    event.preventDefault();

    const userInfo = {
      id: nanoid(),
      fullName: `${firstName} ${lastName}`,
      profileImg,
      description
    };

    await dispatch(createUser(userInfo));

    history.push("/")
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <h1>Create User!</h1>
      <label htmlFor="firstName" className="form-label">First Name</label>
      <input className="user-input" value={firstName} onChange={e => setFirstName(e.target.value)} required />
      <label htmlFor="lastName" className="form-label">Last Name</label>
      <input className="user-input" value={lastName} onChange={e => setLastName(e.target.value)} required />
      <label htmlFor="profileImg" className="form-label">Proflie Image</label>
      <input className="user-input" value={profileImg} onChange={e => setProfileImg(e.target.value)} required />
      <label htmlFor="description" className="form-label">Description</label>
      <input className="user-input" value={description} onChange={e => setDescription(e.target.value)} required />
      <button className="blue-btn" type="submit">Submit!</button>
      <button className="red-btn" onClick={() => history.push("/")}>Cancel</button>
    </form>
  )
}

