const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, key) => {
      if (entry.isIntersecting === true) {
        setTimeout(() => {
          entry.target.classList.add("show");
        }, 150 * key);
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  {
    rootMargin: "50px 50px 50px 50px",
  }
);

const elements = document.querySelectorAll(".animated");

elements.forEach((el) => {
  observer.observe(el);
});
