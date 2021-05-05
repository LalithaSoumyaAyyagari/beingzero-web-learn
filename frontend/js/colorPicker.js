var slider = document.getElementById("myRange1");
var output = document.getElementById("demo");
output.innerHTML = slider.nodeValue;

slider.oninput = function inputval(){
    output.innerHTML = this.nodeValue;

}