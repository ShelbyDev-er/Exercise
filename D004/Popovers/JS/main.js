const button = document.querySelector('.btn')
const popovers = document.querySelector('.popovers')
console.log(button);


button.addEventListener('click', () => {
    popovers.classList.toggle('active')
})
