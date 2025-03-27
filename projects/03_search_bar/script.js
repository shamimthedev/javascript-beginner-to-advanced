const container = document.querySelector(".container");
const searchIcons = document.querySelectorAll('.search-bar i')

searchIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        container.classList.toggle('change')
    })
})