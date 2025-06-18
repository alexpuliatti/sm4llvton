document.addEventListener("DOMContentLoaded", () => {
  /* --- Dark Mode Toggle --- */
  const toggleBtn = document.querySelector(".toggle-btn");
  if(toggleBtn) {
    toggleBtn.onclick = function() {
      document.body.classList.toggle("dark-mode");
      document.querySelector(".nav").classList.toggle("dark-mode");
    };
  }

  /* --- BibTeX Copy Button --- */
  const copyBtn = document.querySelector(".bibtex-copy-button");
  if(copyBtn) {
      copyBtn.onclick = function() {
        const bibTexElement = document.querySelector(".bibtex-section pre code");
        if(bibTexElement) {
          navigator.clipboard.writeText(bibTexElement.innerText);
          alert("BibTeX citation copied to clipboard!");
        }
    };
  }

  /* --- Scroll to Top Button --- */
  const scrollUpBtn = document.getElementById("scrollUpBtn");
  if(scrollUpBtn) {
      window.onscroll = function () {
        if ( document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 ) {
          scrollUpBtn.style.display = "block";
        } else {
          scrollUpBtn.style.display = "none";
        }
      };
      scrollUpBtn.onclick = function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
  }
  
  /* --- Intersection Observer for reveal-on-scroll effect --- */
  const revealElements = document.querySelectorAll(".reveal-on-scroll");

  const observerOptions = {
    root: null, // relative to the viewport
    rootMargin: '0px',
    threshold: 0.1 // Trigger when 10% of the element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, observerOptions);

  revealElements.forEach(el => {
    observer.observe(el);
  });
});

// Make functions globally accessible for inline onclick attributes
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  document.querySelector(".nav").classList.toggle("dark-mode");
}

function copyBibTeX() {
  const bibTexElement = document.querySelector(".bibtex-section pre code");
  if(bibTexElement) {
    navigator.clipboard.writeText(bibTexElement.innerText);
    alert("BibTeX citation copied to clipboard!");
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
