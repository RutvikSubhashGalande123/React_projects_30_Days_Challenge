import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState({});
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState("0");
  

  const apiKey = "p6lDdzbasBEbUQJWXzKNqo6ezpp0DMyk";

  useEffect(() => {
    // Fetch the list of available currencies and their rates
    axios
      .get(`https://api.exchangerate.host/latest?base=${from}`, {
        headers: { apiKey: "p6lDdzbasBEbUQJWXzKNqo6ezpp0DMyk" },
        redirect: "follow",
      })
      .then((response) => {
        console.log(response);
        setRate(response.data.rates);
      })
      .catch((error) => {
        console.error("There was an error making the request:", error);
      });
  }, [from]);

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleConvert = () => {
    if (rate[to]) {
      setConvertedAmount((amount * rate[to]).toFixed(2));
    }
  };

  return (
    <div className="CurrencyConverter">
      <h2>Currency Converter</h2>
      <div>
        <label htmlFor="amount">
          Amount:
          <input
            type="number"
            name="amount"
            value={amount}
            onChange={handleAmount}
          />
        </label>
        <br />
        <label htmlFor="from">
          From:
          <select
            name="from"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          >
            {Object.keys(rate).map((key) => (
              <option
                key={key}
                value={key}
              >
                {key}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label htmlFor="to">
          To:
          <select
            name="to"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          >
            {Object.keys(rate).map((key) => (
              <option
                key={key}
                value={key}
              >
                {key}
              </option>
            ))}
          </select>
        </label>
      </div>
      <button onClick={handleConvert}>Convert</button>
      <div>
        {convertedAmount !== "0" && (
          <p>
            {amount} {from} = {convertedAmount} {to}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
