
function scrollToTop() {
  // Scroll to the top of the page
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scrolling animation
  });
}

var scrollBtn = document.getElementById("scrollBtn");

// Show the button when scrolling down, hide it when scrolling to top
window.onscroll = function() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  scrollBtn.style.display = "block";
} else {
  scrollBtn.style.display = "none";
}
}

const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
  console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
});
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.getElementById('menu-icon');
  const navbarMenu = document.getElementById('navbar-menu');

  menuIcon.addEventListener('click', function () {
    navbarMenu.classList.toggle('show');
  });
});

document.getElementById('ViewProjectSnackpass').addEventListener('click', function() {
  window.location.href = 'Snackpass_Project_Showcase.html'; // Replace with your desired URL
});

document.getElementById('ViewProjectCuriocity').addEventListener('click', function() {
  window.location.href = 'Curiocity_Page.html'; // Replace with your desired URL
});

document.getElementById('ViewProjectEcobear').addEventListener('click', function() {
  window.location.href = 'Ecobear_Project_Showcase.html'; // Replace with your desired URL
});

document.getElementById('ViewProjectPortfolio').addEventListener('click', function() {
  window.location.href = 'Website Page.html'; // Replace with your desired URL
});

