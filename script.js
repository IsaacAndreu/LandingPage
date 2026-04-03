const cookieBanner = document.querySelector("#cookie-banner");
const cookieButtons = document.querySelectorAll("[data-cookie-action]");
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const form = document.querySelector("#newsletter-form");
const formMessage = document.querySelector("#form-message");
const revealElements = document.querySelectorAll(".reveal");
const thankYouName = document.querySelector("#thank-you-name");
const COOKIE_KEY = "reservapro-cookie-consent";

function setCookieConsent(consent) {
  localStorage.setItem(COOKIE_KEY, consent);
  if (cookieBanner) {
    cookieBanner.classList.remove("is-visible");
  }
}

function loadCookieConsent() {
  const consent = localStorage.getItem(COOKIE_KEY);
  if (!consent && cookieBanner) {
    cookieBanner.classList.add("is-visible");
  }
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function updateFormMessage(message, type) {
  if (!formMessage) {
    return;
  }

  formMessage.textContent = message;
  formMessage.classList.remove("is-error", "is-success");

  if (type) {
    formMessage.classList.add(type);
  }
}

function validateNewsletterForm() {
  if (!form) {
    return true;
  }

  const name = form.querySelector("#name");
  const email = form.querySelector("#email");
  const businessType = form.querySelector("#business-type");
  const consent = form.querySelector("#consent");

  if (!name.value.trim()) {
    updateFormMessage("Introdueix el nom del negoci.", "is-error");
    name.focus();
    return false;
  }

  if (!validateEmail(email.value.trim())) {
    updateFormMessage("Introdueix un correu electronic valid.", "is-error");
    email.focus();
    return false;
  }

  if (!businessType.value) {
    updateFormMessage("Selecciona el tipus de negoci.", "is-error");
    businessType.focus();
    return false;
  }

  if (!consent.checked) {
    updateFormMessage("Has d'acceptar la politica de privacitat per inscriure't.", "is-error");
    consent.focus();
    return false;
  }

  updateFormMessage("Formulari validat. Si el deploy es fa a Netlify, el registre quedara enviat.", "is-success");
  return true;
}

function setupNewsletterForm() {
  if (!form) {
    return;
  }

  form.addEventListener("submit", (event) => {
    const isValid = validateNewsletterForm();
    if (!isValid) {
      event.preventDefault();
      return;
    }

    sessionStorage.setItem("reservapro-newsletter-name", form.querySelector("#name").value.trim());
  });
}

function setupCookieButtons() {
  cookieButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setCookieConsent(button.dataset.cookieAction);
    });
  });
}

function setupNavigation() {
  if (!navToggle || !navMenu) {
    return;
  }

  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    navMenu.classList.toggle("is-open");
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false");
      navMenu.classList.remove("is-open");
    });
  });
}

function setupRevealAnimations() {
  if (!("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach((element) => observer.observe(element));
}

function hydrateThankYouPage() {
  if (!thankYouName) {
    return;
  }

  const businessName = sessionStorage.getItem("reservapro-newsletter-name");
  if (businessName) {
    thankYouName.textContent = `Negoci registrat: ${businessName}`;
  } else {
    thankYouName.textContent = "Negoci registrat correctament.";
  }
}

loadCookieConsent();
setupCookieButtons();
setupNavigation();
setupNewsletterForm();
setupRevealAnimations();
hydrateThankYouPage();
