const closeBtn = document.querySelector(".close-contact-us");
const openBtn = document.querySelector(".open-contact-us")

closeBtn.addEventListener("click", closeContactForm)
openBtn.addEventListener("click", closeContactForm)

function closeContactForm()
{
    document.querySelector(".overlay").classList.toggle("hidden")
    document.querySelector(".contact-us").classList.toggle("hidden")
}

