/* eslint-disable no-console */
console.log('background !!!!!!', window.chrome)

function downloadFile(options) {
  if (!options.url) {
    var blob = new Blob([options.content], {
      type: 'text/plaincharset=UTF-8',
    })
    options.url = window.URL.createObjectURL(blob)
  }
  window.chrome.downloads.download({
    url: options.url,
    filename: options.filename,
  })
}

downloadFile({
  filename: '1.jpg',
  url: 'http://wallpaperswide.com/download/demon_5-wallpaper-1440x900.jpg',
})
// try {
//     chrome.downloads.download({
//         url: "http://wallpaperswide.com/download/demon_5-wallpaper-1440x900.jpg",
//         filename: "download/1.jpg" // Optional
//     })
// } catch(e) {
//     console.error('AA')
// }
