function log(message) {
  document.querySelector("#log").textContent += `${new Date().toLocaleTimeString()} ${message}\n`;
}

async function sendAlimtalkMock(payload) {
  log(`알림톡 mock 발송: ${payload.name}`);
  return { ok: true, messageId: crypto.randomUUID() };
}

function trackConversionMock(payload) {
  log(`Meta Pixel Lead event: ${payload.category}`);
  log(`GA4 generate_lead event: ${payload.category}`);
  log(`Google Ads conversion event: ${payload.category}`);
}

document.querySelector("#lead-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const payload = {
    name: document.querySelector("#name").value.trim(),
    phone: document.querySelector("#phone").value.trim(),
    category: document.querySelector("#category").value
  };
  const result = await sendAlimtalkMock(payload);
  if (result.ok) {
    trackConversionMock(payload);
    log("신청 완료");
    event.target.reset();
  }
});

