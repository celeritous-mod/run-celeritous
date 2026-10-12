(() => {
  const m = document.querySelector('.main');
  if (m) {
    m.insertAdjacentHTML('beforeend', `
<div id="load" style="background-color:#5BAB77;height:100dvh">
<div id="load-block">
<img id="load1" src="https://run.celeritous.xct.f5.si/img/small-block.svg"/>
<img id="load2" src="https://run.celeritous.xct.f5.si/img/big-block.svg"/>
<img id="load3" src="https://run.celeritous.xct.f5.si/img/small-block.svg"/>
<img id="load4" src="https://run.celeritous.xct.f5.si/img/big-block.svg"/></div>
<p id="load-text">データを読み込み中...</p>
<div id="load-progress">
<div id="load-progress-bar"></div></div>
<div id="load-count">0/0</div></div><div id="editor"></div>`);
  }
})();
(() => {
  const s = document.createElement("style");
  s.textContent = `
*{
  font-family:"Helvetica Neue",Arial,
    "Hiragino Kaku Gothic ProN",
    "Hiragino Sans",
    Meiryo,sans-serif;
}
html,body{
  margin:0;
  padding:0;
  overflow: hidden;
}
#load{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:10px;
}
#load-block{
  width:120px;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  gap:0;
}
#load-block img{
  display:block;
}
#load-text{
  margin:20px 0 5px;
  font-size:28px;
  font-weight:bold;
}
#load-progress{
  width:300px;
  height:10px;
  background:#ffffff55;
  border-radius:10px;
  overflow:hidden;
}
#load-progress-bar{
  width:0%;
  height:100%;
  background:#fff;
  border-radius:10px;
}
#load-count{
  font-size:16px;
}
`;
  document.head.append(s);
})();

(() => {
  const m = document.querySelector('#editor');
  if (m) {
    m.insertAdjacentHTML('beforeend', `
<header></header>
<div id="editor-a">
  <div id="editor-l">
    <div id="e-l-header">
      <ul>
        <li id="e-l-h-code"><img src="https://run.celeritous.xct.f5.si/img/editor/l-h-code.svg"><span>コード</span></li>
        <li id="e-l-h-cos"><img src="https://run.celeritous.xct.f5.si/img/editor/l-h-cos.svg"><span>コスチューム</span></li>
        <li id="e-l-h-mus"><img src="https://run.celeritous.xct.f5.si/img/editor/l-h-mus.svg"/><span>音</span></li>
        <li id="e-l-h-tre"><img src="https://run.celeritous.xct.f5.si/img/editor/l-h-tre.svg"/><span>トレース</span></li>
        <li id="e-l-h-ai"><img src="https://run.celeritous.xct.f5.si/img/editor/l-h-ai.svg"/><span>AI</span></li>
      </ul>
    </div>
    <div id="e-lm"></div>
    <div id="backpack"><div id="backpack-h">バックパック</div></div>
  </div>
  <div id="editor-r">
    <div id="stage"></div>
    <div id="sp-ste">
      <div id="r-sp"><div id="r-sp-u"></div><div id="r-sp-d"></div></div>
      <div id="r-ste"><div id="r-ste-h">ステージ</div><div id="r-ste-img"></div><div id="r-ste-n">背景</div><div id="r-ste-co"></div></div>
    </div>
  </div>
</div>`);
  }
})();

-->初期設定
if (typeof progressData === 'undefined') {
  window.progressData = { load: 1, load_n: 0 };
}

document.head.insertAdjacentHTML('beforeend', '<style>#editor{display:none}</style>');
function upb() {
  const b = document.querySelector('#load-progress-bar');
  const c = document.querySelector('#load-count');
  if (!b || !c) return;
  const { load: t, load_n: n } = progressData;
  const p = t > 0 ? (n / t) * 100 : 0;
  c.textContent = `${n}/${t}`;
  b.style.width = `${Math.min(100, Math.max(0, p))}%`;
  if (t > 0 && n === t) {
    document.querySelector('#load').style.display = 'none';
    document.querySelector('#editor').style.display = 'block';
  } else {
    document.querySelector("#load").style.display = "flex";
    document.querySelector("#editor").style.display = "none";
  }
}
const pwt = new Proxy(progressData, {
  set(tgt, prp, val) {
    tgt[prp] = Number(val);
    upb();
    return true;
  }
});
upb();
pwt.load_n=1;
(() => {
  const s = document.createElement("style");
  s.textContent = `
header {
  width:100%;
  height:50px;
  background-color:#5BAB77;
  position: fixed;
  top:0;
  left:0;
}
#editor-l {
  width: calc(100% - 482px);
  height: auto;
}
#editor-a {
  background-color:#E6F0FF;
  flex-grow: 1;
}
#editor-r {
  width: 482px;
  height: auto;
}
`;
  document.head.append(s);
})();
//目標について
//WASMとWebGPUによる高速化
//WASMは動的生成。WebGPUはGPGPUとしての使い方もしたい
-->[[タボワより速く]]が目標!!
