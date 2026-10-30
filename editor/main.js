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
  height:100dvh;
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
<header>
  <a href="/"><div id="h-logo"><img src="/img/all_logo.svg"></div></a>
  <div id="h-set"><img src="https://run.celeritous.xct.f5.si/img/editor/h-set.svg">
  <span>設定</span><img src="https://run.celeritous.xct.f5.si/img/editor/h-drop.svg"></div>
  <div id="h-file"><img src="https://run.celeritous.xct.f5.si/img/editor/h-file.svg">
  <span>ファイル</span><img src="https://run.celeritous.xct.f5.si/img/editor/h-drop.svg"></div>
  <div id="h-hens"><img src="https://run.celeritous.xct.f5.si/img/editor/h-hens.svg">
  <span>編集</span><img src="https://run.celeritous.xct.f5.si/img/editor/h-drop.svg"></div>
  <div id="h-tensen"></div>
  <div id="h-input"><input type="text" id="title-input" placeholder="プロジェクトのタイトル" value="プロジェクト"></input></div>
  <div id="h-pro"><img src="https://run.celeritous.xct.f5.si/img/editor/h-pro.svg"><span>プロジェクトページを見る</span></div>
</header>
<div id="editor-a">
  <div id="editor-l">
    <div id="e-l-header">
      <ul>
        <li id="e-l-h-code"><img src="https://run.celeritous.xct.f5.si/img/editor/l-h-code.svg"><span>コード</span></li>
        <li id="e-l-h-cos"><img src="https://run.celeritous.xct.f5.si/img/editor/l-h-cos.svg"><span>コスチューム</span></li>
        <li id="e-l-h-mus"><img src="https://run.celeritous.xct.f5.si/img/editor/l-h-mus.svg"><span>音</span></li>
        <li id="e-l-h-tre"><img src="https://run.celeritous.xct.f5.si/img/editor/l-h-tre.svg"><span>トレース</span></li>
        <li id="e-l-h-ai"><img src="https://run.celeritous.xct.f5.si/img/editor/l-h-ai.svg"><span>AI</span></li>
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
#editor {
  display: flex;
  flex-direction: column;
  height: 100dvh;
  box-sizing: border-box;
}
#h-set:hover, 
#h-file:hover, 
#h-hens:hover, 
#h-pro:hover {
  background-color: #4a9462;
}
header {
  width: 100%;
  height: 50px;
  background-color: #5BAB77;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
header a,
#h-set,
#h-file,
#h-hens,
#h-input,
#h-pro {
  display: flex;
  align-items: center;
}
#h-set, #h-file, #h-hens, #h-pro {
  cursor: pointer;
  color: white;
  font-weight: bold;
  height:100%;
  display: flex;
  align-items: center;
  padding: 0 4px;
}
#h-logo img {
  width:124px;
  height:30px;
  margin-left:20px;
  padding:0 15px;
}
#editor-a {
  display: flex;
  background-color: #E6F0FF;
  flex-grow: 1;
  height: calc(100dvh - 50px);
  overflow: hidden;
}
#editor-l {
  width: calc(100% - 482px);
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 6px;
  padding-right: 8px;
}
#editor-r {
  width: 482px;
  height: 100%;
  flex-shrink: 0;
}
#e-l-header {
  height:36px;
}
#e-l-header ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  color:#575E75;
  height:36px;
}
#e-l-header li {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 15px 15px;
  cursor: pointer;
  background-color:#D9E3F2;
  border-style: solid;
  border-color: #00000026;
  border-width: 1px 1px 0 1px;
  border-radius: 16px 16px 0 0;
  margin-right: -6px;
}
#e-l-header img {
  width: 20px;
  height: 20px;
}
`;
  document.head.append(s);
})();
(()=>{
  const d = document;
  const m = {
    '#h-set': '<div class="d-m"><div class="d-i">言語</div><div class="d-i">レイアウト</div></div>',
    '#h-file': '<div class="d-m"><div class="d-i">新規</div><div class="d-i">コンピューターから読み込む</div><div class="d-i">コンピューターに保存する</div><div class="d-i">プロジェクトをパッケージ化する</div><div class="d-i">復元ポイント</div></div>',
    '#h-hens': '<div class="d-m"><div class="d-i">ターボモード切り替え</div><div class="d-i">高度な設定</div><div class="d-i">アドオン</div><div class="d-i">ユーザー名を変える</div><div class="d-i">クラウド変数設定</div></div>'
  };
  const s = d.createElement('style');
  s.textContent = `
#h-set,
#h-file,
#h-hens {
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
}
#h-set .d-m,
#h-file .d-m,
#h-hens .d-m {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  margin: 0;
  padding: 3px 0;
  min-width: 190px;
  width: max-content;
  max-width: 320px;
  box-sizing: border-box;
  background-color: #5BAB77;
  color: #fff;
  border: none;
  border-radius: 0 0 6px 6px;
  box-shadow: 0 4px 12px #00000020;
  font-size: 14px;
  font-weight: bold;
  z-index: 99999;
}
#h-set.open .d-m,
#h-file.open .d-m,
#h-hens.open .d-m {
  display: block;
}
.d-i {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  min-height: 35px;
  padding: 7px 16px;
  white-space: nowrap;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
}
.d-i:hover {
  background-color: #4a9462;
}
#h-set.open,
#h-file.open,
#h-hens.open {
  background-color: #5BAB77;
}
  `;
  d.head.append(s);
  Object.entries(m).forEach(([k, v]) => {
    const t = d.querySelector(k);
    if (t) t.insertAdjacentHTML('beforeend', v);
  });
})();
(() => {
  const triggers = ['#h-set', '#h-file', '#h-hens']
    .map(sel => document.querySelector(sel))
    .filter(Boolean);
  const closeAll = (except = null) => {
    triggers.forEach(t => {
      if (t !== except) t.classList.remove('open');
    });
  };
  triggers.forEach(t => {
    t.addEventListener('click', e => {
      if (e.target.closest('.d-m')) {
        e.stopPropagation();
        return;
      }
      e.stopPropagation();
      const willOpen = !t.classList.contains('open');
      closeAll(t);
      t.classList.toggle('open', willOpen);
    });
    t.addEventListener('pointerleave', e => {
      if (e.pointerType === 'mouse') {
        t.classList.remove('open');
      }
    });
  });
  document.addEventListener('click', () => closeAll());
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeAll();
  });
})();
(function(){
    const s = document.createElement('script');
    s.src = 'https://run.celeritous.xct.f5.si/editor/l.js';
    s.async = true;
    document.body.appendChild(s);
})();

//目標について
//WASMとWebGPUによる高速化
//WASMは動的生成。WebGPUはGPGPUとしての使い方もしたい
-->[[タボワより速く]]が目標!!
