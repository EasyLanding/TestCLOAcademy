const burger = document.querySelector(".humburger-menu")
const menuElem = document.querySelector(".menu")
const menuLink = document.querySelector(".menu-list__link")
//humburger-menu
//menu

const toggleMenu = () => {
    menuElem.classList.toggle("menu-active")
    burger.classList.toggle("humburger-menu-active")
}

burger.addEventListener("click", () => {
    menuElem.classList.remove("hidden")
    toggleMenu()
})

const menuLinkToggle = () => {
    menuElem.classList.add("hidden")
}

menuLink.addEventListener("click", () => {
    menuLinkToggle()
})