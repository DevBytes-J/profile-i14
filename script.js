const el = document.getElementById('epoch-time');
function tick() { el.textContent = Date.now(); }
tick();
setInterval(tick, 1000);
