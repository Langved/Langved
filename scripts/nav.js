let ham = document.querySelector(".ham")
console.log(ham)

function expandMenu ()
{
    let menu = document.querySelector(".mobile-nav")
    if (menu.style.height != "100%") {
        menu.style.height = "100%"
    }
    else if (menu.style.height == "100%") {
        menu.style.height = "15%"
    }
    console.log(menu)
}

ham.addEventListener('click', expandMenu)
