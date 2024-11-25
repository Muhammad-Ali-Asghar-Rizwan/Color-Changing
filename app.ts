const changeColorBtn = document.getElementById('changeColor')

const colorCodeElement = document.getElementById('colorCode')




const genrateRandomColor  = ():string => {
    const lettera = '0123456789ABCDEF';

    let color = '#'

    for (let i = 0; i < 6; i++) {
       color += lettera[Math.floor(Math.random()*16)]        
    }
    return color;
}


changeColorBtn?.addEventListener("click", ()=>{
    const newcolor = genrateRandomColor()
    document.body.style.backgroundColor = newcolor


    if (colorCodeElement) {
        colorCodeElement.textContent = newcolor
    } 
})