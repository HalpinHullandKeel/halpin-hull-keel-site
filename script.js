document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const name = (formData.get("name") || "").toString().trim();
      const email = (formData.get("email") || "").toString().trim();
      const message = (formData.get("message") || "").toString().trim();

      const subject = encodeURIComponent(`Quote Request from ${name || "Customer"}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nProject Details:\n${message}`
      );

      window.location.href = `mailto:hello@halpinhullkeel.com?subject=${subject}&body=${body}`;
    });
  }
});
