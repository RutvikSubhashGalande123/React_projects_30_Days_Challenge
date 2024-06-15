import { useState } from "react";
import "./App.css";

function App() {
  const [otp, setOtp] = useState();

  const generate = () => {
    setOtp(Math.floor(10000 + Math.random() * 90000));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-4">OTP Generator</h1>
      <input
        type="text"
        value={otp}
        readOnly
        className="text-center text-6xl font-mono border-2 border-gray-300 rounded-md p-4 mb-4 bg-white shadow-md"
      />
      <button
        onClick={generate}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Generate
      </button>
    </div>
  );
}

export default App;
