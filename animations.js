/* Sahil Portfolio — Cinematic Animations (universal build) */
(function () {
  "use strict";

  const css = `
    #pl{position:fixed;inset:0;z-index:9999;background:#07070a;overflow:hidden;
      display:flex;flex-direction:column;justify-content:space-between;padding:6vw;color:#e8e8ee;
      font-family:system-ui,-apple-system,'Space Grotesk',sans-serif}
    #pl .pl-top{display:flex;justify-content:space-between;align-items:center;
      font-family:'JetBrains Mono',ui-monospace,monospace;font-size:.72rem;color:#8a8a99;
      letter-spacing:.2em;text-transform:uppercase;opacity:0;animation:plFade .8s .1s forwards}
    #pl .dot{display:inline-block;width:8px;height:8px;border-radius:50%;background:#c6ff3d;
      box-shadow:0 0 12px #c6ff3d;margin-right:10px;animation:plPulse 1.2s infinite}
    #pl .pl-center{display:flex;flex-direction:column;gap:16px}
    #pl .pl-count{font-size:clamp(4.5rem,17vw,14rem);font-weight:600;line-height:.9;
      letter-spacing:-.05em;display:flex;align-items:baseline;gap:12px}
    #pl .pl-count .pct{font-size:.32em;color:#8a8a99;font-family:ui-monospace,monospace}
    #pl .pl-name{font-size:clamp(1rem,1.4vw,1.15rem);color:#8a8a99;opacity:0;
      animation:plFade .8s .4s forwards}
    #pl .pl-name b{color:#c6ff3d;font-weight:500}
    #pl .pl-bottom{display:flex;justify-content:space-between;align-items:flex-end;gap:20px;
      font-family:ui-monospace,monospace;font-size:.72rem;color:#8a8a99}
    #pl .pl-line{flex:1;height:1px;background:rgba(255,255,255,.08);position:relative;
      overflow:hidden;margin:0 20px 6px}
    #pl .pl-line span{position:absolute;left:0;top:0;height:100%;width:0;
      background:linear-gradient(90deg,#c6ff3d,#7c5cff);transition:width .1s linear}
    #pl-panels{position:fixed;inset:0;z-index:9998;pointer-events:none;display:flex}
    #pl-panels .panel{flex:1;background:#0d0d12;transform:translateY(0);
      transition:transform 1.1s cubic-bezier(.76,0,.24,1)}
    #pl-panels.up .panel{transform:translateY(-101%)}
    #pl-panels.up .panel:nth-child(2){transition-delay:.08s}
    #pl-panels.up .panel:nth-child(3){transition-delay:.16s}
    #pl-panels.up .panel:nth-child(4){transition-delay:.24s}
    @keyframes plFade{to{opacity:1}}
    @keyframes plPulse{50%{transform:scale(1.5);opacity:.5}}

    .w-wrap{display:inline-block;overflow:hidden;vertical-align:top;padding:0 .06em;perspective:800px}
    .w-inner{display:inline-block;transform:translateY(110%) rotateX(-60deg);opacity:0;transform-origin:top center}
    body.pl-done .w-inner{animation:wIn 1s cubic-bezier(.2,.8,.2,1) forwards}
    @keyframes wIn{to{transform:translateY(0) rotateX(0);opacity:1}}

    .c-wrap{display:inline-block;overflow:hidden;vertical-align:bottom;line-height:1.1}
    .c-inner{display:inline-block;transform:translateY(105%);transition:transform 1s cubic-bezier(.2,.8,.2,1)}
    .anim-in .c-inner{transform:translateY(0)}

    [data-img-reveal]{clip-path:polygon(0 0,0 0,0 100%,0 100%);
      transition:clip-path 1.2s cubic-bezier(.76,0,.24,1)}
    [data-img-reveal].anim-in{clip-path:polygon(0 0,100% 0,100% 100%,0 100%)}

    #c-dot,#c-ring{position:fixed;top:0;left:0;pointer-events:none;z-index:9997;
      transform:translate(-50%,-50%);border-radius:50%;
      transition:opacity .3s,width .25s,height .25s,border-color .25s,background .25s}
    #c-dot{width:6px;height:6px;background:#c6ff3d;opacity:0}
    #c-ring{width:38px;height:38px;border:1px solid rgba(232,232,238,.35);opacity:0}
    body.cursor-on #c-dot,body.cursor-on #c-ring{opacity:1}
    body.cursor-hover #c-ring{width:60px;height:60px;border-color:#c6ff3d;background:rgba(198,255,61,.06)}
    body.cursor-hover #c-dot{opacity:0}
    @media(hover:none),(pointer:coarse){#c-dot,#c-ring{display:none!important}}

    .btn,.btn-primary,.btn-outline{transition:transform .3s cubic-bezier(.2,.8,.2,1)!important}
  `;
  const s = document.createElement("style"); s.textContent = css; document.head.appendChild(s);

  /* Preloader */
  const pl = document.createElement("div");
  pl.id = "pl";
  pl.innerHTML = `
    <div class="pl-top"><div><span class="dot"></span> SAHYOM AI // BOOT SEQUENCE</div><div>V 1.0</div></div>
    <div class="pl-center">
      <div class="pl-count"><span id="pl-num">00</span><span class="pct">%</span></div>
      <div class="pl-name">SAHIL — <b>Founder, Sahyom AI</b></div>
    </div>
    <div class="pl-bottom">
      <div>Loading assets</div>
      <div class="pl-line"><span id="pl-fill"></span></div>
      <div>© ${new Date().getFullYear()}</div>
    </div>`;
  document.body.appendChild(pl);

  const panels = document.createElement("div");
  panels.id = "pl-panels";
  panels.innerHTML = `<div class="panel"></div><div class="panel"></div><div class="panel"></div><div class="panel"></div>`;
  document.body.appendChild(panels);

  /* Universal selectors — works with any HTML */
  const HERO_H1 = document.querySelector(".hero h1, header h1, section:first-of-type h1, h1");
  const TITLES = document.querySelectorAll(".sec-title, .section-title, h2");
  const STATS = document.querySelectorAll(".stat .n, .stat-num, [data-count]");
  const IMAGES = document.querySelectorAll(".project-img img, .project-card img, .about-img img");
  const BUTTONS = document.querySelectorAll(".btn-primary, .btn, .contact-line, a.btn");

  /* Split hero H1 into 3D words */
  if (HERO_H1 && !HERO_H1.dataset.split) {
    HERO_H1.dataset.split = "1";
    const frag = document.createDocumentFragment();
    let d = 0;
    HERO_H1.childNodes.forEach((node) => {
      if (node.nodeType === 3) {
        node.textContent.split(/(\s+)/).forEach((w) => {
          if (!w.trim()) { frag.appendChild(document.createTextNode(w)); return; }
          const wr = document.createElement("span"); wr.className = "w-wrap";
          const inr = document.createElement("span"); inr.className = "w-inner";
          inr.style.animationDelay = d + "s"; inr.textContent = w;
          wr.appendChild(inr); frag.appendChild(wr); d += 0.07;
        });
      } else if (node.nodeName === "BR") frag.appendChild(node.cloneNode());
      else {
        const wr = document.createElement("span"); wr.className = "w-wrap";
        const inr = document.createElement("span"); inr.className = "w-inner";
        inr.style.animationDelay = d + "s";
        inr.appendChild(node.cloneNode(true));
        wr.appendChild(inr); frag.appendChild(wr); d += 0.07;
      }
    });
    HERO_H1.innerHTML = ""; HERO_H1.appendChild(frag);
  }

  /* Split section titles into chars */
  TITLES.forEach((el) => {
    if (el === HERO_H1 || el.dataset.split) return;
    el.dataset.split = "1";
    const walk = (p) => {
      Array.from(p.childNodes).forEach((n) => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          n.textContent.split("").forEach((ch, i) => {
            if (ch === " ") { frag.appendChild(document.createTextNode(" ")); return; }
            const w = document.createElement("span"); w.className = "c-wrap";
            const inr = document.createElement("span"); inr.className = "c-inner";
            inr.style.transitionDelay = (i * 0.025) + "s"; inr.textContent = ch;
            w.appendChild(inr); frag.appendChild(w);
          });
          n.replaceWith(frag);
        } else if (n.nodeType === 1) walk(n);
      });
    };
    walk(el);
  });

  /* Mark images for reveal */
  IMAGES.forEach((img) => img.setAttribute("data-img-reveal", ""));

  /* Preloader progress */
  const num = document.getElementById("pl-num");
  const fill = document.getElementById("pl-fill");
  const t0 = performance.now(), DUR = 1800;
  function tick(now) {
    const p = Math.min(100, ((now - t0) / DUR) * 100);
    num.textContent = String(Math.floor(p)).padStart(2, "0");
    fill.style.width = p + "%";
    if (p < 100) requestAnimationFrame(tick); else done();
  }
  requestAnimationFrame(tick);

  function done() {
    pl.style.transition = "opacity .5s"; pl.style.opacity = "0";
    setTimeout(() => {
      panels.classList.add("up");
      document.body.classList.add("pl-done");
    }, 200);
    setTimeout(() => { pl.remove(); panels.remove(); }, 1800);
  }

  /* Scroll observer */
  const io = new IntersectionObserver((es) => {
    es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("anim-in"); io.unobserve(e.target); } });
  }, { threshold: 0.2 });
  TITLES.forEach((el) => io.observe(el));
  IMAGES.forEach((el) => io.observe(el));

  /* Counters */
  const ci = new IntersectionObserver((es) => {
    es.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target, raw = el.textContent.trim();
      const m = raw.match(/(\d+)/); if (!m) { ci.unobserve(el); return; }
      const target = +m[1], suffix = raw.replace(m[1], ""), s0 = performance.now();
      (function run(now) {
        const p = Math.min(1, (now - s0) / 1400);
        el.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * target) + suffix;
        if (p < 1) requestAnimationFrame(run);
      })(performance.now());
      ci.unobserve(el);
    });
  }, { threshold: 0.5 });
  STATS.forEach((el) => ci.observe(el));

  /* Cursor + magnetic (desktop) */
  if (matchMedia("(hover:hover) and (pointer:fine)").matches) {
    const dot = document.createElement("div"); dot.id = "c-dot";
    const ring = document.createElement("div"); ring.id = "c-ring";
    document.body.append(dot, ring);
    let mx = 0, my = 0, rx = 0, ry = 0;
    addEventListener("mousemove", (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
      document.body.classList.add("cursor-on");
    });
    addEventListener("mouseleave", () => document.body.classList.remove("cursor-on"));
    (function loop() {
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
      ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
      requestAnimationFrame(loop);
    })();
    document.querySelectorAll("a,button,.btn,.project-card,.skill-chip,.skill-card,.contact-line")
      .forEach((el) => {
        el.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
        el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
      });
    BUTTONS.forEach((btn) => {
      btn.addEventListener("mousemove", (e) => {
        const r = btn.getBoundingClientRect();
        btn.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.2}px,${(e.clientY - r.top - r.height / 2) * 0.3}px)`;
      });
      btn.addEventListener("mouseleave", () => btn.style.transform = "translate(0,0)");
    });
  }
})();
