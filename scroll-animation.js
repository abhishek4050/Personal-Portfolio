document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth > 1080) {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slide-in");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe .name elements inside secondSection
    document.querySelectorAll(".secondSection .name").forEach((el) => {
      observer.observe(el);
    });

    // Observe all thirdSection elements
    document.querySelectorAll(".thirdSection").forEach((el) => {
      observer.observe(el);
    });
  }
});
