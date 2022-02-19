import React, { useState } from "react";
import userContext from "./usercontext";



const UserState = (props) => {
  const [auth, setauth] = useState("")
  const [user, setuser] = useState("")

  return (
    <userContext.Provider value={{ auth, setauth, user }}>
      {props.children}
    </userContext.Provider>
  )
}

export default UserState;