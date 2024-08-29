import { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };

  const onSubmit = async (data) => {
    await delay(4);

    try {
      let response = await fetch("http://localhost:3000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      let res = await response.json();
      console.log(data, res);

      if (data.userName === "Shubham" && data.password === "admin@123") {
        alert("Login Successful");
      } else {
        setError("root", { message: "Invalid credentials" });
      }
    } catch (error) {
      setError("root", { message: "Something went wrong" });
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      {isSubmitting && <p>Loading...</p>}
      <div className="container">
        <h1>React Form</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="UserName"
            type="text"
            {...register("userName", {
              required: "Username is required",
              minLength: {
                value: 3,
                message: "Username must be at least 3 characters long",
              },
              maxLength: {
                value: 10,
                message: "Username must not exceed 10 characters",
              },
            })}
          />
          {errors.userName && (
            <p className="error-msg">{errors.userName.message}</p>
          )}
          <br />
          <input
            placeholder="Password"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
            })}
          />
          {errors.password && (
            <p className="error-msg">{errors.password.message}</p>
          )}
          <br />
          <input
            disabled={isSubmitting}
            type="submit"
            value="Submit"
          />
          {errors.root && <p className="error-msg">{errors.root.message}</p>}
        </form>
      </div>
    </>
  );
}

export default App;
