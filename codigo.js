let usuario = prompt("¡Bienvenidx a tu lista de tareas! ¿Cúal es tu nombre?")
let ingreso = confirm("¿Quieres comenzar tu lista de tareas?")

let tarea
let hora
let importancia

let masTareas

const admImportancia = () => {
        switch (importancia) {
            case `1`: console.log("POCO IMPORTANTE");
            break;
            case `2`: console.log("IMPORTANTE");
            break;
            case `3`: console.log("MUY IMPORTANTE");
            break;
            default: console.log("NO INGRESO IMPORTANCIA");
            break;
        }
    }

const tareasDiarias = () => {
    
    tarea = prompt(usuario + ", ¿Que tenes que hacer hoy?")
    hora = prompt("¿A qué hora?")
    importancia = prompt("Ingresa \n 1 si esta tarea es POCO IMPORTANTE \n 2 si esta tarea es IMPORTANTE \n 3 si esta tarea es MUY IMPORTANTE")

    admImportancia()
}

if (ingreso == true) {
    tareasDiarias()
    alert (`Excelente, ${usuario}. ${tarea} se agrego a tus tareas en este horario: ${hora}`)

    masTareas = confirm("¿Queres ingresar una nueva tarea?")

    while (masTareas == true) {
        tareasDiarias()
        alert (`Excelente, ${usuario}. ${tarea} se agrego a tus tareas en este horario: ${hora}`)

        masTareas = confirm("¿Queres ingresar una nueva tarea?")
    }

} else {
    alert("Podes volver a armar tu lista de tareas cuando desees...")
}