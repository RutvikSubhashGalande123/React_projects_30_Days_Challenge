const questions = [
  {
    question: "What is the purpose of the 'defer' attribute in a script tag?",
    options: [
      "It delays the execution of the script until the HTML document has been fully parsed.",
      "It prevents the script from being executed.",
      "It stops the script from loading.",
      "It removes the script from the DOM.",
    ],
    correctAnswer:
      "It delays the execution of the script until the HTML document has been fully parsed.",
  },
  {
    question: "What does the CSS 'box-sizing' property do?",
    options: [
      "It controls how the total width and height of an element are calculated.",
      "It sets the width of the box.",
      "It determines the size of the box's content.",
      "It adjusts the margin of the box.",
    ],
    correctAnswer:
      "It controls how the total width and height of an element are calculated.",
  },
  {
    question:
      "Which method is used to attach an event handler to an element in JavaScript?",
    options: [
      "bindEvent()",
      "addEventListener()",
      "attachEventHandler()",
      "setEvent()",
    ],
    correctAnswer: "addEventListener()",
  },
  {
    question: "What is the use of the 'async' attribute in a script tag?",
    options: [
      "It makes the script run in the background.",
      "It delays the script until the page is fully loaded.",
      "It allows the script to be executed asynchronously as soon as it is available.",
      "It stops the script from being executed.",
    ],
    correctAnswer:
      "It allows the script to be executed asynchronously as soon as it is available.",
  },
  {
    question: "What is the primary purpose of the HTML <canvas> element?",
    options: [
      "To style text.",
      "To create interactive forms.",
      "To embed images.",
      "To draw graphics via JavaScript.",
    ],
    correctAnswer: "To draw graphics via JavaScript.",
  },
  {
    question: "Which HTTP method is used to update an existing resource?",
    options: ["POST", "GET", "PUT", "DELETE"],
    correctAnswer: "PUT",
  },
  {
    question: "What is the role of the 'use strict' directive in JavaScript?",
    options: [
      "It makes JavaScript faster.",
      "It disables all error messages.",
      "It allows the use of deprecated features.",
      "It enables strict mode, which helps in catching common coding mistakes and 'unsafe' actions.",
    ],
    correctAnswer:
      "It enables strict mode, which helps in catching common coding mistakes and 'unsafe' actions.",
  },
  {
    question: "What does the 'viewport' meta tag do?",
    options: [
      "It sets the default language of the page.",
      "It specifies the character encoding.",
      "It provides SEO metadata.",
      "It gives the browser instructions on how to control the page's dimensions and scaling.",
    ],
    correctAnswer:
      "It gives the browser instructions on how to control the page's dimensions and scaling.",
  },
  {
    question: "In CSS Flexbox, what does the 'flex-grow' property do?",
    options: [
      "It sets the initial size of the flex item.",
      "It specifies the direction of the flex items.",
      "It defines the ability for a flex item to grow if necessary.",
      "It determines the flex container's size.",
    ],
    correctAnswer:
      "It defines the ability for a flex item to grow if necessary.",
  },
  {
    question: "What is the purpose of the 'Content-Security-Policy' header?",
    options: [
      "It controls the data format.",
      "It helps prevent cross-site scripting (XSS), clickjacking, and other code injection attacks.",
      "It defines the response time.",
      "It sets the cache policy.",
    ],
    correctAnswer:
      "It helps prevent cross-site scripting (XSS), clickjacking, and other code injection attacks.",
  },
  {
    question: "What does 'localStorage' in web browsers do?",
    options: [
      "It allows you to store data locally with no expiration date.",
      "It caches files for offline use.",
      "It provides a temporary storage mechanism.",
      "It secures data during transit.",
    ],
    correctAnswer:
      "It allows you to store data locally with no expiration date.",
  },
  {
    question: "In HTML5, what is the purpose of the <article> element?",
    options: [
      "It sets up navigation links.",
      "It specifies metadata.",
      "It represents a self-contained composition in a document, page, or site.",
      "It defines the main content of the document.",
    ],
    correctAnswer:
      "It represents a self-contained composition in a document, page, or site.",
  },
  {
    question: "What is a CSS preprocessor?",
    options: [
      "A browser extension for better CSS.",
      "A validator for CSS code.",
      "A tool that lets you use variables, nested rules, and functions in your CSS.",
      "A framework for CSS styling.",
    ],
    correctAnswer:
      "A tool that lets you use variables, nested rules, and functions in your CSS.",
  },
  {
    question: "What is the use of the 'data-' attribute in HTML?",
    options: [
      "To set up database connections.",
      "To manipulate CSS properties.",
      "To define data types.",
      "To store custom data private to the page or application.",
    ],
    correctAnswer: "To store custom data private to the page or application.",
  },
  {
    question: "What is the difference between '==' and '===' in JavaScript?",
    options: [
      "'===' checks for both value and type equality, while '==' checks for value equality only.",
      "'==' is a strict equality and '===' is not.",
      "'==' checks for both value and type equality, while '===' checks for value equality only.",
      "'===' is a strict equality and '==' is not.",
    ],
    correctAnswer:
      "'===' checks for both value and type equality, while '==' checks for value equality only.",
  },
  {
    question: "What is the purpose of 'transitions' in CSS?",
    options: [
      "To create smooth changes between different states of an element.",
      "To set the background color.",
      "To animate elements on the page.",
      "To style text.",
    ],
    correctAnswer:
      "To create smooth changes between different states of an element.",
  },
  {
    question:
      "Which HTTP status code indicates that the requested resource could not be found?",
    options: ["500", "403", "404", "200"],
    correctAnswer: "404",
  },
  {
    question: "What is the use of the 'Promise' object in JavaScript?",
    options: [
      "It manages synchronous operations.",
      "It caches data for later use.",
      "It represents the eventual completion (or failure) of an asynchronous operation and its resulting value.",
      "It validates user input.",
    ],
    correctAnswer:
      "It represents the eventual completion (or failure) of an asynchronous operation and its resulting value.",
  },
  {
    question: "What is the 'grid-template-columns' property in CSS Grid?",
    options: [
      "It sets the grid container's width.",
      "It specifies the gap between columns.",
      "It defines the number and size of columns in a grid layout.",
      "It aligns items in the grid.",
    ],
    correctAnswer:
      "It defines the number and size of columns in a grid layout.",
  },
  {
    question:
      "In web development, what does the term 'Responsive Design' refer to?",
    options: [
      "Designing web pages that look good on all devices and screen sizes.",
      "Using responsive images.",
      "Creating mobile-first designs.",
      "Ensuring high performance.",
    ],
    correctAnswer:
      "Designing web pages that look good on all devices and screen sizes.",
  },
];

export default questions;
