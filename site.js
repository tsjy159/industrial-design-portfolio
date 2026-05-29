const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.16 },
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

const light = document.createElement("div");
light.className = "cursor-light";
document.body.appendChild(light);

window.addEventListener("pointermove", (event) => {
  light.style.left = `${event.clientX}px`;
  light.style.top = `${event.clientY}px`;
});

document.querySelectorAll("[data-parallax]").forEach((el) => {
  window.addEventListener(
    "scroll",
    () => {
      const speed = Number(el.dataset.parallax || 0.06);
      el.style.transform = `translateY(${window.scrollY * speed}px)`;
    },
    { passive: true },
  );
});
