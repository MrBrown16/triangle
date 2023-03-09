let baseInput = document.querySelector('#base');
let heightInput = document.querySelector('#height');
let areaInput = document.querySelector('#area');
let calcButton = document.querySelector('#calcButton');



console.log(baseInput,heightInput,areaInput,calcButton);

calcButton.addEventListener('click', () => {
    console.log("Bu!");
    console.log(typeof(baseInput.value),heightInput.value,areaInput.value,calcButton.value);
    workInput();
});

function workInput() {
    let base = Number(baseInput.value);
    let height = Number(heightInput.value);
    let area = calcTriangleArea(base, height);
    areaInput.value = area;
}
function calcTriangleArea(base, height) {
    return base * height / 2;
}
