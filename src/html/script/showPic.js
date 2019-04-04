
function showPic(whichpic) {
  let source = whichpic.getAttribute('href')
  let imgId = document.getElementById('placeholder')
  imgId.setAttribute('src', source)

  let title = whichpic.getAttribute('title')
  let descriptionId = document.getElementById('description')

  descriptionId.firstChild.nodeValue = title
}