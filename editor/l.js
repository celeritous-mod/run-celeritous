var upd_l_vew = (() => { 
  const target = document.querySelector("#e-lm"); 
  if (!target) return; 

  const views = { 
    code: `<div id="view-code">コード画面</div>`, 
    costume: `<div id="view-costume">コスチューム画面</div>`, 
    music: `<div id="view-music">音画面</div>`, 
    trace: `<div id="view-trace">トレース画面</div>`, 
    ai: `<div id="view-ai">AI画面</div>` 
  }; 

  const tabs = { 
    "e-l-h-code": "code", 
    "e-l-h-cos": "costume", 
    "e-l-h-mus": "music", 
    "e-l-h-tre": "trace", 
    "e-l-h-ai": "ai" 
  }; 

  const elements = Object.keys(tabs) 
    .map(id => document.getElementById(id)) 
    .filter(Boolean); 
  const style = document.createElement("style"); 
  style.textContent = ` 
    #e-l-header li {
      position: relative;
      height: 36px;
      box-sizing: border-box;
      z-index: 1;
      color: #575E75;
      font-weight:bold;
      font-size:12px;
    } 
    #e-l-header li:not(.active):hover {
      background-color: #E1EAF7;
      color: #575E75;
    } 
    #e-l-header li.active { 
      background-color: #fff; 
      height: 38px; 
      transform: translateY(-2px); 
      z-index: 10; 
      color: #5BAB77;
    } 
    #e-l-header li:not(.active) img { 
      filter: brightness(0) saturate(100%) invert(48%) sepia(0%) saturate(16%) hue-rotate(188deg) brightness(93%) contrast(92%); 
    } 
    #e-l-header li.active img { 
      filter: none; 
    } 
    #e-lm { 
      flex-grow:1; 
    } 
  `; 
  document.head.appendChild(style); 

  const data = { l_vew: null }; 

  const proxy = new Proxy(data, { 
    set(tgt, prop, val) { 
      if (prop !== "l_vew") return false; 
      if (!Object.hasOwn(views, val)) return false; 
      tgt[prop] = val; 
      target.innerHTML = views[val]; 
      elements.forEach(el => { 
        el.classList.toggle("active", tabs[el.id] === val); 
      });  
      return true; 
    } 
  }); 

  elements.forEach(el => { 
    el.addEventListener("click", () => { 
      proxy.l_vew = tabs[el.id]; 
    }); 
  }); 

  proxy.l_vew = "code"; 
  return proxy; 
})();
pwt.load_n++
