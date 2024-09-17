var changeColorBtn = document.getElementById('changeColor');
var colorCodeElement = document.getElementById('colorCode');
// Function to generate a random hex color
function genrateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
changeColorBtn === null || changeColorBtn === void 0 ? void 0 : changeColorBtn.addEventListener("click", function () {
    var newColor = genrateRandomColor();
    document.body.style.backgroundColor = newColor;
    if (colorCodeElement) {
        colorCodeElement.textContent = newColor;
    }
});
