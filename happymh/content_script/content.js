var adBlock = document.getElementsByClassName('adsbygoogle')
if (adBlock) {
  console.log(adBlock.length)
  setTimeout(() => {
      while (adBlock.length > 0) {
        const element = adBlock[0];
        element.remove()
        console.log('ad remove')
      }
    }, 1000);
}

var adBlock2 = document.getElementsByClassName('bot-per-context')
if (adBlock2) {
  console.log(adBlock2.length)
  setTimeout(() => {
      while (adBlock2.length > 0) {
        const element = adBlock2[0];
        element.remove()
        console.log('ad remove')
      }
    }, 1000);
}

window.addEventListener('keydown', function(e){
  console.log(e.code)
  if (e.code === 'ArrowRight') {
    var MuiButton = document.getElementsByClassName('MuiButton-root')
    MuiButton[2].click()
    return
  }
  if (e.code === 'ArrowLeft') {
    var MuiButton = document.getElementsByClassName('MuiButton-root')
    MuiButton[3].click()
    return
  }
}, false);