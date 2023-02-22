// Profile IMAGE
//declaring html elements

const imgDiv = document.querySelector(".user-photo-container");
const img = document.querySelector("#photo");
const file = document.querySelector("#file");
const uploadBtn = document.querySelector("#uploadBtn");

// IF user hover on profile div

imgDiv.addEventListener("mouseenter", function () {
  uploadBtn.style.display = "block";
});

// If we hover out from img div
imgDiv.addEventListener("mouseleave", function () {
  uploadBtn.style.display = "none";
});

// Functionality of our btn when we choose a photo yo upload

file.addEventListener("change", function () {
  const choosedFile = this.files[0];

  if (choosedFile) {
    const reader = new FileReader();
    // FileReader is a predefined function of JS

    reader.addEventListener("load", function () {
      img.setAttribute("src", reader.result);
    });

    reader.readAsDataURL(choosedFile);
  }
});
