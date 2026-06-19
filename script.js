// Keeps track of which problem is currently open in the editor
let currentProblemId = null;

// ========== Page switching ==========
function showPage(pageId) {
  // hide all pages
  let allPages = document.querySelectorAll(".page");
  for (let i = 0; i < allPages.length; i++) {
    allPages[i].classList.remove("active");
  }

  // show the one we want
  document.getElementById(pageId).classList.add("active");

  // update active nav button (only problems/leaderboard/profile have nav buttons)
  let navButtons = document.querySelectorAll(".nav-btn");
  for (let i = 0; i < navButtons.length; i++) {
    navButtons[i].classList.remove("active");
  }
  if (pageId === "problems" || pageId === "leaderboard" || pageId === "profile") {
    let activeBtn = document.querySelector(".nav-btn[onclick*=\"" + pageId + "\"]");
    if (activeBtn) activeBtn.classList.add("active");
  }

  // refresh data shown on these pages every time we open them
  if (pageId === "leaderboard") renderLeaderboard();
  if (pageId === "profile") renderProfile();
}

// ========== Problems list page ==========
function renderProblems() {
  let searchText = document.getElementById("searchBox").value.toLowerCase();
  let difficulty = document.getElementById("difficultyFilter").value;

  let tableBody = document.getElementById("problemTableBody");
  tableBody.innerHTML = "";

  for (let i = 0; i < problems.length; i++) {
    let p = problems[i];

    // skip problems that don't match search box
    if (!p.title.toLowerCase().includes(searchText)) continue;

    // skip problems that don't match difficulty filter
    if (difficulty !== "all" && p.difficulty !== difficulty) continue;

    let row = document.createElement("tr");
    row.onclick = function () { openProblem(p.id); };

    row.innerHTML =
      "<td>" + (p.solved ? "<span class='solved-icon'>&#10003;</span>" : "-") + "</td>" +
      "<td>" + p.title + "</td>" +
      "<td><span class='badge badge-" + p.difficulty + "'>" + p.difficulty + "</span></td>" +
      "<td>" + p.topic + "</td>";

    tableBody.appendChild(row);
  }
}

// ========== Editor page ==========
function openProblem(id) {
  currentProblemId = id;

  // find the problem with this id
  let problem = null;
  for (let i = 0; i < problems.length; i++) {
    if (problems[i].id === id) problem = problems[i];
  }
  if (!problem) return;

  document.getElementById("editorTitle").textContent = problem.title;

  let diffBadge = document.getElementById("editorDifficulty");
  diffBadge.textContent = problem.difficulty;
  diffBadge.className = "badge badge-" + problem.difficulty;

  document.getElementById("editorDescription").textContent = problem.description;
  document.getElementById("exampleInput").textContent = problem.exampleInput;
  document.getElementById("exampleOutput").textContent = problem.exampleOutput;

  // load starter code for whichever language is selected
  let language = document.getElementById("languageSelect").value;
  document.getElementById("codeArea").value = starterCode[language];

  // clear old output
  document.getElementById("outputResult").innerHTML = "Click \"Run\" to test your code.";
  document.getElementById("outputResult").className = "";

  showPage("editor");
}

// when student changes language, swap in the matching starter code
document.getElementById("languageSelect").addEventListener("change", function () {
  let language = this.value;
  document.getElementById("codeArea").value = starterCode[language];
});

// ========== Run / Submit (no real backend yet, just a demo result) ==========
function runCode() {
  let code = document.getElementById("codeArea").value.trim();
  let outputBox = document.getElementById("outputResult");

  if (code === "") {
    outputBox.textContent = "Please write some code first.";
    outputBox.className = "output-fail";
    return;
  }

  outputBox.textContent = "Running test cases...";
  outputBox.className = "";

  // fake a short delay like a real judge would take
  setTimeout(function () {
    outputBox.textContent = "Sample test case passed. (This is a demo result, real backend coming soon)";
    outputBox.className = "output-pass";
  }, 800);
}

function submitCode() {
  let code = document.getElementById("codeArea").value.trim();
  let outputBox = document.getElementById("outputResult");

  if (code === "") {
    outputBox.textContent = "Please write some code before submitting.";
    outputBox.className = "output-fail";
    return;
  }

  outputBox.textContent = "Submitting...";
  outputBox.className = "";

  setTimeout(function () {
    // mark this problem as solved
    for (let i = 0; i < problems.length; i++) {
      if (problems[i].id === currentProblemId) {
        problems[i].solved = true;
      }
    }
    outputBox.textContent = "Accepted! All test cases passed. (Demo result, real backend coming soon)";
    outputBox.className = "output-pass";
  }, 800);
}

// ========== Leaderboard page ==========
function renderLeaderboard() {
  let tableBody = document.getElementById("leaderboardTableBody");
  tableBody.innerHTML = "";

  for (let i = 0; i < leaderboard.length; i++) {
    let user = leaderboard[i];
    let rank = i + 1;
    let rowClass = "";
    if (rank === 1) rowClass = "rank-1";
    if (rank === 2) rowClass = "rank-2";
    if (rank === 3) rowClass = "rank-3";

    let row = document.createElement("tr");
    row.innerHTML =
      "<td class='" + rowClass + "'>#" + rank + "</td>" +
      "<td>" + user.username + "</td>" +
      "<td>" + user.solved + "</td>" +
      "<td>" + user.score + "</td>";

    tableBody.appendChild(row);
  }
}

// ========== Profile page ==========
function renderProfile() {
  let solvedProblems = problems.filter(function (p) { return p.solved; });

  document.getElementById("solvedCount").textContent = solvedProblems.length;

  let list = document.getElementById("solvedList");
  list.innerHTML = "";

  if (solvedProblems.length === 0) {
    list.innerHTML = "<li>No problems solved yet. Go solve one!</li>";
    return;
  }

  for (let i = 0; i < solvedProblems.length; i++) {
    let p = solvedProblems[i];
    let item = document.createElement("li");
    item.innerHTML = "<span>" + p.title + "</span><span class='badge badge-" + p.difficulty + "'>" + p.difficulty + "</span>";
    list.appendChild(item);
  }
}

// ========== Run once when the page first loads ==========
renderProblems();