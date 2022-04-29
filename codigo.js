let usuario = prompt("¡Bienvenidx a tu lista de tareas! ¿Cúal es tu nombre?")

let tarea = prompt(usuario + ", ¿Qué tenes que hacer hoy?")

while (tarea != "OK") {
    alert(tarea + " se sumo a tu lista de tareas.")
    tarea = prompt("¿Queres sumar otra tarea? Sino ingresa OK")
}

