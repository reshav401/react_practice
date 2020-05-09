import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function UserComponent() {
  useEffect(() => {
    fetchUsers();
  }, []);
  const [items, setItems] = useState([]);
  var t0 = performance.now();
  const fetchUsers = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const items = { items: await data.json() };
    console.log(items.items);
    setItems(items.items);
  };
  var t1 = performance.now();
  console.log("Time taken: " + (t1 - t0));

  return (
    <div>
      {items.map((item) => (
        <h1 key={item.id}>
           <Link to={`/userdetail/${item.id}`}>{item.name}</Link> 
            </h1>
      ))}
    </div>
  );
}

export default UserComponent;
