import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import * as UsersService from "../../services/users.service";
import { Button } from "semantic-ui-react";

export const UserDetails = (props) => {

  const paramsId = props.location.id !== undefined ? props.location.id : localStorage.getItem("routerId");
  localStorage.setItem("routerId",paramsId)
  const history = useHistory();
  let [users, setUsers] = useState({});
  const getUserDetails = () => {
    UsersService.getUserData(paramsId)
      .then((res) => {
        users = res;
        setUsers(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <div className="w3-container" style={{ paddingTop: "15px" }}>
      <h3 style={{ textAlign: "center" }}>User Details</h3>
      <Button
        primary
        onClick={() => history.push("/")}
      >
        Back
      </Button>
     
      <br />
      <ul className="w3-ul w3-card">
        <li>
          <b>User Name: </b>
          {users.username}
        </li>
        <li>
          <b>Name: </b>
          {users.name}
        </li>
        <li>
          <b>Email: </b>
          {users.email}
        </li>
        <li>
          <b>Phone: </b>
          {users.phone}
        </li>
        <li>
          <NavLink
            to={{
              pathname: "/users/" + users.id + "/posts/page",
              id: users.id,
            }}
          >
            View Post
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
