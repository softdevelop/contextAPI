import React, { useState } from "react";

import { UserContext } from '../context/usercontext';
import Component2 from './Component2';

const Component1 = () => {
  const [user, setUser] = useState( {username:"Jesse Hall", email: "JesseHall@gmail.com"} );

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user.username}!`}</h1>
      <Component2 user={user} />
    </UserContext.Provider>
  );
}
export default Component1;
