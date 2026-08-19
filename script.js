(() => {
  const body = document.body;
  const main = document.querySelector("main");
  const header = document.querySelector("[data-header]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-nav]");
  const navLinks = [...document.querySelectorAll("[data-nav-link]")];
  const trackedSections = [...document.querySelectorAll("[data-section]")];

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
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    expanded ? closeMenu() : openMenu();
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) closeMenu();
  });

  const revealItems = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.08 },
    );

    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  const navTargetBySection = {
    work: "#work",
    about: "#about",
    timeline: "#timeline",
    contact: "#contact",
  };

  let scrollTicking = false;

  const updateChrome = () => {
    const headerHeight = header?.offsetHeight ?? 72;
    const marker = Math.min(window.innerHeight * 0.32 + headerHeight, window.innerHeight - 1);
    let activeName = "home";

    for (const section of trackedSections) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= marker && rect.bottom > marker) {
        activeName = section.dataset.section || "home";
      }
    }

    const elementAtMarker = document.elementFromPoint(Math.min(20, window.innerWidth - 1), marker);
    const isDark = Boolean(elementAtMarker?.closest(".project--dark"));
    header?.classList.toggle("is-dark", isDark);

    const activeHref = navTargetBySection[activeName];
    navLinks.forEach((link) => {
      const active = Boolean(activeHref && link.getAttribute("href") === activeHref);
      link.classList.toggle("is-active", active);
      if (active) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });

    scrollTicking = false;
  };

  const requestChromeUpdate = () => {
    if (scrollTicking) return;
    scrollTicking = true;
    window.requestAnimationFrame(updateChrome);
  };

  window.addEventListener("scroll", requestChromeUpdate, { passive: true });
  window.addEventListener("resize", requestChromeUpdate);
  window.addEventListener("load", updateChrome);
  updateChrome();

  const architectureDialog = document.querySelector("[data-dialog]");
  const dialogOpen = document.querySelector("[data-dialog-open]");
  const dialogClose = document.querySelector("[data-dialog-close]");

  const closeDialog = () => {
    if (!architectureDialog?.open) return;
    architectureDialog.close();
    body.classList.remove("dialog-open");
    dialogOpen?.focus();
  };

  dialogOpen?.addEventListener("click", () => {
    architectureDialog?.showModal();
    body.classList.add("dialog-open");
  });

  dialogClose?.addEventListener("click", closeDialog);

  architectureDialog?.addEventListener("click", (event) => {
    if (event.target === architectureDialog) closeDialog();
  });

  architectureDialog?.addEventListener("close", () => {
    body.classList.remove("dialog-open");
  });
})();
