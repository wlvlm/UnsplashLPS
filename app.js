console.log('Unsplash app')
import ACCESS_KEY from "./config.js"

const form = document.querySelector('.form')
const input = document.querySelector('.input')
const img = document.querySelectorAll('.target-image')

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let value = input.value
    console.log(value)

    fetchData(value)
})

async function fetchData(value) {
    try {
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${value}&client_id=${ACCESS_KEY}`);

        if (!response.ok) {
            throw new Error('Erreur')
        }
        const data = await response.json()
        displayData(data)
    } catch (error) {
        console.log('Une erreur est survenue')
    }
}

function displayData(data){
    data.results.forEach((element, index) => {
        img[index].src = element[index].urls.regular
    })
}
