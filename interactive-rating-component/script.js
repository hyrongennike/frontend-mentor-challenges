const ratingCard = document.querySelector("#rating-card")
const ratingsContainer = document.querySelector("#ratings")
const ratingValues = ratingsContainer.querySelectorAll(".rating-value")
const successCard = document.querySelector("#rating-success")
const ratingSelected = document.querySelector("#rating-selected")
const submitBtn = document.querySelector("#submit-btn")
let currentRating = 1 // Default rating

ratingsContainer.addEventListener("click", selectRating)

submitBtn.addEventListener("click", e => {
  ratingSelected.textContent = currentRating
  ratingCard.classList.add("hide")
  successCard.classList.remove("hide")
})

function selectRating(e) {
  ratingValues.forEach(rating => {
    rating.classList.remove("selected")
  })

  const selectedRating = e.target

  if (!selectedRating.classList.contains("selected")) {
    selectedRating.classList.add("selected")
    currentRating = selectedRating.textContent
  } else {
    selectedRating.classList.remove("selected")
  }
}
