import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UserView.css";

export default function () {
  const [user, setUser] = useState();


 // fetch the user data from the API and set the state user
  const getUserData = async () => {
    let url = "https://randomuser.me/api/";
    let response = await axios.get(url);
    setUser(response.data.results[0]);
  };


  useEffect(() => {
    getUserData();
  }, []);


  let fullName = `${user?.name?.title} ${user?.name?.first} ${user?.name?.last}`;

  return (
    <div>
      <h3>Dashboard</h3>
      <div className="container">
        <p>
          <span style={{ color: "rgb(17, 40, 80)" }}>FullName:</span> 
          {fullName}
        </p>
        <p>
          <span style={{ color: "rgb(17, 40, 80)" }}>Email:</span>
          {user?.email}
        </p>
        <button onClick={getUserData}>Refresh</button>
      </div>
    </div>
  );
}
