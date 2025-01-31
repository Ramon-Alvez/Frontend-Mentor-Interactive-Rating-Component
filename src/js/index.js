const ratingButtons = document.querySelectorAll('input.rating-checkbox')
const submitButton = document.getElementById('submit-btn')

ratingButtons.forEach((button) => {
    button.addEventListener('change', () => {
        submitButton.disabled = true
        let activeButtons = document.querySelector('input.rating-checkbox.active')

        if (activeButtons) {
            activeButtons.checked = false
            activeButtons.classList.remove('active')
        }

        if (activeButtons == button) {
            return activeButtons.classList.remove('active')
        }

        button.classList.add('active')
        if (button.classList.contains('active')) submitButton.disabled = false

        let rate = button.value
        showRate(rate)
    })
});

submitButton.addEventListener(('click'), () => {
    const cardContent = document.querySelectorAll('section.card-content')
    cardContent[0].classList.add('hidden')
    cardContent[1].classList.remove('hidden')
})

function showRate(rate) {
    const ratingScore = document.getElementById('rating-score')
    ratingScore.innerText = `You selected ${rate} out of 5`
}