// 设置纪念日倒计时
function updateCountdown() {
  const today = new Date();
  const thisYear = today.getFullYear();
  let anniversary = new Date(`${thisYear}-12-19`);
  if (today > anniversary) {
    anniversary = new Date(`${thisYear + 1}-12-19`);
  }
  const diffTime = anniversary - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  document.getElementById("daysLeft").textContent = `${diffDays} 天`;
}
updateCountdown();
setInterval(updateCountdown, 1000 * 60 * 60 * 24); // 每天更新

// 每日情话
const loveQuotes = [
  "遇见你是我一生最美的意外。",
  "你笑起来真像好天气。",
  "我不要短暂的温柔，只要你一世的陪伴。",
  "全世界只有一个你，我怎能不珍惜。",
  "和你在一起的每一天都是纪念日。"
];
const todayIndex = new Date().getDate() % loveQuotes.length;
document.getElementById("loveQuote").textContent = loveQuotes[todayIndex];

// 大事件添加
function addEvent() {
  const date = document.getElementById("eventDate").value;
  const text = document.getElementById("eventText").value;
  if (!date || !text) return alert("请输入日期和事件内容");

  const event = { date, text };
  const events = JSON.parse(localStorage.getItem("events") || "[]");
  events.push(event);
  localStorage.setItem("events", JSON.stringify(events));
  renderEvents();
}

function renderEvents() {
  const events = JSON.parse(localStorage.getItem("events") || "[]");
  const list = document.getElementById("eventList");
  list.innerHTML = "";
  events.sort((a, b) => new Date(a.date) - new Date(b.date)).forEach(ev => {
    const li = document.createElement("li");
    li.textContent = `${ev.date} - ${ev.text}`;
    list.appendChild(li);
  });
}
renderEvents();
