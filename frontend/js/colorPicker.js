function onColorRangeChange(){
    let pE = document.getElementById("pcolor");
    let rE = document.getElementById("redSlider");
    let gE = document.getElementById("greenSlider");
    let bE = document.getElementById("blueSlider");

    let rgbprop = "rgb("+rE.value+", "+gE.value+", "+bE.value+")";
    console.log(rgbprop);

    pE.innerHTML = rgbprop;
    pE.style.backgroundColor = rgbprop;
}
