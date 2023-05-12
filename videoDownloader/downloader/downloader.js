let info;
navigator.clipboard.readText().then((text) => {
  info = JSON.parse(text);
  document.title = info.name;
});

