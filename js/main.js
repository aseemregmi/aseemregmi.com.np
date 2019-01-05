window.onscroll = function() {
  actionOnScroll();
};

let topNav = document.querySelector('.topnav');
let toTop = document.querySelector('#to-top-button div');
let pixelsScrolled = 100;

let contentInMidHeader = document.querySelector('.overlay').innerHTML;
let aboutMeContainer = document.querySelector('#about-me-container');



window.addEventListener('click', function(e) {
  if (e.target == aboutMeContainer) {
    aboutMeContainer.style.display = 'none';
  }
});

aboutMeCloseButton.addEventListener('click', function() {
  aboutMeContainer.style.display = 'none';
});

aboutMeNavButton.addEventListener('click', function() {
  aboutMeContainer.style.display = 'flex';
});

function actionOnScroll() {
  if (window.pageYOffset >= pixelsScrolled) {
    toTop.style.display = 'flex';
    topNav.style.opacity = '.5';
  } else {
    toTop.style.display = 'none';
    topNav.style.opacity = '1.0';
  }
}

// Nav Bar OnClick Event

document
  .querySelector('#nav-trig-button-on')
  .addEventListener('click', function() {
    document.querySelector('#nav-bar').style.display = 'flex';
    document.querySelector('#nav-trig-button-on').style.display = 'none';
    document.querySelector('#nav-trig-button-off').style.display = 'flex';
  });

document
  .querySelector('#nav-trig-button-off')
  .addEventListener('click', function() {
    document.querySelector('#nav-bar').style.display = 'none';
    document.querySelector('#nav-trig-button-on').style.display = 'flex';
    document.querySelector('#nav-trig-button-off').style.display = 'none';
  });
