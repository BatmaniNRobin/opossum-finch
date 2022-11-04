import { useState, useEffect } from "react";
import UserSearch from "../components/UserSearch";
import { logout } from "../components/SignIn";
import { Form } from "react-router-dom";

export const BadgeCreationPage = () => {
  return (
    <div className="container" style={{ justifyContent: "left" }}>
      BadgeCreationPage
      <div>
        <button
          className="btn btn-secondary"
          style={{ justifyContent: "right" }}
          onClick={() => logout}
        >
          sign out
        </button>
      </div>
      <form>
        <div>
          <input placeholder="BadgeName"></input>
          <div>
            <input placeholder="username of user"></input>
          </div>
          <div>
            <input placeholder="badge description"></input>
          </div>
          <button className="btn btn-primary">Create Badge</button>
        </div>
      </form>
      <br />
      <UserSearch />
    </div>
  );
};
