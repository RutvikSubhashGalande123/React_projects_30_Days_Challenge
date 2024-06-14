import { useState } from "react";
import "./App.css";
function App() {
   const [password, setPassword] = useState("");
   const [strength, setStrength] = useState("");
   const [showpassword, setShowpassword] = useState(false);

   const validate = (input) => {
     const strongP =
       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
     const mediumP = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;
     if (strongP.test(input)) {
       setStrength("Strong");
     } else if (mediumP.test(input)) {
       setStrength("medium");
     } else {
       setStrength("weak");
     }
   };  

   const handleChange = (e) => {
     setPassword(e.target.value);
     validate(e.target.value);
   };
   const handleClick = () => {
     setShowpassword(!showpassword);
   };

   return (
     <>
       <h1>Password Validator</h1>
       <input
         type={showpassword ? "text" : "password"}
         placeholder="Enter Password"
         value={password}
         name="password"
         id="password"
         className="password"
         onChange={handleChange}
       />
       <button onClick={handleClick}>{showpassword ? "Hide" : "Show"}</button>
       <p>Password Strengt:{strength}</p>
     </>
   );
}

export default App;
