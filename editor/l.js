const trace_open = JSON.parse(localStorage.getItem('trace_open')) || [];
const trace_data = JSON.parse(localStorage.getItem('trace_scripts')) || [];
localStorage.setItem('trace_open', JSON.stringify(trace_open));
localStorage.setItem('trace_scripts', JSON.stringify(trace_data));
function trace_update() {
  let html = "<div class='trace_select_plus'><img src='https://run.celeritouus.xct.f5.si/img/editor/plus.svg'><span>トレース拡張機能を読み込む</span></div>"
  for(let i = 0;i<trace_script.lenght;i++){
    let html_mini = "<div class='trace_select' id='trace_select_"+i+"><span"+trace_script[i][0]+"></span><img src='https://run.celeritouus.xct.f5.si/img/editor/h-set.svg' id=trace_set_"+i+"'>"
    html = html + html_mini
  }
}
function l_tab_change(_val_){
  if(_val_==="trace"){
    trace_update()
  }
}
var upd_l_vew = (() => { 
  const target = document.querySelector("#e-lm"); 
  if (!target) return; 

  const views = {
    code: `<div id="view-code">コード画面</div>`, 
    costume: `<div id="view-costume">コスチューム画面</div>`, 
    music: `<div id="view-music">音画面</div>`, 
    trace: `<div id="trace-l"></div><div id="trace-r"></div>`, 
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
      l_tab_change(val);
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
(() => {
    const css = `
        #e-lm {
            background-color: #fff;
            border: 1px solid #00000026;
            border-radius: 0 8px 8px 0;
        }
       #backpack{
background-color: #fff;
border: 1px solid #00000026;
border-radius:0px 8px 0 0;
margin-top:8px;
}
#backpack-h{
  text-align: center;
  padding-bottom:12px;
  border-bottom: 1px solid #00000026;
}
#backpack-co{display:none;
height:80px;}
#backpack-none{margin: auto;}
    `;
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
})();
(() => {
  const div = document.getElementById('backpack');
  div.insertAdjacentHTML('beforeend', '<div id="backpack-co"><div id="backpack-none">バックパックは使用できません。</div></div>');
})();
(() => {
  const triggerDiv = document.getElementById('backpack-h');
  const targetDiv = document.getElementById('backpack-co');

  triggerDiv.addEventListener('click', () => {
    if (targetDiv.style.display === 'none') {
      targetDiv.style.display = 'flex';
    } else {
      targetDiv.style.display = 'none';
    }
  });
})();
pwt.load_n++
