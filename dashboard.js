// Dashboard interactivity

// Search functionality
const searchBox = document.querySelector('.search-box');
if (searchBox) {
    searchBox.addEventListener('focus', function() {
        this.placeholder = 'Type to search...';
    });

    searchBox.addEventListener('blur', function() {
        this.placeholder = 'Search or jump to...';
    });

    searchBox.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            console.log('Search for:', this.value);
        }
    });
}

// Quick link interactions
const quickLinks = document.querySelectorAll('.quick-link-card');
quickLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const text = this.querySelector('h3').textContent;
        console.log('Clicked:', text);
    });
});

// Repository card interactions
const repoCards = document.querySelectorAll('.repo-card h4');
repoCards.forEach(card => {
    card.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Opening repository:', this.textContent);
    });
});

// Activity item interactions
const activityItems = document.querySelectorAll('.activity-item');
activityItems.forEach(item => {
    item.addEventListener('click', function() {
        console.log('Activity:', this.querySelector('h4').textContent);
    });
});

// Trending item interactions
const trendingRepos = document.querySelectorAll('.trending-repo');
trendingRepos.forEach(repo => {
    repo.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Opening trending repo:', this.textContent);
    });
});

// New repository button
const newRepoBtn = document.querySelector('.new-repo-btn');
if (newRepoBtn) {
    newRepoBtn.addEventListener('click', function() {
        alert('Create New Repository dialog would open here');
    });
}

// Animate cards on page load
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards and items
document.querySelectorAll('.quick-link-card, .repo-card, .trending-item').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(10px)';
    element.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    observer.observe(element);
});

console.log('Dashboard loaded successfully!');
