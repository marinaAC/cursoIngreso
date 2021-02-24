/**
 * Enunciado:
Bienvenidos (SWITCH).
pedir el ingreso de un planeta del sistema solar
Si es la tierra mostrar "acá vivimos".
Si está más cerca del sol, "acá hace más calor".
Si está más lejos del sol, "acá hace más frio".
Si no es un planeta valido informarlo.
Aclaración: los planetas se ingresan en minúscula 
(Mercurio y Venus están antes que la tierra).
 */

function mostrar()
{
    var planeta;
    planeta = prompt("Ingrese un planeta");
/*
    switch (planeta) {
        case "mercurio":
        case "venus":
            alert("aca hace mas calor");
            break;
        case "tierra":
            alert("Aca vivimos");
            break;
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
            alert("aca hace frio");
            break;
        default:
            alert("No es un planeta valido");
            break;
    }*/

    if(planeta=="tierra")
    {
        alert("aca vivimos");
    }
    else
    {
        if(planeta=="mercurio" || planeta == "venus")
        {
            alert("aca hace mas calor");
        }
        else
        {
            if(planeta=="marte"||
                planeta == "jupiter" ||
                planeta == "saturno" ||
                planeta == "urano" ||
                planeta == "neptuno")
                {
                    alert("aca hace frio"); 
                }
                else 
                {
                    alert("No es un planeta valido");
                }
            switch (planeta) {
                case "marte": "MARTE"
                case "jupiter":
                case "saturno":
                case "urano":
                case "neptuno":
                    alert("aca hace frio");
                    break;
                default:
                    alert("No es un planeta valido");
                    break;
            }
        }
        
    }

}
