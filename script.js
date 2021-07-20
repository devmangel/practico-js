//Cuadrado

function perimetroCuadrado(lado){
    
    return lado * 4;

}
function areaCruadrado(lado){
    
    return lado * lado;
}


// Triangulo perimetro

function trianguloParimeter(base,side){
    
    return (side * 2) + base;
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
    
        let pi = Math.PI;
    return (radio * radio) * pi;

}
// Function Square

function calcularPerimetroCuadrado(){
    
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    let perimetro = perimetroCuadrado(value);

    alert("The perimeter is: " + perimetro);

}

function calcularAreaCuadrado(){

    let input = document.getElementById("InputCuadrado");
    let value = input.value;

    let area = areaCruadrado(value);
    
    alert("The area is: " + area);
}

// Function Triangle

function calcularPerimetroTriangulo(){

    let inputTriangle = document.getElementById("InputTriangleBase");
    let baseT = inputTriangle.value;

    let input = document.getElementById("InputTriangleSide");
    let sideT = input.value;

    let perimeterT = trianguloParimeter(baseT,sideT)

    alert("The perimeter is: " + perimeterT);
}

function calcularAreaTriangulo(){

    let inputTrArea = document.getElementById("InputTriangleBase");
    let baseTriagle = inputTrArea.value;

    let sideArea = document.getElementById("InputTriangleSide");
    let heighTriangle = sideArea.value;

    let areaT = triangleArea(heighTriangle,baseTriagle)

    alert("The area is: " + areaT);

}

// Function Circle

function calcularDiametroCirculo(){

    let inputRadio = document.getElementById("inputCircle");
    let radio = inputRadio.value;

    let diameter = circuloDiamtro(radio);

    alert("The diameter of the circle is: " + diameter);

}

function calcularCircunferenciaCirculo(){

    let inputRadio = document.getElementById("inputCircle");
    let radio = inputRadio.value;

    let pi = Math.PI;
    let diameter = circuloDiamtro(radio);
    let circumference = diameter * pi;

    alert("The circumference of the circle is: " + circumference.toFixed(2));
}

function calcularAreaCirculo(){

    let inputRadio = document.getElementById("inputCircle");
    let radio = inputRadio.value;

    let areaCircle = circuloCircunferencia(radio);

    alert("The area of the circle is: " + areaCircle.toFixed(2));
}



