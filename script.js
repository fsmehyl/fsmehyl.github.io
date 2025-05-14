
// Add to your existing JavaScript
function openVideo(videoId) {
    const popup = document.getElementById('video-popup');
    const video = document.getElementById('project-video');
    
    // Set video source based on videoId if you have multiple videos
    // video.src = `videos/${videoId}.mp4`;
    
    popup.style.display = 'flex';
    video.play();
}

function closeVideo() {
    const popup = document.getElementById('video-popup');
    const video = document.getElementById('project-video');
    
    video.pause();
    video.currentTime = 0;
    popup.style.display = 'none';
}

// Close when clicking outside video
document.getElementById('video-popup').onclick = function(e) {
    if (e.target === this) {
        closeVideo();
    }
};
            // Gallery data - add your images here
            const projects = {
                project1: [
                    "images/project1-full1.jpg",
                    "images/project1-full2.jpg",
                    "images/project1-full3.jpg"
                ],
                project2: [
                    "images/project2-full1.jpg",
                    "images/project2-full2.jpg"
                ]
                // Add more projects as needed
            };

            let currentProject = null;
            let currentIndex = 0;

            function openGallery(projectId) {
                currentProject = projectId;
                currentIndex = 0;
                document.getElementById('gallery-image').src = projects[projectId][0];
                document.getElementById('gallery-popup').style.display = 'flex';
            }

            function closeGallery() {
                document.getElementById('gallery-popup').style.display = 'none';
            }

            function changeImage(step) {
                currentIndex += step;
                const images = projects[currentProject];

                // Wrap around if at ends
                if (currentIndex >= images.length) currentIndex = 0;
                if (currentIndex < 0) currentIndex = images.length - 1;

                document.getElementById('gallery-image').src = images[currentIndex];
            }

            // Close when clicking outside image
            window.onclick = function (event) {
                if (event.target == document.getElementById('gallery-popup')) {
                    closeGallery();
                }
            }
            // Enhanced scroll animation trigger
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Scrolling down - slide in
                        entry.target.classList.add('visible');
                        entry.target.classList.remove('hidden');
                    } else {
                        // Scrolling up - slide out
                        entry.target.classList.add('hidden');
                        entry.target.classList.remove('visible');
                    }
                });
            }, { threshold: 0.5 });

            document.querySelectorAll('.experience-card').forEach(card => {
                observer.observe(card);
            });

