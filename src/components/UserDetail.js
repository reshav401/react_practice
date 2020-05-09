import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
function UserDetail({match }) {
  useEffect(() => {
    fetchUser();
  });
  const [user, setUser] = useState({
  
  });
  const fetchUser = async () => {
   const fetchUser = await fetch(`https://jsonplaceholder.typicode.com/users/${match.params.id}`);
    const user = await fetchUser.json();
    console.log(user);
    setUser(user);
  };

  return (
    <div>
      {user.name}
    {/* {items.map((item) => (
      <h1>{item.title}</h1>
      ))} */}
    </div>
  );
}

export default UserDetail;
