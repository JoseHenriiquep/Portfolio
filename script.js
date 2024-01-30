//Menu Sandwich Function
const NavBar = document.querySelector(".menuMobile")
const NavMenu = document.querySelector(".nav-menu")

function fecharBarra() {
    NavMenu.classList.remove('active');
}

NavBar.addEventListener("click", () => {
    NavBar.classList.toggle('active');
    NavMenu.classList.toggle('active');
})

const NavItem = document.querySelectorAll(".nav-menu a");

NavItem.forEach(item => {
    item.addEventListener("click", fecharBarra);
})

//Function to Back Top
window.addEventListener('scroll', function(){
    let scroll = document.querySelector('.scrollTop')
    scroll.classList.toggle('active', window.scrollY > 450)
})
function backTop(){
    window.scrollTo({
        top: 0, behavior: "smooth"
    })
}