document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('universal-mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    
    mobileMenuButton.addEventListener('click', function() {
        this.setAttribute('aria-expanded', this.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
        navMenu.classList.toggle('active');
        this.classList.toggle('active');
    });
    
    // Profile dropdown functionality
    const profileDropdown = document.querySelector('.universal-nav-dropdown');
    
    // Desktop hover behavior
    if (window.innerWidth > 992) {
        profileDropdown.addEventListener('mouseenter', function() {
            this.querySelector('.universal-dropdown-menu').style.opacity = '1';
            this.querySelector('.universal-dropdown-menu').style.visibility = 'visible';
            this.querySelector('.universal-dropdown-menu').style.transform = 'translateY(0)';
        });
        
        profileDropdown.addEventListener('mouseleave', function() {
            this.querySelector('.universal-dropdown-menu').style.opacity = '0';
            this.querySelector('.universal-dropdown-menu').style.visibility = 'hidden';
            this.querySelector('.universal-dropdown-menu').style.transform = 'translateY(10px)';
        });
    }
    
    // Mobile click behavior
    if (window.innerWidth <= 992) {
        profileDropdown.addEventListener('click', function(e) {
            e.preventDefault();
            this.classList.toggle('open');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.universal-nav-link:not(.universal-nav-dropdown .universal-nav-link)');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 992) {
                navMenu.classList.remove('active');
                mobileMenuButton.setAttribute('aria-expanded', 'false');
                mobileMenuButton.classList.remove('active');
            }
        });
    });
    
    // Navbar scroll effect
    const navbar = document.querySelector('.universal-nav');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Initialize navbar state
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    }
    
    // Update dropdown behavior on window resize
    window.addEventListener('resize', function() {
        const dropdown = profileDropdown.querySelector('.universal-dropdown-menu');
        
        if (window.innerWidth > 992) {
            // Desktop - reset mobile behavior
            profileDropdown.classList.remove('open');
            dropdown.style.display = '';
        } else {
            // Mobile - reset desktop behavior
            dropdown.style.opacity = '';
            dropdown.style.visibility = '';
            dropdown.style.transform = '';
        }
    });
});