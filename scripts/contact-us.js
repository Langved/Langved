const closeBtn = document.querySelector(".close-contact-us");
const openBtn = document.querySelector(".open-contact-us");
const openBtnMob = document.querySelector(".open-contact-us-mob")


closeBtn.addEventListener("click", closeContactForm)
openBtn.addEventListener("click", closeContactForm)
openBtnMob.addEventListener("click", closeContactForm)

function closeContactForm()
{
    document.querySelector(".overlay").classList.toggle("hidden")
    document.querySelector(".contact-us").classList.toggle("hidden")
    console.log("SoMeThInG")
    expandMenu()
}


var today = new Date()
document.getElementById('date-submitted').value=today;
console.log(today)


const scriptURL = 'https://script.google.com/macros/s/AKfycbxgljTOpbAuIsgPRh-FIeEpUosOoe8BK2BPf21DW623_5W7iwCvCXZ-Bt00qlpFbfiW/exec'
const form = document.forms['submit-to-google-sheet']
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })