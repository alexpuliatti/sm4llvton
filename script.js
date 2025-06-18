document.addEventListener("DOMContentLoaded", () => {
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
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  revealElements.forEach(el => {
    observer.observe(el);
  });

  /* --- Image Modal Logic --- */
  const modal = document.getElementById("imageModal");
  if(modal) {
    const modalImg = document.getElementById("modalImage");
    const galleryImages = document.querySelectorAll(".image-gallery-grid img");
    const closeModalSpan = document.getElementById("closeModalSpan");

    galleryImages.forEach(img => {
      img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
      }
    });

    if(closeModalSpan) {
      closeModalSpan.onclick = function() {
        modal.style.display = "none";
      }
    }

    modal.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
  }
});

// Make functions globally accessible for inline onclick attributes
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
