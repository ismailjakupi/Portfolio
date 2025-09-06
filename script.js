// Smooth scrolling for navigation links
document.querySelectorAll('header a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Project card click functionality - SINGLE IMPLEMENTATION
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card, .current-project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            // Close all other expanded cards
            projectCards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.classList.remove('expanded');
                }
            });
            
            // Toggle current card
            card.classList.toggle('expanded');
        });
    });
    
    // Close expanded cards when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.project-card') && !e.target.closest('.current-project-card')) {
            projectCards.forEach(card => {
                card.classList.remove('expanded');
            });
        }
    });
});