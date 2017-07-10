$(document).ready(function(){
  // fullpage customization
  $('#fullpage').fullpage({
    // sectionsColor: ['', '#348899', '#F2AE72', '#5C832F', '#B8B89F'],
    sectionSelector: '.vertical-scrolling',
    slideSelector: '.horizontal-scrolling',
    // navigation: true,
    slidesNavigation: false,
    css3: true,
    controlArrows: false,
    anchors: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10' ],
    // menu: '#menu',

  });

  // Based on nextIndex function
  // onLeave: function(index, nextIndex, direction){
  // // var leavingSection = $(this);
  //
  //   if(nextIndex == 2 && direction ==="down"){
  //
  //
  //   } else if(nextIndex == 1 && direction == "up") {
  //
  //
  //   }
  // }

  //Fullscreen
  var requestFullscreen = function(ele) {
    if (ele.requestFullscreen) {
      ele.requestFullscreen();
    } else if (ele.webkitRequestFullscreen) {
      ele.webkitRequestFullscreen();
    } else if (ele.mozRequestFullScreen) {
      ele.mozRequestFullScreen();
    } else if (ele.msRequestFullscreen) {
      ele.msRequestFullscreen();
    } else {
      console.log('Fullscreen API is not supported.');
    }
  };

  var exitFullscreen = function() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else {
      console.log('Fullscreen API is not supported.');
    }
  };

  var fsDocButton = document.getElementById('fs-doc-button');
  var fsExitDocButton = document.getElementById('fs-exit-doc-button');

  fsDocButton.addEventListener('click', function(e) {
    e.preventDefault();
    requestFullscreen(document.documentElement);
  });

  fsExitDocButton.addEventListener('click', function(e) {
    e.preventDefault();
    exitFullscreen();
  });
});


