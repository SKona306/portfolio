// Business Logic
function scrollAppear() {
  const aboutMeText = document.querySelector(".aboutme-text");
  const aboutMePosition = aboutMeText.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if(aboutMePosition < screenPosition) {
    aboutMeText.classList.add("aboutme-appear");
  };
};

window.addEventListener("scroll" ,scrollAppear);

// User Logic