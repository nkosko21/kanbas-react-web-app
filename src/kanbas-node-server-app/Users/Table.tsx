import React, { useState, useEffect } from "react";
import {
  BsTrash3Fill,
  BsPlusCircleFill,
  BsFillCheckCircleFill,
  BsPencil,
} from "react-icons/bs";
import * as client from "./client";
import { User } from "./client";

export default function UserTable() {
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User>({
    _id: "", username: "", password: "", firstName: "",
    lastName: "", role: "USER"
  });

  const deleteUser = async (user: User) => {
    try {
      await client.deleteUser(user);
      setUsers(users.filter((u) => u._id !== user._id));
    } catch (err) {
      console.log(err);
    }
  };
  const createUser = async () => {
    try {
      const newUser = await client.createUser(user);
      setUsers([newUser, ...users]);
    } catch (err) {
      console.log(err);
    }
  };
  const selectUser = async (user: User) => {
    try {
      const u = await client.findUserById(user._id);
      setUser(u);
      console.log(user)
    } catch (err) {
      console.log(err);
    }
  };
  const updateUser = async () => {
    try {
      const status = await client.updateUser(user);
      setUsers(users.map((u) =>
        (u._id === user._id ? user : u)));
    } catch (err) {
      console.log(err);
    }
  };
  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>User Table</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Username & Password</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Role</th>
            <th>&nbsp;</th>
          </tr>
          <tr>
            <td>
              <input
              value={user.username}
                onChange={(e) =>
                  setUser({ ...user, username: e.target.value
                })}
                placeholder='username'
              />
              <input 
                value={user.password}
                onChange={(e) =>
                  setUser({ ...user, password: e.target.value
                  })}
                placeholder='password'
              />
            </td>
            <td>
              <input
                value={user.firstName}
                onChange={(e) =>
                  setUser({ ...user, firstName: e.target.value 
                })}
                placeholder='first name'
              />
            </td>
            <td>
              <input 
                value={user.lastName} 
                onChange={(e) =>
                  setUser({ ...user, lastName: e.target.value
                })}
                placeholder='last name'
              />
            </td>
            <td>
              <select value={user.role} onChange={(e) =>
                setUser({ ...user, role: e.target.value })}>
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
              </select>
            </td>
            <td>
              <BsFillCheckCircleFill
                onClick={updateUser}
                className="me-2 text-success fs-1 text"
              />
              <BsPlusCircleFill onClick={createUser} style={{ cursor: 'pointer' }}/>
            </td>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>
                <button onClick={() => deleteUser(user)}>
                  <BsTrash3Fill />
                </button>
                <button className="btn btn-warning me-2">
                  <BsPencil onClick={() => selectUser(user)} />
                </button>
              </td>
            </tr>))}
        </tbody>
      </table>
    </div>
  );
}
