let apiUrl = "";
const { pathname } = new URL(window.location.href);
const pathArr = pathname.split("/");
if (pathArr.length > 4 || pathArr[3] !== "")
  apiUrl = `https://chinaq.fun/qplays/${pathArr[2]}/${pathArr[3].replace(".html", "")}`;
console.log(pathArr[3], apiUrl);

chrome.runtime.onMessage.addListener(async function (message, sender, sendResponse) {
  const { content } = message;
  switch (content) {
    case "get":
      console.log("get list!");
      const req = {
        content: "",
        data: { apiUrl: apiUrl, title: document.title, name: pathArr[3].replace(".html", "") },
      };
      sendResponse(req);
      break;
    case "copy":
      // alert("已複製", message.data.url);
      console.log("已複製", message.data.url);
      break;
    case "newPage":
      // alert("已複製", message.data.url);
      console.log(message.data);
      break;
    default:
      break;
  }
});
