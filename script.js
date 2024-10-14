// Function to adjust layout based on window size
function adjustLayout() {
    const width = window.innerWidth;
    const experienceJobs = document.querySelectorAll('.job');
    const softwares = document.querySelectorAll('.software');
    
    // Adjust experience section job boxes
    if (width < 480) {
        experienceJobs.forEach(job => {
            job.style.flex = '1 1 100%'; // Stack items vertically
        });
    } else if (width < 768) {
        experienceJobs.forEach(job => {
            job.style.flex = '1 1 calc(50% - 20px)'; // Two boxes per row
        });
    } else {
        experienceJobs.forEach(job => {
            job.style.flex = '1 1 calc(33% - 20px)'; // Three boxes per row
        });
    }

    // Adjust software section boxes
    if (width < 600) {
        softwares.forEach(software => {
            software.style.width = '80px'; // Smaller width for mobile
        });
    } else {
        softwares.forEach(software => {
            software.style.width = '120px'; // Default width
        });
    }
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 50,
            },
        },
    });
    
    // Additional adjustments can be added here
}

// Adjust layout on initial load
adjustLayout();

// Add event listener to adjust layout on window resize
window.addEventListener('resize', adjustLayout);
