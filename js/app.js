const toggleBtn = document.querySelector('.toggle')
const navigation = document.querySelector('.navigation')
const logo = document.querySelector('.logo')

toggleBtn.addEventListener('click', (e) => {
    e.target.classList.toggle('active')
    navigation.classList.toggle('active')
    logo.classList.toggle('active')
})