//Cuadrado
console.group("Cuadrado");

function cuadrado(lado){
    
    console.log("La longitud de los lados es de: " + lado + " cms");
    let perimetro = lado * 4;
    console.log("El perimetro del cuadrado es igual a: " + perimetro + " cms");
    let area = lado * lado;
    console.log("El area del cuadrado es de: " + area + " cms^2");
}
console.groupEnd();

// Triangulo
console.group("Triangulo");

function triangulo(lateral,base){
    console.log("La longitud de los lados laterales es de: " + lateral + "cms, y de la base es de: " + base);
    
    let perametroTriangulo = (lateral * 2) + base;
    
    console.log("El parametro del trigulo es de: " + perametroTriangulo);
    
    const altura = 5.5;
    let areaTriangulo = altura * base;
   
    console.log("El area del triangulo es de: " + areaTriangulo);
} 
console.groupEnd();

// Circulo
console.group("Circulo");

function circulo(radio){
    
    let diametro = radio * 2;
    let pi = Math.PI;
    
    let circunferencia = (diametro * pi);
    let areaCirculo = (radio * radio) * pi;
    
    console.log("Caracteristicas del circulo: Si el radio es: " + radio + " su circunferencia es: " + circunferencia + " y su area es de: " + areaCirculo);
}





