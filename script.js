const students = [
  { id: "STU001", password: "pass123" },
  { id: "STU002", password: "mypassword" },
  { id: "STU003", password: "student03" },
  { id: "STU004", password: "test456" },
  { id: "STU005", password: "hello2025" },
  // Add more students up to 50
];

const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click", () => {
  const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
  togglePassword.textContent = type === "password" ? "👁️" : "🙈";
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = passwordInput.value;

  const found = students.find(student => student.id === username && student.password === password);

  if (found) {
    alert(`Welcome, ${found.id}!`);
    // You can redirect or load a dashboard here
  } else {
    alert("Invalid Student ID or Password.");
  }
});
