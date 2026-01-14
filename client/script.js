// Hero Slider
const images = document.querySelectorAll(".hero-img");
let index = 0;

setInterval(() => {
  images[index].classList.remove("active");
  index = (index + 1) % images.length;
  images[index].classList.add("active");
}, 5000);

// Amenities Slider
const amenityImages = document.querySelectorAll(".amenity-img");
let aIndex = 0;

setInterval(() => {
  amenityImages[aIndex].classList.remove("active");
  aIndex = (aIndex + 1) % amenityImages.length;
  amenityImages[aIndex].classList.add("active");
}, 2000);

// Menu Toggle
const menuBtn = document.getElementById("menuBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

menuBtn.addEventListener("click", () => {
  dropdownMenu.classList.toggle("show");
});
function scrollToContact() {
  const section = document.getElementById("contact");
  const nameInput = document.getElementById("nameInput");
  const offset = 64;

  const y = section.getBoundingClientRect().top + window.pageYOffset - offset;

  window.scrollTo({ top: y, behavior: "smooth" });

  setTimeout(() => {
    if (nameInput) {
      nameInput.focus();
    }
  }, 600);
}

function openWhatsApp() {
  window.open(
    "https://api.whatsapp.com/send?phone=917901810050&text=Can%20I%20know%20more%20about%20The%20Zirk%20project%3F",
    "_blank"
  );
}




function showThankYou() {
  setTimeout(() => {
    document.getElementById("thankYouPopup").style.display = "flex";
     const forms = document.querySelectorAll(".contact-form");
    forms.forEach(form => form.reset());
  }, 500);
}

function closePopup() {
  document.getElementById("thankYouPopup").style.display = "none";
}



