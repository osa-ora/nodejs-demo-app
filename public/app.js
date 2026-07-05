async function loadInfo() {
  const res = await fetch("/api/info");
  const data = await res.json();

  document.getElementById("node").innerText = data.node;
  document.getElementById("host").innerText = data.hostname;
  document.getElementById("platform").innerText = data.platform;
}

async function loadTime() {
  const res = await fetch("/api/time");
  const data = await res.json();

  document.getElementById("time").innerText = data.time;
}

loadInfo();
loadTime();
setInterval(loadTime, 1000);
