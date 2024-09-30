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

    // Additional adjustments can be added here
}

// Adjust layout on initial load
adjustLayout();

// Add event listener to adjust layout on window resize
window.addEventListener('resize', adjustLayout);
