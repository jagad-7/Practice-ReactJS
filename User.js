import React from "react";
import Users from "./Users";

function User() {
  let user = [
    {
      id: "1",
      name: "jagadeesh",
      age: "20",
      place: "Bangalore",
    },

    {
      id: "2",
      name: "jagad",
      age: "23",
      place: "Chennai",
    },

    {
      id: "3",
      name: "jai",
      age: "24",
      place: "Hyderabad",
    },
  ];

  return (
    <div>
      {user.map((u) => {
        return <Users key={u.id} id={u.id} name={u.name} age={u.age} place={u.place} />;
      })}
    </div>
  );
}
export default User