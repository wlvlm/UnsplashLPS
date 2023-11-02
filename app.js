console.log('Unsplash app')
import ACCESS_KEY from "./config.js"

const form = document.querySelector('.form')
const input = document.querySelector('.input')
const imgContainer = document.querySelector('.imgContainer')
const input2 = document.querySelector('.input-2')

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
    imgContainer.textContent = '';
    console.log(data.results)

    for (let i = 0; i < 8; i++) {
        const imgWrapper = document.createElement("div")
        // const newImg = document.createElement("img")
        const title = document.createElement("h3")

        // newImg.src = data.results[i].urls.regular
        title.textContent = data.results[i].alt_description

        imgContainer.appendChild(imgWrapper)
        // imgWrapper.appendChild(newImg)
        imgWrapper.appendChild(title)
        
        imgWrapper.style.background = `url(${data.results[i].urls.regular})`
        imgWrapper.style.backgroundSize = 'cover'
        imgWrapper.style.width = '40vw'
        imgWrapper.style.aspectRatio = '1'
        imgWrapper.style.display = 'flex'
        imgWrapper.style.justifyContent = 'center'
        imgWrapper.style.alignItems = 'center'

        title.style.textTransform = 'uppercase'
        title.style.color = 'white'
        title.style.fontFamily = 'arial'
        title.style.fontWeight = '800'
        title.style.fontSize = '1.5rem'

    }
}
