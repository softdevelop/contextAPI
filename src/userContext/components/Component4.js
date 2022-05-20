import React, { useContext } from "react";

import {UserContext} from '../context/usercontext';

function Component4() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 4</h1>
      <h2>{`Hello ${user.username} again!`}</h2>
    </>
  );
}

export default Component4;
