
self-taught-dev-2

Upgrade

Loading...
Bhai animations.js mein poora purana code delete karke ye naya paste kar — mix mat karna, warna conflict hoga.

Ab ye truly next-level hai. Kya milega:

Cinematic preloader — black screen, big counter 0→100, "SAHIL / SAHYOM AI" text reveal, gradient loading line, phir 3 dark panels sequentially upar slide hoke site reveal karenge (Awwwards-style)
Hero heading — har word 3D rotate hoke niche se aayega
Section titles — scroll pe har character mask ke andar se reveal
Stats counter — scroll pe 0 se number tak count-up (50+, 20+, 100%)
Project images — scroll pe diagonal clip-path se reveal
Custom cursor — dot + ring cursor, buttons pe morph ho jayega
Magnetic buttons + hero parallax
animations.js (poora replace kar de)
/* Sahil Portfolio — Cinematic Animations v2 */
(function () {
  "use strict";

  /* ============ 1. INJECT STYLES ============ */
  const css = `
    /* ---- Preloader ---- */
    #pl{position:fixed;inset:0;z-index:9999;background:#07070a;overflow:hidden;
        display:flex;flex-direction:column;justify-content:space-between;padding:6vw;color:#e8e8ee;
        font-family:'Space Grotesk',sans-serif;}
    #pl.done{pointer-events:none}
    #pl .pl-top{display:flex;justify-content:space-between;align-items:center;
        font-family:'JetBrains Mono',monospace;font-size:.78rem;color:#8a8a99;letter-spacing:.2em;text-transform:uppercase;
        opacity:0;animation:plFade .8s .1s forwards}
    #pl .pl-top .dot{display:inline-block;width:8px;height:8px;border-radius:50%;background:#c6ff3d;
        box-shadow:0 0 12px #c6ff3d;margin-right:10px;animation:plPulse 1.2s infinite}
    #pl .pl-center{display:flex;flex-direction:column;align-items:flex-start;gap:20px}
    #pl .pl-count{font-size:clamp(5rem,18vw,15rem);font-weight:600;line-height:.9;letter-spacing:-.05em;
        color:#e8e8ee;display:flex;align-items:baseline;gap:12px}
    #pl .pl-count .pct{font-size:.35em;color:#8a8a99;font-family:'JetBrains Mono',monospace}
    #pl .pl-name{font-size:clamp(1rem,1.4vw,1.2rem);color:#8a8a99;
        opacity:0;animation:plFade .8s .4s forwards}
    #pl .pl-name b{color:#c6ff3d;font-weight:500}
    #pl .pl-bottom{display:flex;justify-content:space-between;align-items:flex-end;gap:20px;
        font-family:'JetBrains Mono',monospace;font-size:.75rem;color:#8a8a99}
    #pl .pl-line{flex:1;height:1px;background:rgba(255,255,255,.08);position:relative;overflow:hidden;margin:0 20px 6px}
    #pl .pl-line span{position:absolute;left:0;top:0;height:100%;width:0;
        background:linear-gradient(90deg,#c6ff3d,#7c5cff);transition:width .1s linear}
    #pl .pl-status{opacity:0;animation:plFade .8s .2s forwards}
    /* reveal panels */
    #pl-panels{position:fixed;inset:0;z-index:9998;pointer-events:none;display:flex}
    #pl-panels .panel{flex:1;background:#0d0d12;transform:translateY(0);
        transition:transform 1.1s cubic-bezier(.76,0,.24,1)}
    #pl-panels.up .panel{transform:translateY(-101%)}
    #pl-panels.up .panel:nth-child(1){transition-delay:0s}
    #pl-panels.up .panel:nth-child(2){transition-delay:.08s}
    #pl-panels.up .panel:nth-child(3){transition-delay:.16s}
    #pl-panels.up .panel:nth-child(4){transition-delay:.24s}
    @keyframes plFade{to{opacity:1}}
    @keyframes plPulse{50%{transform:scale(1.5);opacity:.5}}

    /* ---- Hero word 3D reveal ---- */
    .w-wrap{display:inline-block;overflow:hidden;vertical-align:top;padding:0 .06em;perspective:800px}
    .w-inner{display:inline-block;transform:translateY(110%) rotateX(-60deg);opacity:0;transform-origin:top center}
    body.loaded .w-inner{animation:wIn 1s cubic-bezier(.2,.8,.2,1) forwards}
    @keyframes wIn{to{transform:translateY(0) rotateX(0);opacity:1}}

    /* ---- Section title char reveal ---- */
    .c-wrap{display:inline-block;overflow:hidden;vertical-align:bottom}
    .c-inner{display:inline-block;transform:translateY(105%);transition:transform 1s cubic-bezier(.2,.8,.2,1)}
    .section-title.in .c-inner{transform:translateY(0)}

    /* ---- Project image mask reveal ---- */
    .project-img{clip-path:polygon(0 0, 0 0, 0 100%, 0 100%);
        transition:clip-path 1.2s cubic-bezier(.76,0,.24,1)}
    .project-card.in .project-img{clip-path:polygon(0 0, 100% 0, 100% 100%, 0 100%)}

    /* ---- Custom cursor ---- */
    #c-dot,#c-ring{position:fixed;top:0;left:0;pointer-events:none;z-index:9997;
        transform:translate(-50%,-50%);border-radius:50%;
        transition:opacity .3s,width .25s,height .25s,background .25s,border-color .25s}
    #c-dot{width:6px;height:6px;background:#c6ff3d;opacity:0}
    #c-ring{width:38px;height:38px;border:1px solid rgba(232,232,238,.35);opacity:0}
    body.cursor-on #c-dot,body.cursor-on #c-ring{opacity:1}
    body.cursor-hover #c-ring{width:60px;height:60px;border-color:#c6ff3d;background:rgba(198,255,61,.06)}
    body.cursor-hover #c-dot{opacity:0}
    @media(hover:none),(pointer:coarse){#c-dot,#c-ring{display:none}}

    /* Magnetic btn smooth */
    .btn-primary{transition:transform .3s cubic-bezier(.2,.8,.2,1),box-shadow .3s}
    .contact-link{transition:transform .3s cubic-bezier(.2,.8,.2,1),border-color .3s,color .3s}

    /* Reduce default reveal opacity gap so it feels tighter */
    body:not(.loaded) .hero .reveal{opacity:1;transform:none}
  `;
  const styleEl = document.createElement("style");
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  /* ============ 2. BUILD PRELOADER ============ */
  const pl = document.createElement("div");
  pl.id = "pl";
  pl.innerHTML = `
    <div class="pl-top">
      <div><span class="dot"></span> SAHYOM AI // BOOT SEQUENCE</div>
      <div>V 1.0</div>
    </div>
    <div class="pl-center">
      <div class="pl-count"><span id="pl-num">00</span><span class="pct">%</span></div>
      <div class="pl-name">SAHIL — <b>Founder, Sahyom AI</b></div>
    </div>
    <div class="pl-bottom">
      <div class="pl-status">Loading assets</div>
      <div class="pl-line"><span id="pl-fill"></span></div>
      <div>© ${new Date().getFullYear()}</div>
    </div>
  `;
  document.body.appendChild(pl);

  const panels = document.createElement("div");
  panels.id = "pl-panels";
  panels.innerHTML = `<div class="panel"></div><div class="panel"></div><div class="panel"></div><div class="panel"></div>`;
  document.body.appendChild(panels);

  /* ============ 3. HERO WORD SPLIT (3D reveal) ============ */
  function splitHeroWords() {
    const h1 = document.querySelector(".hero h1");
    if (!h1 || h1.dataset.split) return;
    h1.dataset.split = "1";
    const frag = document.createDocumentFragment();
    let d = 0;
    h1.childNodes.forEach((node) => {
      if (node.nodeType === 3) {
        node.textContent.split(/(\s+)/).forEach((w) => {
          if (!w.trim()) { frag.appendChild(document.createTextNode(w)); return; }
          const wrap = document.createElement("span"); wrap.className = "w-wrap";
          const inner = document.createElement("span"); inner.className = "w-inner";
          inner.style.animationDelay = d + "s"; inner.textContent = w;
          wrap.appendChild(inner); frag.appendChild(wrap); d += 0.07;
        });
      } else if (node.nodeName === "BR") {
        frag.appendChild(node.cloneNode());
      } else {
        const wrap = document.createElement("span"); wrap.className = "w-wrap";
        const inner = document.createElement("span"); inner.className = "w-inner";
        inner.style.animationDelay = d + "s";
        inner.appendChild(node.cloneNode(true));
        wrap.appendChild(inner); frag.appendChild(wrap); d += 0.07;
      }
    });
    h1.innerHTML = ""; h1.appendChild(frag);
  }
  splitHeroWords();

  /* ============ 4. SECTION TITLE CHAR SPLIT ============ */
  function splitSectionTitles() {
    document.querySelectorAll(".section-title, .contact-wrap h2").forEach((el) => {
      if (el.dataset.split) return; el.dataset.split = "1";
      const walker = (parent) => {
        const kids = Array.from(parent.childNodes);
        kids.forEach((n) => {
          if (n.nodeType === 3) {
            const frag = document.createDocumentFragment();
            n.textContent.split("").forEach((ch, i) => {
              if (ch === " ") { frag.appendChild(document.createTextNode(" ")); return; }
              const w = document.createElement("span"); w.className = "c-wrap";
              const inner = document.createElement("span"); inner.className = "c-inner";
              inner.style.transitionDelay = (i * 0.025) + "s";
              inner.textContent = ch; w.appendChild(inner); frag.appendChild(w);
            });
            n.replaceWith(frag);
          } else if (n.nodeType === 1) walker(n);
        });
      };
      walker(el);
    });
  }
  splitSectionTitles();

  /* ============ 5. PRELOADER PROGRESS ============ */
  const numEl = document.getElementById("pl-num");
  const fillEl = document.getElementById("pl-fill");
  let progress = 0;
  const totalTime = 1800;
  const start = performance.now();
  function tick(now) {
    progress = Math.min(100, ((now - start) / totalTime) * 100);
    numEl.textContent = String(Math.floor(progress)).padStart(2, "0");
    fillEl.style.width = progress + "%";
    if (progress < 100) requestAnimationFrame(tick);
    else finishPreloader();
  }
  requestAnimationFrame(tick);

  function finishPreloader() {
    pl.classList.add("done");
    pl.style.transition = "opacity .5s"; pl.style.opacity = "0";
    setTimeout(() => {
      panels.classList.add("up");
      document.body.classList.add("loaded");
    }, 200);
    setTimeout(() => { pl.remove(); panels.remove(); }, 1800);
  }

  /* ============ 6. SCROLL OBSERVERS ============ */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.2 });
  document.querySelectorAll(".section-title, .contact-wrap h2, .project-card").forEach((el) => io.observe(el));

  /* ============ 7. STAT COUNTERS ============ */
  const counterIO = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const raw = el.textContent.trim();
      const m = raw.match(/(\d+)/); if (!m) { counterIO.unobserve(el); return; }
      const target = parseInt(m[1], 10);
      const suffix = raw.replace(m[1], "");
      const dur = 1400; const t0 = performance.now();
      function run(now) {
        const p = Math.min(1, (now - t0) / dur);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.floor(eased * target) + suffix;
        if (p < 1) requestAnimationFrame(run);
      }
      requestAnimationFrame(run);
      counterIO.unobserve(el);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll(".stat-num").forEach((el) => counterIO.observe(el));

  /* ============ 8. CUSTOM CURSOR (desktop) ============ */
  const isDesktop = window.matchMedia("(hover:hover) and (pointer:fine)").matches;
  if (isDesktop) {
    const dot = document.createElement("div"); dot.id = "c-dot";
    const ring = document.createElement("div"); ring.id = "c-ring";
    document.body.appendChild(dot); document.body.appendChild(ring);
    let mx = 0, my = 0, rx = 0, ry = 0;
    window.addEventListener("mousemove", (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
      document.body.classList.add("cursor-on");
    });
    window.addEventListener("mouseleave", () => document.body.classList.remove("cursor-on"));
    (function loop() {
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
      ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
      requestAnimationFrame(loop);
    })();
    document.querySelectorAll("a, button, .btn, .project-card, .skill-card, .contact-link, .nav-cta")
      .forEach((el) => {
        el.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
        el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
      });

    /* Magnetic buttons */
    document.querySelectorAll(".btn-primary, .contact-link").forEach((btn) => {
      btn.addEventListener("mousemove", (e) => {
        const r = btn.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        btn.style.transform = `translate(${x * 0.2}px, ${y * 0.3}px)`;
      });
      btn.addEventListener("mouseleave", () => { btn.style.transform = "translate(0,0)"; });
    });

    /* Hero parallax */
    const heroContent = document.querySelector(".hero-content");
    if (heroContent) {
      window.addEventListener("scroll", () => {
        const y = window.scrollY;
        if (y < window.innerHeight) {
          heroContent.style.transform = `translateY(${y * 0.15}px)`;
          heroContent.style.opacity = String(1 - y / (window.innerHeight * 0.9));
        }
      }, { passive: true });
    }
  }
})();
