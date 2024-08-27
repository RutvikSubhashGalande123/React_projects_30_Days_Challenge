import React, { useState, useEffect } from "react";
import "./App.css"; // Make sure to import the CSS file

function Home() {
  const sentences = [
    "I will manage my daily tasks.",
    "Prioritize tasks to complete them.",
    "Mark tasks as completed.",
    "Edit or delete tasks in case of urgent emergencies.",
    "Seamlessly manage completed tasks.",
  ];

  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false); 

      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % sentences.length);
        setIsVisible(true); 
      }, 1000); 
    }, 3000); 

    return () => clearInterval(interval);
  }, [sentences.length]);

  return (
    <div className="mx-4 md:mx-10 lg:mx-20 my-5 rounded-xl p-5 bg-violet-300 min-h-screen">
      <h1 className="text-3xl font-bold">Welcome to iTask</h1>
      <p className="mt-4 text-lg">
        Start managing your tasks today and boost your productivity with iTask!
      </p>
      <p className={`mt-4 text-lg ${isVisible ? "fade-enter" : "fade-exit"}`}>
        {sentences[index]}
      </p>
    </div>
  );
}

export default Home;
