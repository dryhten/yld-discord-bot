/**
 * Questions from the interwebz about javascript
 */
module.exports = [
  {
    question: "Inside which HTML element do we put JavaScript code?",
    answers: ["<script>", "script"],
    asked: false
  },
  {
    question:
      "How can you get a HTML element with id='foo' in JavaScript, using document?",
    answers: [
      "document.getelementbyid('foo')",
      'document.getelementbyid("foo")'
    ],
    asked: false
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js' in a HTML file?",
    answers: ["<script src='xxx.js'>", '<script src="xxx.js">'],
    asked: false
  },
  {
    question:
      "The external JavaScript file must contain the <script> tag. True/false?",
    answers: ["false"],
    asked: false
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    answers: ["alert('hello world')", 'alert("hello world")'],
    asked: false
  },
  {
    question: "How do you declare a function named myFunction in JavaScript?",
    answers: ["function myfunction()"],
    asked: false
  },
  {
    question: "How do you call a function named 'myFunction'?",
    answers: ["myfunction()"],
    asked: false
  },
  {
    question:
      "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
    answers: ["if (i != 5)", "if (i !== 5)"],
    asked: false
  },
  {
    question:
      "How can you add the following comment in JavaScript: 'this is a comment'?",
    answers: ["//this is a comment", "/* this is a comment */"],
    asked: false
  },
  {
    question: "How do you round the number 7.25, to the nearest integer?",
    answers: ["math.round(7.25)"],
    asked: false
  },
  {
    question: "How do you find the number with the highest value of x and y?",
    answers: ["math.max(x, y)"],
    asked: false
  },
  {
    question: "How do you open a new window in JavaScript on the frontend?",
    answers: ["window.open"],
    asked: false
  },
  {
    question: "JavaScript is the same as Java. True/false?",
    answers: ["false"],
    asked: false
  },
  {
    question: "How can you detect the client's browser name on frontend?",
    answers: ["navigator.appname"],
    asked: false
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    answers: ["onclick"],
    asked: false
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    answers: ["onclick"],
    asked: false
  },
  {
    question: "How do you declare a JavaScript variable called x?",
    answers: ["var x", "let x", "const x"],
    asked: false
  },
  {
    question: "What will the following code return: Boolean(10 > 9)",
    answers: ["true"],
    asked: false
  },
  {
    question: "Is JavaScript case-sensitive? Yes/no",
    answers: ["yes"],
    asked: false
  },
  {
    question:
      `What will the following function return?\n` +
      `function foo() {\n` +
      `return\n` +
      `{ bar: 'hello' };\n` +
      `}\n`,
    answers: ["undefined"],
    asked: false
  },
  {
    question: "What is NaN's type?",
    answers: ["number"],
    asked: false
  },
  {
    question: "What will the following code print? console.log(0.1 + 0.2)",
    answers: ["0.30000000000000004"],
    asked: false
  },
  {
    question:
      "What will the following code print? console.log(0.1 + 0.2 == 0.3)",
    answers: ["false"],
    asked: false
  },
  {
    question:
      "What will the following code print? console.log('1 && 2 = '+(1 && 2))",
    answers: ["1 && 2 = 2"],
    asked: false
  }
];
