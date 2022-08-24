const shareButton = document.querySelector("#share-btn")
const shareBox = document.querySelector("#share-box")

shareButton.addEventListener("click", e => {
  e.preventDefault()
  e.stopPropagation()
  shareBox.classList.toggle("show")
})

document.body.addEventListener("click", () => {
  if (shareBox.classList.contains("show")) {
    shareBox.classList.remove("show")
  }
})
