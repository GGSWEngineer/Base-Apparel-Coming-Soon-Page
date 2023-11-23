function validateEmail() {
  const emailInput = document.querySelector("#emailInput");
  const errorMessage = document.querySelector(".error-message");
  const iconError = document.querySelector(".icon-error");
  const successMessage = document.querySelector(".success-message");

  if (emailInput.checkValidity()) {
    successMessage.style.display = "block";
    emailInput.classList.remove("error");
  } else {
    errorMessage.style.display = "block";
    iconError.style.display = "block";
    successMessage.style.display = "none";
    emailInput.classList.add("error");
  }
}

document.querySelector(".btn").addEventListener("click", validateEmail)


function checkInputHasEmail() {
  const emailInput = document.querySelector("#emailInput");
  const errorMessage = document.querySelector(".error-message");
  const iconError = document.querySelector(".icon-error");
  if (emailInput.value.trim() !== "") {
    errorMessage.style.display = "none";
    iconError.style.display = "none";
    emailInput.classList.remove("error");
  }
}

document.querySelector("#emailInput").addEventListener("input", checkInputHasEmail)



const image = document.querySelector(".image");

function updateImageSource() {
  if (window.innerWidth > 992) {
    image.src = "images/hero-desktop.jpg";
  } else {
    image.src = "images/hero-mobile.jpg";
  }
}

// Initial update on page load
updateImageSource();

// Update on window resize
window.addEventListener("resize", updateImageSource);