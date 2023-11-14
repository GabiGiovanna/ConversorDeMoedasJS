function ConverterDolar(){

var valor = document.getElementById("valor").value;
var result = valor / 4.91;
document.getElementById("resultado").value = result.toFixed(2);

}

function ConverterReal(){

    var valor = document.getElementById("valor").value;
    var result = valor * 4.91;
    document.getElementById("resultado").value  = result.toFixed(2);
    
    }