(() => {
  const root = document.documentElement;
  const body = document.body;
  const main = document.querySelector("main");
  const header = document.querySelector("[data-header]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-nav]");
  const navLinks = [...document.querySelectorAll("[data-nav-link]")];
  const trackedSections = [...document.querySelectorAll("[data-section]")];
  const progress = document.querySelector("[data-scroll-progress]");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  root.classList.add("reveal-ready");

  const closeMenu = () => {
    if (!menuToggle || !nav) return;
    menuToggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
    body.classList.remove("menu-open");
    main?.removeAttribute("inert");
  };

  const openMenu = () => {
    if (!menuToggle || !nav) return;
    menuToggle.setAttribute("aria-expanded", "true");
    nav.classList.add("is-open");
    body.classList.add("menu-open");
    main?.setAttribute("inert", "");
  };

  menuToggle?.addEventListener("click", () => {
    const open = menuToggle.getAttribute("aria-expanded") === "true";
    open ? closeMenu() : openMenu();
  });

  navLinks.forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) closeMenu();
  });

  const revealItems = [...document.querySelectorAll(".reveal")];
  if (reducedMotion.matches || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.08 },
    );
    revealItems.forEach((item) => observer.observe(item));
  }

  const navTargetBySection = {
    work: "#work",
    about: "#about",
    timeline: "#timeline",
    contact: "#contact",
  };

  let framePending = false;
  const updateViewportState = () => {
    const scrollable = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    const ratio = Math.min(Math.max(window.scrollY / scrollable, 0), 1);
    if (progress) progress.style.transform = `scaleX(${ratio})`;
    header?.classList.toggle("is-scrolled", window.scrollY > 18);

    const marker = Math.min(window.innerHeight * 0.36 + (header?.offsetHeight ?? 64), window.innerHeight - 1);
    let activeName = "home";
    for (const section of trackedSections) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= marker && rect.bottom > marker) activeName = section.dataset.section || "home";
    }

    const activeHref = navTargetBySection[activeName];
    navLinks.forEach((link) => {
      const active = Boolean(activeHref && link.getAttribute("href") === activeHref);
      link.classList.toggle("is-active", active);
      if (active) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
    framePending = false;
  };

  const requestViewportUpdate = () => {
    if (framePending) return;
    framePending = true;
    window.requestAnimationFrame(updateViewportState);
  };

  window.addEventListener("scroll", requestViewportUpdate, { passive: true });
  window.addEventListener("resize", requestViewportUpdate);
  window.addEventListener("load", updateViewportState);
  updateViewportState();

  document.querySelectorAll("[data-spotlight]").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
      card.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
    });
  });

  const canTilt = window.matchMedia("(pointer: fine)").matches && !reducedMotion.matches;
  if (canTilt) {
    document.querySelectorAll("[data-tilt]").forEach((target) => {
      target.addEventListener("pointermove", (event) => {
        const rect = target.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        target.style.transform = `perspective(900px) rotateX(${-y * 3.5}deg) rotateY(${x * 4.5}deg) translateY(-2px)`;
      });
      target.addEventListener("pointerleave", () => {
        target.style.transform = "";
      });
    });
  }
})();
