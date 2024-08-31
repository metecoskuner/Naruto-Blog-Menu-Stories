document.addEventListener('DOMContentLoaded', () => {
    
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    
    dropdownToggle.addEventListener('mouseenter', () => {
        dropdownMenu.style.display = 'block';
    });
    
    dropdownToggle.addEventListener('mouseleave', () => {
        dropdownMenu.style.display = 'none';
    });

    dropdownMenu.addEventListener('mouseenter', () => {
        dropdownMenu.style.display = 'block';
    });

    dropdownMenu.addEventListener('mouseleave', () => {
        dropdownMenu.style.display = 'none';
    });


    // Modal
    const modal = document.getElementById("myModal");
    const btn = document.getElementById("btn-aboutNaruto");
    const span = document.getElementsByClassName("close")[0];

   
    modal.style.display = "none";

    btn.onclick = function() {
        modal.style.display = "block";
    };
    
    span.onclick = function() {
        modal.style.display = "none";
    };
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    // Sticky Navbar
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        const sticky = navbar.offsetTop;

        function handleScroll() {
            if (window.pageYOffset > sticky) {
                navbar.classList.add('sticky');
            } else {
                navbar.classList.remove('sticky');
            }
        }

        window.addEventListener('scroll', handleScroll);
    }

   
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }    
        
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
        
        setTimeout(showSlides, 5000); 
    }
    
});

document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop(); 
    const navItems = document.querySelectorAll('.nav-item a');

    navItems.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.parentElement.classList.add('active'); 
        }
    });
});