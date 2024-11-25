var changeColorBtn = document.getElementById('changeColor');
var colorCodeElement = document.getElementById('colorCode');
var genrateRandomColor = function () {
    var lettera = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += lettera[Math.floor(Math.random() * 16)];
    }
    return color;
};
changeColorBtn === null || changeColorBtn === void 0 ? void 0 : changeColorBtn.addEventListener("click", function () {
    var newcolor = genrateRandomColor();
    document.body.style.backgroundColor = newcolor;
    if (colorCodeElement) {
        colorCodeElement.textContent = newcolor;
    }
});
