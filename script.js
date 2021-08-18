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
    
    let input = document.getElementById("InputCuadrado").value;

    let perimetro = perimetroCuadrado(input);

    let result = document.getElementById("resultSquare");

    result.innerText = "= " + perimetro;

}

function calcularAreaCuadrado(){

    let input = document.getElementById("InputCuadrado").value;
    // let value = input.value;

    let area = areaCruadrado(input);
    
    let result = document.getElementById("resultSquare");

    result.innerText = "= " + area;
}

// Function Triangle

function calcularPerimetroTriangulo(){

    let inputTriangle = document.getElementById("InputTriangleBase");
    let baseT = inputTriangle.value;

    let sideT = document.getElementById("InputTriangleSide").value;

    let perimeterT = trianguloParimeter(baseT,sideT)

    let result = document.getElementById("resultTriangle");

    result.innerText = "= " + perimeterT;
}

function calcularAreaTriangulo(){

    let inputTrArea = document.getElementById("InputTriangleBase");
    let baseTriagle = inputTrArea.value;

    let heighTriangle = document.getElementById("InputTriangleSide").value;

    let areaT = triangleArea(heighTriangle,baseTriagle)

    let result = document.getElementById("resultTriangle");

    result.innerText = "= " + areaT;

}

// Function Circle

function calcularDiametroCirculo(){

    let radio = document.getElementById("inputCircle").value;

    let diameter = circuloDiamtro(radio);

    let result = document.getElementById("resultCircle");

    result.innerText = "= " + diameter;

}

function calcularCircunferenciaCirculo(){

    let radio = document.getElementById("inputCircle").value;

    let pi = 3.14;
    let diameter = circuloDiamtro(radio);
    
    let circumference = (diameter * pi);

    let result = document.getElementById("resultCircle");

    result.innerText = "= " + circumference.toFixed(2);
}

function calcularAreaCirculo(){

    let radio = document.getElementById("inputCircle").value;

    let areaCircle = circuloCircunferencia(radio);

    let result = document.getElementById("resultCircle");

    result.innerText = "= " + areaCircle.toFixed(2);
}

// Promedio ponderado

let finalNotes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 1,
    },
    {
        course: "Programación",
        note: 8,
        credit: 1,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 10,
    },
];

let multiplyNotes = finalNotes.map(function(item){
        return item.note * item.credit;
    }
);

let sumNotes = multiplyNotes.reduce(function(a,b){

    return a + b;
});

let listCredits = finalNotes.map(function(item){

    return item.credit;
});

let sumCredits = listCredits.reduce(function(a,b){return a + b});

let average = sumNotes / sumCredits;






