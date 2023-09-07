const envelopes = document.querySelectorAll(".envelope");

envelopes.forEach((envelope) => {
  envelope.addEventListener("click", () => {
    envelope.classList.toggle("opened");
  });
});

const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.querySelector('.sidebar');

sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});
