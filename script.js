// smooth scrolling for navigation menu links
const menuLinks = document.querySelectorAll('nav ul li a[href^="#"]');
menuLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    const targetPosition = targetElement.offsetTop;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});

// form submission
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = form.querySelector('#name').value;
  const email = form.querySelector('#email').value;
  const message = form.querySelector('#message').value;
  // TODO: send form data to server and display success message to user
});
