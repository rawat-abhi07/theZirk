// --- HERO SLIDER ---
const heroImages = document.querySelectorAll(".hero-img");
let heroIndex = 0;

setInterval(() => {
  if(heroImages.length > 0) {
    heroImages[heroIndex].classList.remove("active");
    heroIndex = (heroIndex + 1) % heroImages.length;
    heroImages[heroIndex].classList.add("active");
  }
}, 5000);

// --- AMENITIES SLIDER ---
const amenityImages = document.querySelectorAll(".amenity-img");
let amenityIndex = 0;

setInterval(() => {
  if(amenityImages.length > 0) {
    amenityImages[amenityIndex].classList.remove("active");
    amenityIndex = (amenityIndex + 1) % amenityImages.length;
    amenityImages[amenityIndex].classList.add("active");
  }
}, 3000);

// --- MOBILE MENU ---
const menuBtn = document.getElementById("menuBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

menuBtn.addEventListener("click", () => {
  dropdownMenu.classList.toggle("show");
  // Optional: Change icon or animate if desired
});

// Close menu when a link is clicked
document.querySelectorAll(".dropdown-menu a").forEach(link => {
  link.addEventListener("click", () => {
    dropdownMenu.classList.remove("show");
  });
});

// --- SMOOTH SCROLL ---
function scrollToContact() {
  const section = document.getElementById("contact");
  if(section) {
    const offset = 90; // Adjust for header height
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = section.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
}

// --- WHATSAPP LOGIC ---
function openWhatsApp() {
  window.open(
    "https://api.whatsapp.com/send?phone=917901810050&text=I%20am%20interested%20in%20The%20Zirk.%20Please%20share%20price%20list%20and%20availability.",
    "_blank"
  );
}

// --- FORM HANDLING ---
function showThankYou() {
  // Wait a moment for form to submit to hidden iframe
  setTimeout(() => {
    document.getElementById("thankYouPopup").style.display = "flex";
    const forms = document.querySelectorAll(".contact-form");
    forms.forEach(form => form.reset());
  }, 1000);
}

function closePopup() {
  document.getElementById("thankYouPopup").style.display = "none";
}