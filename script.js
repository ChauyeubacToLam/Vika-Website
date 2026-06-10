const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileNav = document.querySelector("[data-mobile-nav]");
const megaTriggers = document.querySelectorAll("[data-mega-trigger]");
let activeTrigger = null;
let megaCloseTimer;

function setMobileMenu(open) {
  if (!menuToggle || !mobileNav) return;
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Đóng menu" : "Mở menu");
  mobileNav.classList.toggle("is-open", open);
  document.body.classList.toggle("nav-open", open);

  if (!open) {
    mobileNav.querySelectorAll("[data-mobile-accordion]").forEach((button) => {
      setMobileAccordion(button, false, true);
    });
  }
}

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  setMobileMenu(!isOpen);
});

document.querySelectorAll(".mobile-nav a").forEach((link) => {
  link.addEventListener("click", () => setMobileMenu(false));
});

document.querySelectorAll(".brand").forEach((link) => {
  link.addEventListener("click", () => setMobileMenu(false));
});

function setMobileAccordion(button, open, instant = false) {
  const panel = button.nextElementSibling;
  if (!panel) return;

  cancelAnimationFrame(panel._accordionFrame || 0);
  panel.removeEventListener("transitionend", panel._accordionCleanup || (() => {}));

  const currentHeight = panel.getBoundingClientRect().height;
  panel.style.height = `${currentHeight}px`;
  panel.style.willChange = "height, opacity";

  const finish = (event) => {
    if (event.propertyName !== "height") return;
    panel.style.willChange = "";
    if (open) panel.style.height = "auto";
    panel.removeEventListener("transitionend", finish);
  };
  panel._accordionCleanup = finish;

  if (instant) {
    panel.style.transitionDuration = "1ms";
    button.setAttribute("aria-expanded", String(open));
    panel.style.height = open ? "auto" : "0px";
    panel.style.willChange = "";
    requestAnimationFrame(() => {
      panel.style.transitionDuration = "";
    });
    return;
  }

  panel._accordionFrame = requestAnimationFrame(() => {
    button.setAttribute("aria-expanded", String(open));
    panel.style.height = open ? `${panel.scrollHeight}px` : "0px";
    panel.addEventListener("transitionend", finish);
  });
}

document.querySelectorAll("[data-mobile-accordion]").forEach((button) => {
  button.addEventListener("click", () => {
    const open = button.getAttribute("aria-expanded") === "true";
    setMobileAccordion(button, !open);
  });
});

function setMega(trigger, open) {
  if (!trigger) return;
  const panelId = trigger.getAttribute("data-mega-trigger");
  const panel = document.getElementById(panelId);
  if (!panel) return;

  if (open) {
    if (activeTrigger && activeTrigger !== trigger) {
      setMega(activeTrigger, false);
    }
    activeTrigger = trigger;
    trigger.setAttribute("aria-expanded", "true");
    panel.classList.add("is-open");
  } else {
    trigger.setAttribute("aria-expanded", "false");
    panel.classList.remove("is-open");
    if (activeTrigger === trigger) activeTrigger = null;
  }
}

function scheduleMegaClose(trigger) {
  clearTimeout(megaCloseTimer);
  megaCloseTimer = setTimeout(() => setMega(trigger, false), 120);
}

function keepMegaOpen(trigger) {
  clearTimeout(megaCloseTimer);
  setMega(trigger, true);
}

megaTriggers.forEach(trigger => {
  const panelId = trigger.getAttribute("data-mega-trigger");
  const panel = document.getElementById(panelId);
  if (!panel) return;

  trigger.addEventListener("mouseenter", () => keepMegaOpen(trigger));
  trigger.addEventListener("focus", () => keepMegaOpen(trigger));
  trigger.addEventListener("click", () => {
    const open = trigger.getAttribute("aria-expanded") === "true";
    setMega(trigger, !open);
  });
  trigger.addEventListener("mouseleave", () => scheduleMegaClose(trigger));
  panel.addEventListener("mouseenter", () => keepMegaOpen(trigger));
  panel.addEventListener("mouseleave", () => scheduleMegaClose(trigger));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setMobileMenu(false);
    if (activeTrigger) setMega(activeTrigger, false);
  }
});

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;
  if (!target.closest("[data-mega-panel]") && !target.closest("[data-mega-trigger]")) {
    setMega(false);
  }
});

const revealTargets = document.querySelectorAll("[data-animate]");

function revealVisibleTargets() {
  revealTargets.forEach((target) => {
    const rect = target.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92 && rect.bottom > 0) {
      target.classList.add("is-visible");
    }
  });
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
  );

  revealTargets.forEach((target) => observer.observe(target));
  requestAnimationFrame(revealVisibleTargets);
  window.setTimeout(revealVisibleTargets, 120);
} else {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const id = link.getAttribute("href");
    if (!id || id === "#") return;
    const target = document.querySelector(id);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    history.pushState(null, "", id);
  });
});

