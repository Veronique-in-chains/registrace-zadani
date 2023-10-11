import React, { useState } from "react";

const Registration = () => {

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  }



  return (
    <div className="registration">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          required 
          placeholder="Email Address" 
          id="email" 
          onChange={(e) => user.username === "" ? 
              setUser({...user, email: e.target.value, username: e.target.value.split("@", 1)[0]}) : setUser({...user, email: e.target.value}) 
          } /> <br />
        <input 
          type="text" 
          placeholder="Username" 
          value= {user.username} 
          id="username" 
          onChange={(e) => setUser({...user, username: e.target.value})} 
        /> <br />
        <input 
        type="password" 
        required 
        placeholder="Password" 
        id="password" 
        onChange={(e) => setUser({...user, password: e.target.value})} /> <br />
        <input 
          type="password" 
          required 
          placeholder="Password Confirm" 
          id="passwordConfirm" 
          onChange={(e) => setUser({...user, passwordConfirm: e.target.value})}
        /> <br />
        <button type="submit">REGISTER</button>
      </form>
    </div>
  )
}

export default Registration;