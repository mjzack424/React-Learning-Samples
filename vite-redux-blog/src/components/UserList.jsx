import { useSelector } from "react-redux";
import {
  selectAllusers,
  useAddNewUserMutation,
  useDeleteUserMutation,
} from "../reducers/userSlice";
import { Link } from "react-router-dom";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";

const UserList = () => {
  const [newUser, setNewUser] = useState("");
  const users = useSelector(selectAllusers);
  const [AddNewUser, { isLoading }] = useAddNewUserMutation();
  const [deleteUser] = useDeleteUserMutation();
  const onUserChange = (e) => setNewUser(e.target.value);
  const canSave = Boolean(newUser);

  const handleSubmitForm = async () => {
    if (canSave) {
      await AddNewUser({ id: nanoid(), fullname: newUser });
      setNewUser("");
    }
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
  };

  const renderedUsers = users.map((user) => {
    return (
      <li key={user.id}>
        <Link to={`/users/${user.id}`} style={{ textDecoration: "none" }}>
          {user.fullname}
        </Link>
        &nbsp;
        <button
          onClick={() => handleDelete(user.id)}
          style={{
            marginRight: "1px",
            color: "tomato",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          &#8855;
        </button>
      </li>
    );
  });
  return (
    <>
      <section className="UserList">
        <div>
          <form>
            <label htmlFor="newUser">نام نویسنده</label>
            <input
              type="text"
              id="newUser"
              name="newUser"
              value={newUser}
              onChange={onUserChange}
            />
            <button
              type="button"
              onClick={handleSubmitForm}
              disabled={!canSave}
            >
              ساخت نویسنده جدید
            </button>
          </form>
        </div>
        <h2>فهرست نویسندگان</h2>
        <u>{renderedUsers}</u>
      </section>
    </>
  );
};

export default UserList;
