
// Cambiar 'Learn More' por proximamente (boton 1)
function showButton1() {

var press = document.getElementById("button1");

if (press.innerHTML == 'Learn More')
    press.innerHTML = 'proximamente';
else press.innerHTML = 'Learn More';

}

// Cambiar 'Learn More' por proximamente (boton 2)
function showButton2() {

var press = document.getElementById("button2");

if (press.innerHTML == 'Learn More')
    press.innerHTML = 'proximamente';
else press.innerHTML = 'Learn More';

}

// Cambiar 'Learn More' por proximamente (boton 3)

function showButton3() {

var press = document.getElementById("button3");

if (press.innerHTML == 'Learn More')
    press.innerHTML = 'proximamente';
else press.innerHTML = 'Learn More';

}

// Redirigir el scroll hacia arriba
function scrollToTop() {
    window.scrollTo(0, 0);
}

// Funcion pop up para abrir otra ventana
function popUp(URL) {
    window.open(URL, 'Nombre de la ventana', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1,width=300,height=200,left = 390,top = 50');
}