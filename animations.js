self-taught-dev-2

Upgrade

Loading...
Bhai le, bana diya. Ek animations.js file bana aur ye poora code usme paste kar de — bas.

Kya add hoga (sirf premium wali cheezein, koi bakwas nahi):

Cinematic entry — page load hote hi black overlay se logo reveal → fade out → content aayega
Hero words stagger — hero heading ke words ek-ek karke smooth slide-up hoke aayenge
Magnetic buttons — primary button ke paas cursor jaayega to button thoda pull hoga (Apple/Linear jaisa)
Cursor glow — desktop pe ek subtle glow cursor ke saath chalega (mobile pe off)
File: animations.js
/* ============================================================
   Sahil Portfolio — Premium Animations (external, no HTML edits)
   Just include: <script src="animations.js" defer></script>
   ============================================================ */
(function () {
  "use strict";

  /* ---------- 1. Inject animation styles ---------- */
  const css = `
    /* Preloader overlay */
    #site-preloader{
      position:fixed;inset:0;z-index:9999;background:#07070a;
      display:flex;align-items:center;justify-content:center;
      transition:opacity .8s ease, visibility .8s ease;
    }
    #site-preloader.hide{opacity:0;visibility:hidden}
    #site-preloader .pl-logo{
      font-family:'Space Grotesk',sans-serif;font-size:1.6rem;font-weight:700;
      color:#e8e8ee;letter-spacing:-.02em;display:flex;align-items:center;gap:12px;
      opacity:0;transform:translateY(10px);
      animation:plIn 1.1s cubic-bezier(.2,.8,.2,1) forwards;
    }
    #site-preloader .pl-dot{
      width:10px;height:10px;border-radius:50%;background:#c6ff3d;
      box-shadow:0 0 18px rgba(198,255,61,.5);
      animation:plPulse 1.2s ease-in-out infinite;
    }
    #site-preloader .pl-bar{
      position:absolute;bottom:0;left:0;height:2px;width:0%;
      background:linear-gradient(90deg,#c6ff3d,#7c5cff);
      animation:plBar 1.6s cubic-bezier(.6,.05,.2,1) forwards;
    }
    @keyframes plIn{to{opacity:1;transform:translateY(0)}}
    @keyframes plPulse{50%{transform:scale(1.4);opacity:.6}}
    @keyframes plBar{to{width:100%}}

    /* Hero word stagger */
    .word-wrap{display:inline-block;overflow:hidden;vertical-align:top;padding:0 .05em}
    .word-inner{display:inline-block;transform:translateY(110%);opacity:0}
    body.loaded .word-inner{
      animation:wordIn .9s cubic-bezier(.2,.8,.2,1) forwards;
    }

    @keyframes wordIn{to{transform:translateY(0);opacity:1}}

    /* Cursor glow (desktop only) */
    #cursor-glow{
      position:fixed;top:0;left:0;width:340px;height:340px;pointer-events:none;
      border-radius:50%;z-index:4;transform:translate(-50%,-50%);
      background:radial-gradient(circle,rgba(198,255,61,.10) 0%,rgba(198,255,61,0) 60%);
      mix-blend-mode:screen;transition:opacity .3s;opacity:0;
    }
    @media(hover:hover) and (pointer:fine){ #cursor-glow.on{opacity:1} }

    /* Magnetic button smooth transform */
    .btn-primary{transition:transform .25s cubic-bezier(.2,.8,.2,1), box-shadow .3s}
  `;
  const styleEl = document.createElement("style");
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  /* ---------- 2. Preloader ---------- */
  const preloader = document.createElement("div");
  preloader.id = "site-preloader";
  preloader.innerHTML = `
    <div class="pl-logo"><span class="pl-dot"></span> Sahyom AI</div>
    <div class="pl-bar"></div>
  `;
  document.body.appendChild(preloader);

  /* ---------- 3. Split hero H1 into animated words ---------- */
  function splitHeroWords() {
    const h1 = document.querySelector(".hero h1");
    if (!h1) return;
    // Split top-level nodes: preserve <span class="accent"> and <br>
    const frag = document.createDocumentFragment();
    let delay = 0;
    const step = 0.06;

    h1.childNodes.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        const words = node.textContent.split(/(\s+)/);
        words.forEach((w) => {
          if (!w.trim()) { frag.appendChild(document.createTextNode(w)); return; }
          const wrap = document.createElement("span");
          wrap.className = "word-wrap";
          const inner = document.createElement("span");
          inner.className = "word-inner";
          inner.style.animationDelay = delay + "s";
          inner.textContent = w;
          wrap.appendChild(inner);
          frag.appendChild(wrap);
          delay += step;
        });
      } else if (node.nodeName === "BR") {
        frag.appendChild(node.cloneNode());
      } else {
        // element like <span class="accent">AI agents</span>
        const wrap = document.createElement("span");
        wrap.className = "word-wrap";
        const inner = document.createElement("span");
        inner.className = "word-inner";
        inner.style.animationDelay = delay + "s";
        // move original element inside inner
        inner.appendChild(node.cloneNode(true));
        wrap.appendChild(inner);
        frag.appendChild(wrap);
        delay += step;
      }
    });

    h1.innerHTML = "";
    h1.appendChild(frag);
  }
  splitHeroWords();

  /* ---------- 4. Boot sequence ---------- */
  window.addEventListener("load", () => {
    setTimeout(() => {
      preloader.classList.add("hide");
      document.body.classList.add("loaded"); // triggers word animations
      setTimeout(() => preloader.remove(), 900);
    }, 1400);
  });

  /* ---------- 5. Cursor glow (desktop only) ---------- */
  const isDesktop = window.matchMedia("(hover:hover) and (pointer:fine)").matches;
  if (isDesktop) {
    const glow = document.createElement("div");
    glow.id = "cursor-glow";
    document.body.appendChild(glow);
    let tx = 0, ty = 0, cx = 0, cy = 0;
    window.addEventListener("mousemove", (e) => {
      tx = e.clientX; ty = e.clientY;
      glow.classList.add("on");
    });
    window.addEventListener("mouseleave", () => glow.classList.remove("on"));
    function loop() {
      cx += (tx - cx) * 0.15;
      cy += (ty - cy) * 0.15;
      glow.style.transform = `translate(${cx}px, ${cy}px) translate(-50%,-50%)`;
      requestAnimationFrame(loop);
    }
    loop();
  }

  /* ---------- 6. Magnetic primary button ---------- */
  if (isDesktop) {
    document.querySelectorAll(".btn-primary").forEach((btn) => {
      btn.addEventListener("mousemove", (e) => {
        const r = btn.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        btn.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
      });
      btn.addEventListener("mouseleave", () => {
        btn.style.transform = "translate(0,0)";
      });
    });
  }
})();
