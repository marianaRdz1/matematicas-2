//SUMAR

//crear una variable y constante, se lee el id del boton del html
const boton1 = document.getElementById("btnsumar");
//el boton estara al pendiente cuando el usuario de click y despues realice la funcion
boton1.addEventListener("click", sumar);

function sumar()
//leer variable de los imputs
{
    //la vanumero1 hace referencia a la varible con el id num1  y varnumro1 se convierte en una constante 
    const varnumero1 = Number(document.getElementById("num1").value);
    //la varnumero2 hace referncia a la variable con el id num2 y varnumero2 se combierte en constante 
    const varnumero2 = Number(document.getElementById("num2").value);

    //crear variable para guardar resultarlo
    //la varresultado es igual a las valores que se ingresaron en las variables que hacen referncia a los id 
    //varresultado es una constante por eso se le const 
    const varresultado = varnumero1 + varnumero2;

    //aqui es donde va el id de donde se va a aprecer el resultado 
    const imprimirsumresultado = document.getElementById("resultado1");

   //Imprimir resultado
    imprimirsumresultado.innerText = varresultado;

}


//PAGO TOTAL CON EL DESCUENTO 

//btntotal es el id del button
    const boton2 = document.getElementById("btntotal")
    
    // se esta indicano que cuando el ususario haga click se relizara la funcion que en este caso se llama descuento 
    boton2.addEventListener("click",descuento);
    function descuento ()

    {
        //la variable pago hace referencia a el id de pago es .values porque es un valor 
        var precio = Number(document.getElementById("pago").value);
        var TOTAL = document.getElementById("calcularT");

    if(precio > 1000){
        descuento = (precio * .70);
    }
    else{
        descuento = (precio * .90);
    }
    TOTAL.innerHTML = "$" + descuento;

    }


//MULTIPLICAR

const boton3 = document.getElementById("btncuadrado");
boton3.addEventListener("click", cuadrado);

function cuadrado ()
{
    const varnumero5 = Number(document.getElementById("num5").value);
    const imprimirmulresultado3 = document.getElementById("resultado3");

    const vararea1 = varnumero5 * varnumero5;
    
    imprimirmulresultado3.innerText = vararea1;

}


//DIV
const boton4 = document.getElementById("btnrectangulo");
boton4.addEventListener("click", rectangulo);

function rectangulo()
{
    const varnumero7 = Number(document.getElementById("ladoa").value);
    const varnumero8 = Number(document.getElementById("ladob").value);
    const imprimirdivresultado4 = document.getElementById("resultado4");

    const vararea2 = varnumero7 * varnumero8;
    
    imprimirdivresultado4.innerText = vararea2;

}


//MOSTRAR NUMEROS DEL 100 al 0




//FOR 
//valor inicial, valor final, incremento
//for(x=1; x<=3; x=x+1)   (X++ -es igual- x=x+1)
//{}

function numdesendentes(){
    let numdesendentes = document.getElementById("x");
    var numero = [];
    for(var y = 100; y >= 1; y--){
        numero[y] = "<br>" + y;
        console.log(y);
    }
    numdesendentes.innerHTML = numero.reverse();
}

// par o impar 

const boton6 = document.getElementById("btnpar")
    
// se esta indicano que cuando el ususario haga click se relizara la funcion que en este caso se llama descuento 

const btnnum1 = document.getElementById("btnnum");
btnnum1.addEventListener("click", numeros);
function numeros(){
    const numero1  = Number(document.getElementById("num6").value);
    const impdivnum = document.getElementById("resultado6");

    if((numero1 % 2)== 0){
        impdivnum.innerText = numero1 + "par";
    }else{
        impdivnum.innerText = numero1 + "impar";
    }
}



//calificacion 
/*
const boton6 = document.getElementById("btncalificacion");
boton6.addEventListener("click", calificacion);*/

