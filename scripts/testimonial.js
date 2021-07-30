let testimonialHTML = [];
let currentTestimonial = 0;
let timer = null;

const getTestimonialData = async () => 
{
    const response = await fetch("../json/testimonial.json");
    const dataset = await response.json();
    return dataset;
}



function slideShow()
{
    timer = setInterval (e => {
        let target = document.querySelector('#message');
        target.innerHTML = "";
        target.innerHTML = testimonialHTML[currentTestimonial];
        // console.log(target.innerHTML, currentTestimonial);
        if(currentTestimonial == testimonialHTML.length - 1)
        {
            currentTestimonial = 0;
        }
        else
        {
            currentTestimonial += 1;
        }
    }, 3000)
}


getTestimonialData()
.then(
        dataset => 
        {
            dataset.forEach(testimonial => {
                testimonialHTML.push(`${testimonial}`)
            });
            
        },
        document.querySelector('#message').innerHTML = testimonialHTML[0],
        slideShow()
    ) 
.catch(
    err => 
    console.log(err)
);

    


let btnLeft = document.querySelector('.testimonial-arrow-left');
let btnRight = document.querySelector('.testimonial-arrow-right');


function goLeft()
{
    if(currentTestimonial == 0)
    {
        currentTestimonial = 4;
    }
    else
    {
        currentTestimonial -= 1;
    }
    let target = document.querySelector('#message');
    target.innerHTML = "";
    target.innerHTML = testimonialHTML[currentTestimonial];

}

function goRight()
{
    if(currentTestimonial == 4)
    {
        currentTestimonial = 0;
    }
    else
    {
        currentTestimonial += 1;
    }
    let target = document.querySelector('#message');
    target.innerHTML = "";
    target.innerHTML = testimonialHTML[currentTestimonial];

}



console.log(btnLeft);
console.log(btnRight);

btnLeft.addEventListener('click', e => {
    console.log("Go Left");
    clearInterval(timer);
    goLeft();
})



btnRight.addEventListener('click', e => {
    console.log("Go Right");
    clearInterval(timer);
    goRight();
})
