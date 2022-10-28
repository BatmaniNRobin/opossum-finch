import { useState, useEffect } from "react";
import UserSearch from "../components/UserSearch";

export const BadgeCreationPage = () => {
  return (
    <div className="container">
      BadgeCreationPage
      <div>
        <input placeholder="BadgeName"></input>
        <div>
          <input placeholder="username of user"></input>
        </div>
        <button>Create Badge</button>
      </div>
      <br />
      <UserSearch />
    </div>
  );
};
