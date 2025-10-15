const nav = document.getElementById("primary-navigation");
const toggle = document.querySelector(".menu-toggle");
const year = document.getElementById("current-year");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (toggle && nav) {
  const closeMenu = () => {
    nav.dataset.open = "false";
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const isOpen = nav.dataset.open === "true";
    nav.dataset.open = String(!isOpen);
    toggle.setAttribute("aria-expanded", String(!isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}

const animatedElements = document.querySelectorAll("[data-animate]");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      threshold: 0.2,
      rootMargin: "0px 0px -10% 0px",
    }
  );

  animatedElements.forEach((el) => observer.observe(el));
} else {
  animatedElements.forEach((el) => el.classList.add("visible"));
}
