var contenidoName;

function Reloj() {
    var tiempo = new Date();
    var hora = tiempo.getHours();
    var minuto = tiempo.getMinutes();
    var segundo = tiempo.getSeconds();
    document.getElementById('hora').innerHTML = hora;
    document.getElementById('minuto').innerHTML = minuto;
    document.getElementById('segundo').innerHTML = segundo;
    // setTimeout('Reloj()', 1000);
    str_hora = new String(hora);
    if (str_hora.length == 1) {
        document.getElementById('hora').innerHTML = '0' + hora;
    }
    str_minuto = new String(minuto);
    if (str_minuto.length == 1) {
        document.getElementById('minuto').innerHTML = '0' + minuto;
    }
    str_segundo = new String(segundo);
    if (str_segundo.length == 1) {
        document.getElementById('segundo').innerHTML = '0' + segundo;
    }
    if (hora < 12){
        document.getElementById('mostrarSaludo').innerHTML = "Buenos Dias," ;
    }
    else if (hora < 19){
        document.getElementById('mostrarSaludo').innerHTML = "Buenas Tardes," ;
    }
    else {
        document.getElementById('mostrarSaludo').innerHTML = "Buenas Noches," ;
    }
}
Reloj();

function nameletra(){
    var text;
    var contenidoName = document.getElementById("name").value;
    var firstLetter = contenidoName.charAt(0);
    //convertir en mayuscula
    var letterUpper = firstLetter.toUpperCase();

    switch(letterUpper) {
        case "A":
        case "M":
        case "Y":
          text = "Tu destino te espera mucha amistad";
          break;
        case "B":
        case "N":
        case "Z":
          text = "Tendras un buen empleo acompañados con un alto sueldo";
          break;
        case "C":
        case "O":
          text = "Viviras hasta los 90 años de edad";
          break;
        case "D":
        case "P":
          text = "Tendras una familia numerosa";
          break;
        case "E":
        case "Q":
          text = "Te iras a vivir al extranjero";
          break;
        case "F":
        case "R":
          text = "Viviras en una mansión";
          break;
        case "G":
        case "S":
          text = "Seras un escritor famoso";
          break;
        case "H":
        case "T":
          text = "viajaras por todo el mundo";
          break;
        case "I":
        case "U":
          text = "Tu destino es ser un artista muy famaso";
          break;
        case "J":
        case "V":
          text = "Viviras por siempre en los corazones de quienes te conozcan";
          break;
        case "K":
        case "W":
          text = " Formaras una gran empresa en varias partes del Peru";
          break;
        case "L":
        case "X":
          text = "Heredaras una granja con muchos pollitos";
          break;
        default:
          text = "Escribe tu nombre";
    }
    document.getElementById("significadoName").innerHTML = text;

}
    document.getElementById("btn").addEventListener("click", nameletra);

function numbername(){
    var contenidoName = document.getElementById("name").value;
    var nroname = contenidoName.length;
    if (nroname == 0){
        document.getElementById("nroSignificado").innerHTML = "Ingresa tu nombre";
    }else if (nroname <= 3) {
        document.getElementById("nroSignificado").innerHTML = "Tienes un espiritu muy creativo";
    }else if (nroname < 6) {
        document.getElementById("nroSignificado").innerHTML = "Eres muy noble y caritativo";
    }else if (nroname < 9) {
        document.getElementById("nroSignificado").innerHTML = "Te gusta pasar tiempo con tu familia y amigos";
    }else if (nroname < 12) {
        document.getElementById("nroSignificado").innerHTML = "Tienes un aventurero, y ers unico";
    }
}

    document.getElementById("btnNro").addEventListener("click", numbername);

function showformapellido(){
    document.getElementById("formApellido").style.display = "block";
    document.getElementById("bye").style.display = "none";
}
function showadios(){
    document.getElementById("bye").style.display = "block";
    document.getElementById("formApellido").style.display = "none";
}   
    document.getElementById("si").addEventListener("click", showformapellido);
    document.getElementById("no").addEventListener("click", showadios);

function lastnameletra(){
    
    var text;
    var contenidoName = document.getElementById("lastname").value;
    var firstLetter = contenidoName.charAt(0);
    //convertir en mayuscula
    var letterUpper = firstLetter.toUpperCase();
    
    switch(letterUpper) {
        case "A":
        case "M":
        case "Y":
          text = "tu color de suerte es el verde";
          break;
        case "B":
        case "N":
        case "Z":
          text = "Tu color de la suerte es el marron";
          break;
        case "C":
        case "O":
          text = "Tu color de la suerte es el purpura";
          break;
        case "D":
        case "P":
          text = "Tu color de la suerte es naranja";
          break;
        case "E":
        case "Q":
          text = "Tu color de la suerte es verde claro";
          break;
        case "F":
        case "R":
          text = "Tu color de la suerte es esmeralda";
          break;
        case "G":
        case "S":
          text = "Tu color de la suerte es el rosado";
          break;
        case "H":
        case "T":
          text = "Tu color de la suerte es el amarillo";
          break;
        case "I":
        case "U":
          text = "Tu color de la suerte es el rojo";
          break;
        case "J":
        case "V":
          text = "Tu color de la suerte es el plomo";
          break;
        case "K":
        case "W":
          text = "Tu color de la suerte es el crema";
          break;
        case "L":
        case "X":
          text = "Tu color de la suerte es el dorado";
          break;
        default:
          text = "Escribe tu nombre";
    }
    document.getElementById("significadoLastName").innerHTML = text;

}

document.getElementById("btnLastName").addEventListener("click", lastnameletra);


