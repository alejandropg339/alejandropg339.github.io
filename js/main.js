
// ------ TYPEDJS -----------

const typed = new Typed('.typed', {
    strings: [
        '<i class="writing">Desarollador Web</i>',
        '<i class="writing">Estudiante de ingeniería de sistemas</i>',
        '<i class="writing">Desarrollador Fullstack</i>'],
    typeSpeed: 75, //volicidad en milisegundos para poner las letras
    startDealy: 300, //tiempo de retraso en iniciar la animacíon, aplica para cuando termina y vuelve a iniciar
    backSpeed: 65, // velocidad en milisegundos al borrar una letra
    backDelay: 900, // tiempo que la aplicación espera para que leas la palabra antes de borrarla
    loop: true, //reinicia el ciclo luego de terminarlo
    loopCount: false, // al ponerlo en false le estamos diciendo que se repita una cantidad onfinita de veces 
    contentType: 'html' // Es el formato en el que aparecera lo que se dijite si se pone null mostrara las etiquetas que se coloquen en htmls
});

//-------- GSAP ANIMATIONS -------------

gsap.to('#ilustration', { 
     duration: 2,
     ease: "sine.out",
     y: -20,
     repeat:-1,
     yoyo:true,
     }
     );

//-----------  NATIVE JS ------------------
const nav = document.querySelector('#hamburguer button');
const menu = document.querySelector('#menu-contains');
const colapsed = document.querySelector(' #menu-contains li');

nav.addEventListener('click', e =>{
    nav.classList.toggle('open');
    menu.classList.toggle('expanded-menu');
    colapsed.classList.toggle('visible');
});

