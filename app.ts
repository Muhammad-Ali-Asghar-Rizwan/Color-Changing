const changeColorBtn = document.getElementById('changeColor')


const colorCodeElement = document.getElementById('colorCode')



// Function to generate a random hex color

function genrateRandomColor(){
    const letters = '0123456789ABCDEF';

    let color = '#'

    for (let i = 0; i< 6; i++) {
     color += letters[Math.floor(Math.random() * 16)]  
    }
    return color;
    
}


changeColorBtn?.addEventListener("click", ()=>{
    const newColor = genrateRandomColor();
    document.body.style.backgroundColor = newColor

    if (colorCodeElement) {
        colorCodeElement.textContent = newColor
    }
})