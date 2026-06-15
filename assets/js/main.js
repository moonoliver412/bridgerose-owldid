/* =============================================================
   Bridgerose Jewels Academy — main.js
   Nav · mobile menu · scroll reveal · counters · FAQ · marquee
   · tabs · gallery filter + lightbox.  Vanilla JS, no deps.
   ============================================================= */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Nav: shrink on scroll ------------------------ */
  var nav = document.querySelector(".nav");
  function onScroll() {
    if (!nav) return;
    nav.classList.toggle("scrolled", window.scrollY > 40);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------------------------------- */
  var burger = document.querySelector(".nav-burger");
  var overlay = document.querySelector(".nav-overlay");

  function closeMenu() {
    document.body.classList.remove("menu-open");
    if (overlay) {
      overlay.classList.remove("open");
      overlay.setAttribute("aria-hidden", "true");
    }
    if (burger) burger.setAttribute("aria-expanded", "false");
  }
  if (burger && overlay) {
    burger.addEventListener("click", function () {
      var open = document.body.classList.toggle("menu-open");
      overlay.classList.toggle("open", open);
      overlay.setAttribute("aria-hidden", open ? "false" : "true");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    overlay.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeMenu);
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeMenu();
  });

  /* ---------- Mark active nav link ------------------------- */
  var page = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".nav-links a, .nav-overlay a").forEach(function (a) {
    var href = (a.getAttribute("href") || "").toLowerCase();
    if (href === page || (page === "" && href === "index.html")) {
      a.classList.add("active");
    }
  });

  /* ---------- Scroll reveal (staggered) -------------------- */
  var reveals = document.querySelectorAll(".reveal");
  if (reveals.length) {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      reveals.forEach(function (el) { el.classList.add("in"); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          var sibs = Array.prototype.filter.call(
            el.parentElement ? el.parentElement.children : [],
            function (c) { return c.classList.contains("reveal"); }
          );
          var idx = Math.max(0, sibs.indexOf(el));
          el.style.transitionDelay = (idx * 60) + "ms";
          el.classList.add("in");
          io.unobserve(el);
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
      reveals.forEach(function (el) { io.observe(el); });
    }
  }

  /* ---------- Count-up counters ---------------------------- */
  var counters = document.querySelectorAll("[data-count]");
  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }
  function runCounter(el) {
    var target = parseFloat(el.getAttribute("data-count")) || 0;
    var dur = 1400, start = null;
    function frame(ts) {
      if (start === null) start = ts;
      var p = Math.min(1, (ts - start) / dur);
      var val = target * easeOutCubic(p);
      el.textContent = (target % 1 === 0)
        ? Math.round(val).toLocaleString()
        : val.toFixed(1);
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }
  if (counters.length) {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      counters.forEach(function (el) {
        el.textContent = (parseFloat(el.getAttribute("data-count")) || 0).toLocaleString();
      });
    } else {
      var cio = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          runCounter(entry.target);
          cio.unobserve(entry.target);
        });
      }, { threshold: 0.5 });
      counters.forEach(function (el) { cio.observe(el); });
    }
  }

  /* ---------- FAQ accordion -------------------------------- */
  document.querySelectorAll(".faq-item").forEach(function (item) {
    var q = item.querySelector(".faq-q");
    var a = item.querySelector(".faq-a");
    if (!q || !a) return;
    q.setAttribute("aria-expanded", "false");
    q.addEventListener("click", function () {
      var open = item.classList.toggle("open");
      q.setAttribute("aria-expanded", open ? "true" : "false");
      a.style.maxHeight = open ? a.scrollHeight + "px" : 0;
    });
  });

  /* ---------- Marquee: duplicate for seamless loop --------- */
  document.querySelectorAll(".marquee-track").forEach(function (track) {
    track.innerHTML += track.innerHTML;
  });

  /* ---------- Gallery strips: duplicate for seamless loop -- */
  document.querySelectorAll(".gx-track").forEach(function (track) {
    track.innerHTML += track.innerHTML;
  });

  /* ---------- Tabs (academics) ----------------------------- */
  document.querySelectorAll("[data-tabs]").forEach(function (group) {
    var tabs = group.querySelectorAll(".tab");
    var panels = group.querySelectorAll(".tab-panel");
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        var name = tab.getAttribute("data-tab");
        tabs.forEach(function (t) { t.classList.toggle("active", t === tab); });
        panels.forEach(function (p) {
          p.classList.toggle("active", p.getAttribute("data-panel") === name);
        });
      });
    });
  });

  /* ---------- Gallery filter ------------------------------- */
  var filters = document.querySelectorAll(".gallery-filters .tab");
  var items = document.querySelectorAll(".gallery-item");
  filters.forEach(function (f) {
    f.addEventListener("click", function () {
      var cat = f.getAttribute("data-filter");
      filters.forEach(function (x) { x.classList.toggle("active", x === f); });
      items.forEach(function (it) {
        var show = cat === "all" || it.getAttribute("data-cat") === cat;
        it.style.display = show ? "" : "none";
      });
    });
  });

  /* ---------- Gallery lightbox ----------------------------- */
  var lightbox = document.querySelector(".lightbox");
  if (lightbox) {
    var lbImg = lightbox.querySelector("img");
    function openLb(it) {
      var img = it.querySelector("img");
      if (!img) return;
      lbImg.src = img.getAttribute("data-full") || img.src;
      lbImg.alt = img.alt || "";
      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.classList.add("menu-open");
    }
    items.forEach(function (it) {
      it.setAttribute("tabindex", "0");
      it.setAttribute("role", "button");
      it.setAttribute("aria-label", "View photo larger");
      it.addEventListener("click", function () { openLb(it); });
      it.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openLb(it);
        }
      });
    });
    function closeLb() {
      lightbox.classList.remove("open");
      lightbox.setAttribute("aria-hidden", "true");
      document.body.classList.remove("menu-open");
    }
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox || e.target.classList.contains("lightbox-close")) {
        closeLb();
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeLb();
    });
  }

  /* ---------- Footer year ---------------------------------- */
  var yr = document.querySelector("[data-year]");
  if (yr) yr.textContent = new Date().getFullYear();
})();
