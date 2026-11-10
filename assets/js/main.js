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


  /* ---------- Floating WhatsApp button (every page) -------- */
  (function () {
    if (document.querySelector(".wa-float")) return;
    var msg = encodeURIComponent("Hello Bridgerose Jewels Academy, I would like to ask about admissions.");
    var a = document.createElement("a");
    a.className = "wa-float";
    a.href = "https://wa.me/254701236047?text=" + msg;
    a.target = "_blank";
    a.rel = "noopener";
    a.setAttribute("aria-label", "Chat with Bridgerose Jewels Academy on WhatsApp (0701 236 047)");
    a.innerHTML = '<svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><path fill="currentColor" d="M16.04 3C8.86 3 3.03 8.82 3.03 16c0 2.29.6 4.53 1.74 6.5L3 29l6.68-1.75A12.95 12.95 0 0 0 16.04 29C23.2 29 29 23.18 29 16S23.2 3 16.04 3zm0 23.66c-2 0-3.96-.54-5.67-1.56l-.4-.24-3.97 1.04 1.06-3.86-.26-.4A10.6 10.6 0 0 1 5.4 16c0-5.87 4.77-10.64 10.65-10.64 5.86 0 10.63 4.77 10.63 10.64 0 5.88-4.77 10.66-10.64 10.66zm5.84-7.97c-.32-.16-1.89-.93-2.18-1.04-.3-.1-.5-.16-.72.16-.21.32-.82 1.04-1 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.58-.95-.85-1.6-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.66s1.14 3.08 1.3 3.3c.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.2 2 .12.61-.09 1.89-.77 2.15-1.52.27-.74.27-1.38.19-1.52-.08-.13-.29-.21-.61-.37z"/></svg><span class="wa-label">WhatsApp us</span>';
    document.body.appendChild(a);
  })();

  /* ---------- Footer year ---------------------------------- */
  var yr = document.querySelector("[data-year]");
  if (yr) yr.textContent = new Date().getFullYear();
})();
