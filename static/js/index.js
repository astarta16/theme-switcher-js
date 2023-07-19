const body = document.getElementById('body')
const title = document.getElementById('title')
const bottomTitle = document.getElementById('bottom-title')
const headerBorder = document.getElementById('header-border')
const toggleSwitch = document.getElementById('switch')
const header = document.getElementById('header')
const cards = document.querySelectorAll('.card')
const bottomCards = document.querySelectorAll('.bottom-card')
const followersNumber = document.querySelectorAll('.card-followers-number')
const footerValue = document.querySelectorAll('.bottom-card-footer-value')


toggleSwitch.addEventListener('click', () => {
    body.classList.toggle('dark-body')
    header.classList.toggle('dark-header')
    title.classList.toggle('dark-title')
    bottomTitle.classList.toggle('dark-bottom-title')
    headerBorder.classList.toggle('dark-border')

    cards.forEach(card => {
        card.classList.toggle('dark-card')
    })

    bottomCards.forEach(card => {
        card.classList.toggle('dark-card')
    })

    followersNumber.forEach(number => {
        number.classList.toggle('dark-title')
    })

    footerValue.forEach(value => {
        value.classList.toggle('dark-title')
    })
})