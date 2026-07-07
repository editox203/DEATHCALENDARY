(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let am = arguments; if (!C.Cal.q) { C.Cal.q = []; } p(C.Cal, am); }; let js = d.createElement(A); js.async = 1; js.src = L; let s = d.getElementsByTagName(A)[0]; s.parentNode.insertBefore(js, s); })(window, "script", "https://cal.com/embed/embed.js");

Cal("init", { origin: "https://cal.com" });

Cal("inline", {
  elementOrSelector: "#booking-calendar",
  calLink: "ediitou-el-vio-l8hw6c/the-motor-death",
  config: { 
      theme: "dark", 
      ui: {
          styles: {
              body: { background: "#121212" },
              primaryColor: "#8b0000"
          }
      }
  }
});