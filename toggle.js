const toggleButt = document.querySelector(".toggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  toggleButt.textContent = "☀️";
}

toggleButt.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    toggleButt.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    toggleButt.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});
