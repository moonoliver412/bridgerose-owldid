/* =============================================================
   Bridgerose Jewels Academy — form.js
   Client-side validation, honeypot spam guard, and submission
   for the contact and admissions-inquiry forms.

   >>> SETUP: replace WEB3FORMS_KEY below with a real access key
   from https://web3forms.com  (free, works on GitHub Pages).
   Until then, forms validate but submission is simulated.
   ============================================================= */
(function () {
  "use strict";

  var WEB3FORMS_KEY = "REPLACE_WITH_WEB3FORMS_ACCESS_KEY"; // TODO: set real key
  var ENDPOINT = "https://api.web3forms.com/submit";

  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var PHONE_RE = /^[+()\d][\d\s\-()]{6,}$/;

  function setError(field, msg) {
    field.classList.toggle("invalid", !!msg);
    var box = field.querySelector(".field-error");
    if (box) box.textContent = msg || "";
  }

  function validateField(field) {
    var input = field.querySelector("input, select, textarea");
    if (!input || input.classList.contains("hp-input")) return true;

    var val = (input.value || "").trim();
    var required = input.hasAttribute("required");

    if (required && !val) {
      setError(field, "This field is required.");
      return false;
    }
    if (val && input.type === "email" && !EMAIL_RE.test(val)) {
      setError(field, "Enter a valid email address.");
      return false;
    }
    if (val && input.getAttribute("data-type") === "phone" && !PHONE_RE.test(val)) {
      setError(field, "Enter a valid phone number.");
      return false;
    }
    setError(field, "");
    return true;
  }

  function showNote(form, type, msg) {
    var note = form.querySelector(".form-note");
    if (!note) return;
    note.className = "form-note show " + type;
    note.textContent = msg;
  }

  document.querySelectorAll("form[data-form]").forEach(function (form) {
    var fields = form.querySelectorAll(".field");

    // live re-validation once a field has been flagged
    fields.forEach(function (field) {
      var input = field.querySelector("input, select, textarea");
      if (!input) return;
      input.addEventListener("blur", function () { validateField(field); });
      input.addEventListener("input", function () {
        if (field.classList.contains("invalid")) validateField(field);
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // honeypot — if filled, a bot did it. Fake success, send nothing.
      var hp = form.querySelector(".hp-input");
      if (hp && hp.value) {
        showNote(form, "ok", "Thank you — your message has been sent.");
        form.reset();
        return;
      }

      var ok = true;
      fields.forEach(function (field) {
        if (!validateField(field)) ok = false;
      });
      if (!ok) {
        showNote(form, "err", "Please correct the highlighted fields above.");
        return;
      }

      var btn = form.querySelector("button[type=submit]");
      var label = btn ? btn.textContent : "";
      if (btn) { btn.disabled = true; btn.textContent = "Sending…"; }

      // No key configured yet — simulate so the UI is testable.
      if (WEB3FORMS_KEY === "REPLACE_WITH_WEB3FORMS_ACCESS_KEY") {
        setTimeout(function () {
          showNote(form, "ok",
            "Thank you — your message has been received. " +
            "(Demo mode: add a Web3Forms key in form.js to deliver to email.)");
          form.reset();
          if (btn) { btn.disabled = false; btn.textContent = label; }
        }, 700);
        return;
      }

      var data = new FormData(form);
      data.append("access_key", WEB3FORMS_KEY);
      data.append("subject", form.getAttribute("data-subject") ||
        "New enquiry — Bridgerose Jewels Academy");
      data.append("from_name", "Bridgerose Jewels Academy website");

      fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data
      })
        .then(function (r) { return r.json(); })
        .then(function (res) {
          if (res.success) {
            showNote(form, "ok", "Thank you — your message has been sent. We'll be in touch soon.");
            form.reset();
          } else {
            showNote(form, "err", "Something went wrong. Please call us on 0722 386 854.");
          }
        })
        .catch(function () {
          showNote(form, "err", "Network error. Please call us on 0722 386 854.");
        })
        .finally(function () {
          if (btn) { btn.disabled = false; btn.textContent = label; }
        });
    });
  });
})();
