document.addEventListener("DOMContentLoaded", () => {
  const year = document.querySelectorAll("#year");
  year.forEach(el => el.textContent = new Date().getFullYear());

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => nav.classList.toggle("open"));
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));
  }

  const filters = document.querySelectorAll(".filter");
  const products = document.querySelectorAll(".product");
  filters.forEach(filter => {
    filter.addEventListener("click", () => {
      filters.forEach(f => f.classList.remove("active"));
      filter.classList.add("active");
      const category = filter.dataset.filter;
      products.forEach(product => {
        product.style.display = category === "sve" || product.dataset.category === category ? "" : "none";
      });
    });
  });

  const form = document.querySelector("#contactForm");
  const message = document.querySelector("#formMessage");
  if (form && message) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      message.textContent = "Hvala! Poruka je spremna za slanje. Za pravo slanje potrebno je povezati formu sa backendom ili servisom za email.";
      form.reset();
    });
  }
});