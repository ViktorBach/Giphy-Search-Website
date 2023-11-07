
const apiKey = "8baFLtxeU8p85Z1f0uncxZgb8KmpNq7s"
const keywordInput = document.querySelector("#keyword")
const numberInput = document.querySelector("#number")
const searchButton = document.querySelector("#search-button")
const outputField = document.querySelector(".output")

searchButton.addEventListener("click", () => {
    const inputText = keywordInput.value
    outputField.innerHTML = ""
    const numberOfImages = parseInt(numberInput.value, 10)
    if (numberOfImages > 0) {
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=8baFLtxeU8p85Z1f0uncxZgb8KmpNq7s&q=${inputText}`)
            .then(response => response.json())
            .then(giphyData => {
                for (let i = 0; i < Math.min(numberOfImages, giphyData.data.length); i++) {
                    const img = document.createElement("img")
                    giphyData.data.sort(() => {return 0.5 - Math.random()})
                    img.src = giphyData.data[1].images.original.url
                    outputField.appendChild(img)
                }
            })
    }
})
document.body.appendChild(outputField)