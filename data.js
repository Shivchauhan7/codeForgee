// This file just holds sample data.
// Later this will come from a real database/backend.

let problems = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    topic: "Arrays",
    solved: true,
    description: "Given an array of numbers and a target, return the indices of the two numbers that add up to the target.",
    exampleInput: "[2, 7, 11, 15], target = 9",
    exampleOutput: "[0, 1]"
  },
  {
    id: 2,
    title: "Reverse a String",
    difficulty: "Easy",
    topic: "Strings",
    solved: true,
    description: "Write a function that reverses a string given as input.",
    exampleInput: '"hello"',
    exampleOutput: '"olleh"'
  },
  {
    id: 3,
    title: "Valid Parentheses",
    difficulty: "Medium",
    topic: "Stack",
    solved: false,
    description: "Given a string with brackets, check whether the brackets are balanced and in the correct order.",
    exampleInput: '"({[]})"',
    exampleOutput: "true"
  },
  {
    id: 4,
    title: "Climbing Stairs",
    difficulty: "Easy",
    topic: "Dynamic Programming",
    solved: false,
    description: "You are climbing a staircase with n steps. You can climb 1 or 2 steps at a time. Count how many distinct ways you can reach the top.",
    exampleInput: "n = 3",
    exampleOutput: "3"
  },
  {
    id: 5,
    title: "Merge Two Sorted Lists",
    difficulty: "Medium",
    topic: "Linked List",
    solved: false,
    description: "Merge two sorted linked lists and return it as one sorted list.",
    exampleInput: "list1 = [1,2,4], list2 = [1,3,4]",
    exampleOutput: "[1,1,2,3,4,4]"
  },
  {
    id: 6,
    title: "Maximum Subarray",
    difficulty: "Medium",
    topic: "Arrays",
    solved: false,
    description: "Find the contiguous subarray with the largest sum and return that sum.",
    exampleInput: "[-2,1,-3,4,-1,2,1,-5,4]",
    exampleOutput: "6"
  },
  {
    id: 7,
    title: "Word Break",
    difficulty: "Hard",
    topic: "Dynamic Programming",
    solved: false,
    description: "Given a string and a dictionary of words, determine if the string can be split into a sequence of dictionary words.",
    exampleInput: 's = "leetcode", wordDict = ["leet","code"]',
    exampleOutput: "true"
  },
  {
    id: 8,
    title: "Course Schedule",
    difficulty: "Hard",
    topic: "Graphs",
    solved: false,
    description: "Given course prerequisites, determine if it's possible to finish all courses without a cycle in the requirements.",
    exampleInput: "numCourses = 2, prerequisites = [[1,0]]",
    exampleOutput: "true"
  }
];

// Starter code templates shown in the editor for each language
let starterCode = {
  javascript: "function solve(input) {\n  // write your code here\n}",
  python: "def solve(input):\n    # write your code here\n    pass",
  java: "class Solution {\n    public void solve() {\n        // write your code here\n    }\n}",
  cpp: "void solve() {\n    // write your code here\n}"
};

// Sample leaderboard data
let leaderboard = [
  { username: "alex_chen", solved: 92, score: 4300 },
  { username: "priya_codes", solved: 85, score: 3950 },
  { username: "maverick", solved: 78, score: 3600 },
  { username: "rohan_k", solved: 25, score: 320 },
  { username: "sara_dev", solved: 20, score: 280 }
];