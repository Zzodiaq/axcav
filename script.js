document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('loaded');
  });


  let swiper = new Swiper(".wrapper", {
    loop: true,
    autoplay:false,
    // autoplayTimeout: 1000,
    // autoplayHoverPause: true,
    // grabCursor: false,
    centeredSlides: true,
    slidesPerView: "auto"
  });

  var loadingDiv = document.getElementsByClassName('loading');
    
  loadingDiv.style.display = 'block';
  
  setTimeout(function() {
      loadingDiv.style.display = 'none';
  }, 5000); 

// let swiper = new Swiper(".wrapper", {
//     loop: true,
//     autoplay: {
//         delay: 0,
//         pauseOnMouseEnter : true,
//         stopOnLastSlide : false
//     },
//     speed: 1000, 
//     grabCursor: false,
//     centeredSlides: true,
//     slidesPerView: "auto"
// });