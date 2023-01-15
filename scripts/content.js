console.log('Script loaded')
let images = document.body.getElementsByTagName('img');
console.log('images: ' + images)
for (let i = 0; i < images.length; i++) {
  let image = images[i]
  image.outerHTML = '<div> HELLO ' + image.outerHTML + '</div>'
  console.log('images: ' + image)
}

/* Add Side Panel to page */
// Makes the main content of the page appear on the left side of the page.
function addMainPanel() {
  document.body.innerHTML =
      '<div id="main-panel">' + document.body.innerHTML + '</div>'
}

let sidepanel_html =
    ' <div id="side-panel"> You can click on an image or theorem to pop it into the side panel!  </div>'
function addSidePanel() {
  document.body.innerHTML += sidepanel_html;
}

addMainPanel();
addSidePanel();
