const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.querySelector('.sidebar');

// Add event listener to toggle button
sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('active'); // Toggle the 'active' class
});