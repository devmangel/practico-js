//Cuadrado

function perimetroCuadrado(lado){
    
    return lado * 4;

}
function areaCruadrado(lado){
    
    return lado * lado;
}


// Triangulo perimetro

function trianguloParimeter(lateral,base){
    
    return (lateral * 2) + base;
}
// Triangulo area

function triangleArea(altura,base){

   return altura * base;  
}
// Circulo diametro

function circuloDiamtro(radio){
    
    return radio * 2;
    
}
// Circulo circunferencia

function circuloCircunferencia(radio){
    
    let pi = Math.PI;
    
    return (diametro * pi);

}
// Circulo Area
    function circuloCircunferencia(radio){

    let areaCirculo = (radio * radio) * pi;

}
// Interaccion con html

function calcularPerimetroCuadrado(){
    
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    let perimetro = perimetroCuadrado(value);

    alert("El perimetro es de: " + perimetro);

}

function calcularAreaCuadrado(){

    let input = document.getElementById("InputCuadrado");
    let value = input.value;

    let area = areaCruadrado(value);
    
    alert("El area es de: " + area);
}

