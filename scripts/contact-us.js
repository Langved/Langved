const closeBtn = document.querySelector(".close-contact-us");
const openBtn = document.querySelector(".open-contact-us-nav");
const openBtnMob = document.querySelector(".open-contact-us-mob")
const openContactUsBtns = document.getElementsByClassName("open-contact-us")
console.log(openContactUsBtns)


for (let btn of openContactUsBtns) {
    btn.addEventListener("click", toggleContactForm)
}
closeBtn.addEventListener("click", closeContactForm)
openBtn.addEventListener("click", closeContactForm)
openBtnMob.addEventListener("click", closeContactForm)


function toggleContactForm()
{
    document.querySelector(".overlay").classList.toggle("hidden")
    document.querySelector(".contact-us").classList.toggle("hidden")
}

function closeContactForm()
{
    toggleContactForm()
    expandMenu()
}

var today = new Date()
document.getElementById('date-submitted').value=today;


const scriptURL = 'https://script.google.com/macros/s/AKfycbxgljTOpbAuIsgPRh-FIeEpUosOoe8BK2BPf21DW623_5W7iwCvCXZ-Bt00qlpFbfiW/exec'
const form = document.forms['submit-to-google-sheet']


form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
    //   let contact_form=document.querySelector("contact-form")
    //   contact_form.reset()
      closeContactForm()
  })