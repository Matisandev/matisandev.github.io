(function () {
  "use strict";

  var nav = document.getElementById("nav");
  var toggle = document.getElementById("navToggle");
  var themeToggle = document.getElementById("themeToggle");
  var langSwitch = document.getElementById("langSwitch");
  var langToggle = document.getElementById("langToggle");
  var langMenu = document.getElementById("langMenu");
  var langCurrent = document.getElementById("langCurrent");
  var i18n = window.SiteI18n;

  function t(text) {
    return i18n ? i18n.t(text) : text;
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    themeToggle.setAttribute("aria-pressed", theme === "light" ? "true" : "false");
    themeToggle.setAttribute(
      "aria-label",
      t(theme === "light" ? "Cambiar a modo oscuro" : "Cambiar a modo claro")
    );
  }

  function closeLangMenu() {
    langMenu.hidden = true;
    langToggle.setAttribute("aria-expanded", "false");
  }

  function setLanguage(lang, persist) {
    i18n.apply(lang);
    if (!persist) return;
    try {
      localStorage.setItem("lang", lang);
    } catch (error) {
      /* almacenamiento no disponible */
    }
    if (/[?&]lang=/.test(window.location.search) && window.history.replaceState) {
      var url = new URL(window.location.href);
      url.searchParams.set("lang", lang);
      window.history.replaceState(null, "", url);
    }
  }

  document.addEventListener("site:languagechange", function (event) {
    var lang = event.detail.lang;
    langCurrent.textContent = lang.toUpperCase();
    langMenu.querySelectorAll("[data-lang]").forEach(function (option) {
      option.setAttribute("aria-checked", option.getAttribute("data-lang") === lang ? "true" : "false");
    });
    applyTheme(document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark");
  });

  if (i18n) {
    var initialLang = i18n.requestedLang();
    if (!initialLang) {
      try {
        initialLang = localStorage.getItem("lang");
      } catch (error) {
        initialLang = null;
      }
    }
    setLanguage(i18n.langs.indexOf(initialLang) === -1 ? "es" : initialLang, false);

    langToggle.addEventListener("click", function () {
      var open = langMenu.hidden;
      langMenu.hidden = !open;
      langToggle.setAttribute("aria-expanded", open ? "true" : "false");
      if (open) langMenu.querySelector('[aria-checked="true"]').focus();
    });

    langMenu.addEventListener("click", function (event) {
      var option = event.target.closest("[data-lang]");
      if (!option) return;
      setLanguage(option.getAttribute("data-lang"), true);
      closeLangMenu();
      langToggle.focus();
    });

    document.addEventListener("click", function (event) {
      if (!langSwitch.contains(event.target)) closeLangMenu();
    });
  } else {
    langSwitch.hidden = true;
  }

  applyTheme(document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark");

  themeToggle.addEventListener("click", function () {
    var next =
      document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
    applyTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch (error) {
      /* almacenamiento no disponible */
    }
  });

  function closeNav() {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  nav.addEventListener("click", function (event) {
    if (event.target.closest("a")) {
      closeNav();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeNav();
      if (!langMenu.hidden) {
        closeLangMenu();
        langToggle.focus();
      }
    }
  });

  var links = Array.prototype.slice.call(nav.querySelectorAll('a[href^="#"]'));
  var sections = links
    .map(function (link) {
      return document.querySelector(link.getAttribute("href"));
    })
    .filter(Boolean);

  if ("IntersectionObserver" in window) {
    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          links.forEach(function (link) {
            link.classList.toggle(
              "is-active",
              link.getAttribute("href") === "#" + entry.target.id
            );
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach(function (section) {
      spy.observe(section);
    });

    var reveals = document.querySelectorAll(".reveal");
    var revealer = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    reveals.forEach(function (element) {
      revealer.observe(element);
    });
  } else {
    document.querySelectorAll(".reveal").forEach(function (element) {
      element.classList.add("is-visible");
    });
  }

  document.getElementById("year").textContent = String(new Date().getFullYear());
})();
