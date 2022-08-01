'use strict';

{
  // 定数宣言 htmlから要素の取得等
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');
  const MenuClick = document.querySelectorAll(".MenuClick");
  const toTop = document.getElementById("to_top")
  const onScrollObserver = new IntersectionObserver(onScrollCallback,);
  const inViewObserver = new IntersectionObserver(inViewCallback, {
    threshold: 0.4,
  });
  const types = ['load', 'resize'];

// スマホメニュークリック時にオーバーレイを表示非表示
  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

// オーバーレイのメニュークリック時にcloseを同時にクリック
  MenuClick.forEach((target) => {
    target.addEventListener('click', () => {
      close.click();
    });
  });

// スクロール時にトップへ戻るボタンの表示
  function onScrollCallback(entries) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        toTop.classList.add('scrolled');
      } else {
        toTop.classList.remove('scrolled');
      }
    });
  }

  onScrollObserver.observe(document.getElementById('target'));


// 事業内容、企業理念左右から表示
  function inViewCallback(entries, obs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }

  document.querySelectorAll('.animate').forEach(el => {
    inViewObserver.observe(el);
  });

// heroエリアの高さをブラウザ高さにする
  types.forEach(function(type){
    window.addEventListener(type, () => {

      let elem = document.querySelector('.hero');
      let wh = window.innerHeight;

      elem.style.height = wh + 'px';

    });
  });

}
