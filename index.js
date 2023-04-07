const express = require('express')
const app = express()
const port = 5000;

const USERS = [];

const QUESTIONS = [{
  title: "Two states",
  description: "Given an array , return the maximum of the array?",
  testCases: [{
  input: "[1,2,3,4,5]",
  output: "5"
  }]
  },
  {
  title: "Reverse a string",
  description: "Given a string, return the string in reverse order.",
  testCases: [{
  input: "hello",
  output: "olleh"
  },
  {
  input: "world",
  output: "dlrow"
  }]
  },
  {
  title: "Factorial",
  description: "Given a number, return the factorial of that number.",
  testCases: [{
  input: "5",
  output: "120"
  },
  {
  input: "3",
  output: "6"
  }]
  },
  {
  title: "Fibonacci sequence",
  description: "Given a number, return the Fibonacci sequence up to that number.",
  testCases: [{
  input: "10",
  output: "[0, 1, 1, 2, 3, 5, 8]"
  },
  {
  input: "5",
  output: "[0, 1, 1, 2, 3]"
  }]
  },
  {
  title: "Palindrome",
  description: "Given a string, return true if it is a palindrome and false if it is not.",
  testCases: [{
  input: "racecar",
  output: "true"
  },
  {
  input: "hello",
  output: "false"
  }]
  },
  {
  title: "Sum of multiples",
  description: "Given two numbers, find the sum of all the multiples of the first number up to the second number.",
  testCases: [{
  input: "3, 10",
  output: "18"
  },
  {
  input: "5, 20",
  output: "50"
  }]
  },
  {
  title: "Array reverse",
  description: "Given an array, return the array in reverse order.",
  testCases: [{
  input: "[1, 2, 3, 4, 5]",
  output: "[5, 4, 3, 2, 1]"
  },
  {
  input: "['a', 'b', 'c']",
  output: "['c', 'b', 'a']"
  }]
  },
  {
  title: "Odd or even",
  description: "Given a number, return whether it is odd or even.",
  testCases: [{
  input: "5",
  output: "odd"
  },
  {
  input: "8",
  output: "even"
  }]
  },
  {
  title: "Reverse words",
  description: "Given a sentence, return the sentence with the words in reverse order.",
  testCases: [{
  input: "The quick brown fox",
  output: "fox brown quick The"
  },
  {
  input: "Hello world",
  output: "world Hello"
  }]
  },
  {
  title: "Sum of digits",
  description: "Given a number, return the sum of its digits.",
  testCases: [{
  input: "123",
  output: "6"
  },
  {
  input: "456",
  output: "15"
  }]
  }];


const SUBMISSION = [

]

app.post('/signup', function(req, res) {
  // Add logic to decode body
  // body should have email and password


  //Store email and password (as is for now) in the USERS array above (only if the user with the given email doesnt exist)


  // return back 200 status code to the client
  res.send('Hello World!')
})

app.post('/login', function(req, res) {
  // Add logic to decode body
  // body should have email and password

  // Check if the user with the given email exists in the USERS array
  // Also ensure that the password is the same


  // If the password is the same, return back 200 status code to the client
  // Also send back a token (any random string will do for now)
  // If the password is not the same, return back 401 status code to the client


  res.send('Hello World from route 2!')
})

app.get('/questions', function(req, res) {

  //return the user all the questions in the QUESTIONS array
  res.send("Hello World from route 3!")
})

app.get("/submissions", function(req, res) {
   // return the users submissions for this problem
  res.send("Hello World from route 4!")
});


app.post("/submissions", function(req, res) {
   // let the user submit a problem, randomly accept or reject the solution
   // Store the submission in the SUBMISSION array above
  res.send("Hello World from route 4!")
});

// leaving as hard todos
// Create a route that lets an admin add a new problem
// ensure that only admins can do that.

app.listen(port, function() {
  console.log(`Example app listening on port ${port}`)
})