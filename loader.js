// CSS
const css = document.createElement('link');
css.rel = 'stylesheet';
css.href = 'https://github.com/TVint/live-coding/blob/main/tv_int.css';
document.head.appendChild(css);

// JS
const js = document.createElement('script');
js.src = 'https://github.com/TVint/live-coding/blob/main/tv_int.js';
document.head.appendChild(js);

console.log("🛠️ Loader eseguito: librerie in fase di aggancio...");