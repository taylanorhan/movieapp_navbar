document.addEventListener("DOMContentLoaded", function () {
    var videoSrc;
    var videoBtns = document.querySelectorAll('.video-btn');
    videoBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            videoSrc = btn.getAttribute('data-src');
        });
    });

    console.log(videoSrc);

 
    var myModal = document.getElementById('myModal');
    myModal.addEventListener('shown.bs.modal', function (e) {
        
        var videoElement = document.getElementById('video');
        videoElement.src = videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0";
    });

    
    myModal.addEventListener('hide.bs.modal', function (e) {
        
        var videoElement = document.getElementById('video');
        videoElement.src = videoSrc;
    });
});


