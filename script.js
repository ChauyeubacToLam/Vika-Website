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
}

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  setMobileMenu(!isOpen);
});

document.querySelectorAll(".mobile-nav a").forEach((link) => {
  link.addEventListener("click", () => setMobileMenu(false));
});

document.querySelectorAll("[data-mobile-accordion]").forEach((button) => {
  const panel = button.nextElementSibling;
  button.addEventListener("click", () => {
    const open = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!open));
    panel?.classList.toggle("is-open", !open);
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
