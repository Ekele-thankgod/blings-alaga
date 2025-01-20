// faq-script.js
document.querySelectorAll('.faq-question').forEach((button) => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        const isVisible = answer.style.display === 'block';
        
        // Close all open answers
        document.querySelectorAll('.faq-answer').forEach((ans) => {
            ans.style.display = 'none';
        });

        // Toggle current answer
        answer.style.display = isVisible ? 'none' : 'block';
    });
});


// Select the hamburger button and navbar
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

// Toggle the active class on the navbar
hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
});


