import { useState } from "react";

function App() {
   const [password, setPassword] = useState("");
   const [strength, setStrength] = useState("");

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

   return (
     <>
       <h1>Password Validator</h1>
       <input
         type="password"
         onChange={handleChange}
       />
       <p>Password Strengt:{strength}</p>
      
     </>
   );
}

export default App;
