
<script src="https://cdn.jsdelivr.net/npm/theme-change@2.0.2/index.js"></script>

// Add this to your existing JavaScript code

// Function to set the theme
function setTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
  
  // Check for saved theme preference or use the system preference
  const savedTheme = localStorage.getItem('theme');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const theme = savedTheme || systemTheme;
  
  // Set initial theme
  setTheme(theme);
  
  // Update checkbox state
  document.getElementById('theme-toggle').checked = theme === 'dark';
  
  // Theme toggle switch event listener
  document.getElementById('theme-toggle').addEventListener('change', function() {
    const newTheme = this.checked ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  });
  
  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    const newTheme = e.matches ? 'dark' : 'light';
    setTheme(newTheme);
    document.getElementById('theme-toggle').checked = e.matches;
  });
// Mobile menu toggle
const emSelect= document.getElementById('em');
document.getElementById('menu-toggle').addEventListener('click', function () {
    // var mobileMenu = document.getElementById('mobile-menu');
    emTagSelect.classList.toggle('dark');
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Navbar animation
gsap.to("nav", {
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "+=100",
        scrub: true
    },
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    height: "60px",
});

// Header text animation
gsap.from("header h1, header p, header a", {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
    ease: "power3.out"
});

// About section animation
gsap.from("#about img", {
    scrollTrigger: {
        trigger: "#about",
        start: "top center"
    },
    opacity: 0,
    scale: 0.8,
    duration: 1,
    ease: "back.out(1.7)"
});

gsap.from("#about p, #about a", {
    scrollTrigger: {
        trigger: "#about",
        start: "top center"
    },
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
    ease: "power3.out"
});

// Skills section animation
gsap.from(".skill-card", {
    scrollTrigger: {
        trigger: "#skills",
        start: "top center"
    },
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
    ease: "power3.out"
});

// Projects section animation
gsap.from(".project-card", {
    scrollTrigger: {
        trigger: "#projects",
        start: "top center"
    },
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
    ease: "power3.out"
});

// Activities section animation
gsap.from("#activities div", {
    scrollTrigger: {
        trigger: "#activities",
        start: "top center"
    },
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
    ease: "power3.out"
});

// Certifications section animation
gsap.from("#certifications div", {
    scrollTrigger: {
        trigger: "#certifications",
        start: "top center"
    },
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
    ease: "power3.out"
});

// Education section animation
gsap.from("#education div", {
    scrollTrigger: {
        trigger: "#education",
        start: "top center"
    },
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
    ease: "power3.out"
});

// Contact form animation
gsap.from("#contact form", {
    scrollTrigger: {
        trigger: "#contact",
        start: "top center"
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out"
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        gsap.to(window, { duration: 1, scrollTo: target, ease: "power3.inOut" });
    });
});

// Project card hover effect
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, { scale: 1.05, duration: 0.3, ease: "power3.out" });
    });
    card.addEventListener('mouseleave', () => {
        gsap.to(card, { scale: 1, duration: 0.3, ease: "power3.out" });
    });
});

// Form submission handling (you would typically send this data to a server)
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you would typically send the form data to a server
    console.log("Form submitted with:", { name, email, message });

    // Clear the form
    this.reset();

    // Show a success message
    alert("Thank you for your message! I'll get back to you soon.");
});
document.getElementById('theme-toggle').addEventListener('change', function () {
    if (this.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  });
  
  // Check if user has a preferred theme and apply it

  
// Ensure "Contact Me" and "View My Work" buttons work
document.querySelectorAll('.interactive-button').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); // Remove the '#'
        const target = document.getElementById(targetId);
        gsap.to(window, { duration: 1, scrollTo: target, ease: "power3.inOut" });
    });
});

