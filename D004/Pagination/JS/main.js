const hoverBtn = document.querySelectorAll('page-item')

for(let i = 0; i < hoverBtn.length; i++) {
    hoverBtn[i].addEventListener('click', () => {
        hoverBtn[i].classList.toggle('active')
    })
}