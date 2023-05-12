let tabId;
let fileName;
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  tabId = tabs[0].id;
  sendMsg("get", {}, getVideoList);
});

// Event ===================================================================

$("#options").delegate(".copyButton", "click", function (event) {
  copyHandle(event.target.attributes["data-url"].value);
});

$("#options").delegate(".dwButton", "click", function (event) {
  downloadHandle(event.target.attributes["data-url"].value);
});

// Common Function ===================================================================

function sendMsg(
  content = "",
  data = {},
  cb = (msg) => {
    console.log(msg);
  }
) {
  chrome.tabs.sendMessage(tabId, { content: content, ...data }, (msg) => {
    cb(msg);
  });
}

function useAjax(url) {
  return $.ajax({
    type: "GET",
    url: url,
    success: function (res) {
      return res;
    },
    error: function (xhr, status, err) {
      console.log("Error:", err);
    },
  });
}

async function checkoutUrl(url) {
  let m3u8url;
  const res = await useAjax(url);
  if (res.includes(".m3u8")) {
    const { hostname } = new URL(url);
    const newUrl = res.split("\n");
    m3u8url = `https://${hostname}${newUrl[2]}`;
  } else {
    m3u8url = url;
  }
  return m3u8url;
}

// Method Function ===================================================================

async function getVideoList(msg) {
  const { apiUrl, title, name } = msg.data;
  if (apiUrl === "") return;
  $("#info").text(title);
  fileName = name
  const data = await useAjax(apiUrl);
  const { video_plays } = JSON.parse(data);
  video_plays.forEach((elm, idx) => {
    const titleSpanEl = `<span>網址 ${idx + 1}：</span>`;
    const copyButtonEl = `<button class='copyButton' data-url=${elm.play_data}>複製網址</button>`;
    const dwButtonEl = `<button class='dwButton' data-url=${elm.play_data}>下載檔案</button>`;
    $("#options").append(`<div class="items">${titleSpanEl}${copyButtonEl}${dwButtonEl}</div>`);
  });
}

async function copyHandle(url) {
  const m3u8url = await checkoutUrl(url);
  chrome.tabs.sendMessage(tabId, { content: "copy", data: { url: m3u8url } });
  navigator.clipboard.writeText(m3u8url);
}

async function downloadHandle(url) {
  const m3u8url = await checkoutUrl(url);
  const copyData = { name: fileName, url: m3u8url };
  navigator.clipboard.writeText(JSON.stringify(copyData)).then(() => {
    chrome.tabs.create({ url: "../downloader/index.html" });
  });
}
