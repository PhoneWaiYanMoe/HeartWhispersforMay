// JavaScript to toggle overlay and reveal video
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.querySelector('.sidebar');

sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});
var attempts = 0;

function checkPassword() {
  var passwordInput = document.getElementById("passwordInput").value;
  if (passwordInput === "365366") {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("content").style.display = "block";
    document.body.classList.remove("no-scroll"); // Enable scrolling
    alert("Congratulation! You nailed it.");
  } else {
    alert("Incorrect password. Please try again.");
  }
}
// JavaScript code (script5.js)
document.addEventListener("DOMContentLoaded", function () {
  const loveForm = document.getElementById("loveForm");

  loveForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent the form from submitting

      const selectedValue = document.querySelector('input[name="love"]:checked');

      if (selectedValue) {
          const decision = selectedValue.value;
          if (decision === "yes") {
              alert("Luckiest man alive");
          } else if (decision === "no") {
              alert("I completely understand it. I won't give up.");
          }
          else if (decision === "wait") {
            alert("I respect your decision. I will wait for it no matter how long it takes.");
        }
      } else {
          alert("Please select Yes or No.");
      }
  });
});
