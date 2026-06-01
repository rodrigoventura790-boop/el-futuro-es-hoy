(function () {
  const body = document.body;
  const header = document.querySelector("[data-header]");
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelectorAll(".main-nav a");
  const fallbackImages = document.querySelectorAll("img[data-fallback]");
  const checkoutButtons = document.querySelectorAll("[data-checkout-plan]");
  const checkoutModal = document.querySelector("[data-checkout-modal]");
  const checkoutLink = document.querySelector("[data-checkout-link]");
  const checkoutPlan = document.querySelector("[data-checkout-selected-plan]");
  const checkoutPrice = document.querySelector("[data-checkout-selected-price]");
  const checkoutClosers = document.querySelectorAll("[data-checkout-close]");

  const syncHeader = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };

  toggle?.addEventListener("click", () => {
    const isOpen = body.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      body.classList.remove("nav-open");
      toggle?.setAttribute("aria-expanded", "false");
    });
  });

  fallbackImages.forEach((image) => {
    image.addEventListener(
      "error",
      () => {
        const fallback = image.getAttribute("data-fallback");
        if (fallback && image.getAttribute("src") !== fallback) {
          image.setAttribute("src", fallback);
        }
      },
      { once: true },
    );
  });

  const closeCheckout = () => {
    if (!checkoutModal) return;
    checkoutModal.hidden = true;
    body.classList.remove("modal-open");
  };

  checkoutButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const plan = button.getAttribute("data-checkout-plan") || "Programa";
      const price = button.getAttribute("data-checkout-price") || "Precio a confirmar";
      const url = button.getAttribute("data-checkout-url") || "#contacto";

      if (url.startsWith("#")) {
        document.querySelector(url)?.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      if (checkoutPlan) checkoutPlan.textContent = plan;
      if (checkoutPrice) checkoutPrice.textContent = price;
      if (checkoutLink) checkoutLink.setAttribute("href", url);
      if (checkoutModal) {
        checkoutModal.hidden = false;
        body.classList.add("modal-open");
      }
    });
  });

  checkoutClosers.forEach((closer) => {
    closer.addEventListener("click", closeCheckout);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      body.classList.remove("nav-open");
      toggle?.setAttribute("aria-expanded", "false");
      closeCheckout();
    }
  });

  syncHeader();
  window.addEventListener("scroll", syncHeader, { passive: true });
})();
