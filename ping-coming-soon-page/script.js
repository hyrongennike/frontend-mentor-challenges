const form = document.querySelector("#newsletter-form")
const errorMsg = document.querySelector(".error")

form.addEventListener("submit", function (e) {
  e.preventDefault()

  const validateEmail = email => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  }

  const submittedEmail = form.elements["email"].value

  if (!validateEmail(submittedEmail)) {
    form.classList.add("error")
  } else {
    form.classList.remove("error")
    form.reset()
  }
})
