const body = document.querySelector("body");/*Trae información del HTML - Clases*/
const toggle = document.getElementById("toggle");/*Trae información del HTML - Id, tambien se puede llamar con queryselector, pero referenciando el numeral*/

/*Método toggle() Empieza en off(false), cuando se asigna este metodo, y cuando se vuelva a llamar el método lo va a pasar a on(verdadero) y cuando lo vuelva a llamar, lo va a devolver a falso, y así sucesivamente, guarda el estado*/

toggle.addEventListener('click', () => {
    toggle.classList.toggle("toggleBlanco");/*Cuando se llame el método va cambiar de estado y va cambiar de color*/
    body.classList.toggle("toggleBlanco");
})