document.querySelectorAll("[data-carousel]").forEach((carousel) => {
  const track = carousel.querySelector("[data-carousel-track]");
  const prev = carousel.querySelector("[data-carousel-prev]");
  const next = carousel.querySelector("[data-carousel-next]");
  const dotsWrap = carousel.querySelector("[data-carousel-dots]");
  const slides = Array.from(track?.children || []);

  if (!track || slides.length === 0) return;

  const dots = slides.map((_, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("aria-label", `Đến nhận xét ${index + 1}`);
    dot.addEventListener("click", () => slides[index].scrollIntoView({ behavior: "smooth", inline: "start" }));
    dotsWrap?.appendChild(dot);
    return dot;
  });

  function getActiveIndex() {
    const trackRect = track.getBoundingClientRect();
    let activeIndex = 0;
    let minDistance = Number.POSITIVE_INFINITY;

    slides.forEach((slide, index) => {
      const rect = slide.getBoundingClientRect();
      const distance = Math.abs(rect.left - trackRect.left);
      if (distance < minDistance) {
        minDistance = distance;
        activeIndex = index;
      }
    });

    return activeIndex;
  }

  function updateDots() {
    const activeIndex = getActiveIndex();
    dots.forEach((dot, index) => dot.setAttribute("aria-current", String(index === activeIndex)));
  }

  function scrollBySlide(direction) {
    const slideWidth = slides[0].getBoundingClientRect().width;
    const gap = parseFloat(getComputedStyle(track).columnGap || "0");
    track.scrollBy({ left: direction * (slideWidth + gap), behavior: "smooth" });
  }

  prev?.addEventListener("click", () => scrollBySlide(-1));
  next?.addEventListener("click", () => scrollBySlide(1));
  track.addEventListener("scroll", () => window.requestAnimationFrame(updateDots), { passive: true });
  window.addEventListener("resize", updateDots);
  updateDots();
});

// Modal Handling
const modalTriggers = document.querySelectorAll('[data-modal-trigger]');
const modalCloseBtns = document.querySelectorAll('[data-modal-close]');
const modals = document.querySelectorAll('[data-modal]');

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modal) {
  if (modal) {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

modalTriggers.forEach(trigger => {
  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    const modalId = trigger.getAttribute('data-modal-trigger');
    openModal(modalId);
  });
});

modalCloseBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('[data-modal]');
    closeModal(modal);
  });
});

modals.forEach(modal => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal(modal);
    }
  });
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    modals.forEach(modal => {
      if (modal.classList.contains('is-open')) {
        closeModal(modal);
      }
    });
  }
});

// Banner Carousel
const bannerCarousel = document.querySelector('[data-banner-carousel]');
if (bannerCarousel) {
  const track = bannerCarousel.querySelector('[data-banner-track]');
  const slides = bannerCarousel.querySelectorAll('.banner-slide');
  const prevBtn = bannerCarousel.querySelector('[data-banner-prev]');
  const nextBtn = bannerCarousel.querySelector('[data-banner-next]');
  const dots = bannerCarousel.querySelectorAll('.banner-dot');
  
  let currentSlide = 0;
  let autoPlayInterval;

  function goToSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    currentSlide = index;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlide);
    });
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function prevSlide() {
    goToSlide(currentSlide - 1);
  }

  function startAutoPlay() {
    stopAutoPlay();
    autoPlayInterval = setInterval(nextSlide, 3000);
  }

  function stopAutoPlay() {
    clearInterval(autoPlayInterval);
  }

  prevBtn?.addEventListener('click', () => {
    prevSlide();
    startAutoPlay();
  });

  nextBtn?.addEventListener('click', () => {
    nextSlide();
    startAutoPlay();
  });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      goToSlide(i);
      startAutoPlay();
    });
  });

  bannerCarousel.addEventListener('mouseenter', stopAutoPlay);
  bannerCarousel.addEventListener('mouseleave', startAutoPlay);

  startAutoPlay();
}

// Form Submission to Google Sheets
const experienceForm = document.querySelector('.experience-form');
if (experienceForm) {
  experienceForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = experienceForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Đang gửi...';
    submitBtn.disabled = true;

    const formData = new FormData(experienceForm);
    const data = Object.fromEntries(formData.entries());

    const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbwnFA4HlzmH1irh6h99ygpOd9yUnlnsw6gi0s6bGBDQ6DCRYpVGwQjoyo4tnIzPK2um0Q/exec';

    try {
      await fetch(WEB_APP_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify(data),
      });

      // Assuming success due to no-cors
      submitBtn.textContent = 'Gửi thành công!';
      submitBtn.style.backgroundColor = '#4caf50';
      submitBtn.style.borderColor = '#4caf50';
      submitBtn.style.color = '#fff';
      experienceForm.reset();

      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.style.backgroundColor = '';
        submitBtn.style.borderColor = '';
        submitBtn.style.color = '';
        
        // Close modal
        const modal = document.getElementById('experience-modal');
        if (modal) {
          modal.classList.remove('is-open');
          modal.setAttribute('aria-hidden', 'true');
          document.body.style.overflow = '';
        }
      }, 3000);

    } catch (error) {
      console.error('Lỗi khi gửi form:', error);
      submitBtn.textContent = 'Có lỗi xảy ra, vui lòng thử lại';
      
      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 3000);
    }
  });
}
