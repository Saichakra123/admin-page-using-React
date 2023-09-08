import React from 'react';
import { useState } from 'react';
import './admin.css';

export default function Admin() {
   
  
  const [action, setAction] = useState("SignUp");
 

  return (
    <div className="container">

         
       <div className="heading"><h1>{action}</h1></div>

       <input
        type="text"
        id="name"
        className="input"
        placeholder="username"
      />

      <input
        type="email"
        id="password"
        className="input"
        placeholder="password"
      />

     <div className={action==="Login"?"forgot-password":"none"}>
       Lost password ? <span>Click here</span>
     </div>
     
     <div className="submit">
        <div className={action==="SignUp"?"orange":"button"} onClick={()=>{setAction("Login")}}>
            SignUp
        </div>

        <div className={action==="Login"?"orange":"button"} onClick={()=>{setAction("SignUp")}} >
            Login
        </div>
     </div>
  </div>
  );
}
