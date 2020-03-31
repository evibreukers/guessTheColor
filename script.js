// declare variables
let rgbCode
let hexCode
let result = document.querySelector('#result')

// FUNCTION: pick a random color
const random = () => {
    return Math.floor(Math.random() * (255 - 0 + 1))
}

// FUNCTION: convert RGB color to HEX
const rgbToHex = (rgb)=> { 
        var hex = Number(rgb).toString(16);
        if (hex.length < 2) {
            hex = "0" + hex;
        }
    return hex;
}

// FUNCTION: pick a new random color
const pickColor = () => {
    let miniArray = []
    result.innerHTML = ""

    const selectColor = document.querySelectorAll('.colorBox')
    Array.from(selectColor).forEach(function(item){

        let redRGB = random()
        let greenRGB = random()
        let blueRGB = random()
        
        rgbCode = `rgb(${redRGB}, ${greenRGB}, ${blueRGB})`
        hexCode = "#" + rgbToHex(redRGB) + rgbToHex(greenRGB) + rgbToHex(blueRGB)

        item.style.backgroundColor = hexCode

        item.setAttribute("data-rgb", rgbCode)
        item.setAttribute("data-hex", hexCode)

        miniArray.push(rgbCode)
    })

    let randomHex = Math.floor(Math.random() * miniArray.length + 1)
    console.log(randomHex)
    let randomBox = "color" + randomHex
    let getRGB = document.getElementById(randomBox).getAttribute("data-rgb")
    let getHex = document.getElementById(randomBox).getAttribute("data-hex")

    document.querySelector('#rgbShow').innerHTML = getRGB
    document.querySelector('#hexShow').innerHTML = getHex
}

// EVENT: click new game button
document.querySelector('#button').addEventListener('click', () => {
    const colorBoxes = document.querySelectorAll('.colorBox')
    colorBoxes.forEach(function(colorBox){
        colorBox.style.border = "none"
    })
    pickColor()
})

// FUNCTION: click color box
const clickColorBox = () => {
    const colorBoxes = document.querySelectorAll('.colorBox')
    colorBoxes.forEach(function(colorBox){
        colorBox.addEventListener("click", function(){
            
            colorBoxes.forEach(function(colorBox){
                colorBox.style.border = "none"
            })

            colorBox.style.border = "solid 2px white"
            const getColor = colorBox.style.backgroundColor 
            const pickedColor = document.querySelector('#rgbShow').innerHTML

            if(getColor === pickedColor){
                result.innerHTML = "YOU WON"
            } else {
                result.innerHTML = "WRONG COLOR"
            }
        })

    })
}

// FUNCTION: select game settings
const gameSettings = () => {
    const colorBoxes = document.querySelectorAll('.colorBox')
    const hexOption = document.querySelector('#hexOp')
    const rgbOption = document.querySelector('#rgbOp')
    const easyOption = document.querySelector('#easyOp')
    const hardOption = document.querySelector('#hardOp')
    const hexShow = document.querySelector('#hexShow')
    const rgbShow = document.querySelector('#rgbShow')
    const color5 = document.querySelector('#color5')
    const color6 = document.querySelector('#color6')

    // EVENT: click HEX option
    hexOption.addEventListener('click', () => {
        rgbShow.style.display = 'none'
        hexShow.style.display = 'block'
        hexOption.style.backgroundColor = 'beige'
        rgbOption.style.backgroundColor = 'white'
        result.innerHTML = ''

        colorBoxes.forEach(colorBox => {
            colorBox.style.border = 'none'
        })
    })

    // EVENT: click RGB option
    rgbOption.addEventListener('click', () => {
        rgbShow.style.display = 'block'
        hexShow.style.display = 'none'
        hexOption.style.backgroundColor = 'white'
        rgbOption.style.backgroundColor = 'beige'
        result.innerHTML = ''

        colorBoxes.forEach(colorBox => {
            colorBox.style.border = 'none'
        })
    })

    // EVENT: click EASY option
    easyOption.addEventListener("click", () => {
        color5.classList.remove('colorBox')
        color6.classList.remove('colorBox')
        easyOption.style.backgroundColor = 'beige'
        hardOption.style.backgroundColor = 'white'
        result.innerHTML = ''

        colorBoxes.forEach(function(colorBox){
            colorBox.style.border = 'none'
        })
    })

    // EVENT: click HARD option
    hardOption.addEventListener('click', () => {
        color5.classList.add('colorBox')
        color6.classList.add('colorBox')
        easyOption.style.backgroundColor = 'white'
        hardOption.style.backgroundColor = 'beige'
        result.innerHTML = ''

        colorBoxes.forEach(colorBox => {
            colorBox.style.border = 'none'
        })
    })
}

// DEFAULT: pick color at landing page
pickColor()
gameSettings()
clickColorBox()

