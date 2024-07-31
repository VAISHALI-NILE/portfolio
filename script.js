document.addEventListener("DOMContentLoaded", function () {
  const projects = document.querySelectorAll(".pr");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    {
      threshold: 0.1, // Adjust this threshold as needed
    }
  );

  projects.forEach((project) => {
    observer.observe(project);
  });

  window.addEventListener("scroll", function () {
    projects.forEach((project) => {
      const img = project.querySelector(".pr-img");
      const curve = project.querySelector(".curve-line");
      if (img && curve) {
        const imgRect = img.getBoundingClientRect();
        curve.style.top = `${imgRect.top + window.scrollY}px`;
        curve.style.left = `${imgRect.left + window.scrollX}px`;
      }
    });
  });
});
