// DOM declaration
const apiKey = "8baFLtxeU8p85Z1f0uncxZgb8KmpNq7s"
const keywordInput = document.querySelector("#keyword")
const numberInput = document.querySelector("#number")
const searchButton = document.querySelector("#search-button")
const outputField = document.querySelector(".output")

//Event listener for search button
searchButton.addEventListener("click", () => {
//const inputText is now what is typed in the keywordInput + clearing outputField when clicked
    const inputText = keywordInput.value
    outputField.innerHTML = ""
//Parsing the string in numberInput into an integer
    const numberOfGifs = parseInt(numberInput.value, 10)
    if (numberOfGifs > 0) {
//Fetching api data based on the inputText
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=8baFLtxeU8p85Z1f0uncxZgb8KmpNq7s&q=${inputText}`)
            .then(response => response.json())
            .then(giphyData => {
//Looping the fetch as long as i is less than what has been typed in numbberOfGifs input
                for (let i = 0; i < Math.min(numberOfGifs, giphyData.data.length); i++) {
//Creating img tag in HTML, declaring attributes, getting random .data GIF, and appending to outputField
                    const img = document.createElement("img")
                    img.setAttribute("height", 200)
                    img.setAttribute("width", 200)
                    giphyData.data.sort(() => {return 0.5 - Math.random()})
                    img.src = giphyData.data[1].images.original.url
                    outputField.appendChild(img)
                }
            })
    }
})
//Appending outputField to body in HTML
document.body.appendChild(outputField)