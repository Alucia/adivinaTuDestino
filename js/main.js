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
    var firstLetter = document.getElementById("name").value.charAt(0);
    //convertir en mayuscula
    var letterUpper = firstLetter.toUpperCase();

  switch(letterUpper) {
    case "A":
    case "M":
    case "Y":
      text = "Tu destino te espera con buena fortuna, salud y mucha amistad";
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
      text = "Te iras a vivir al extranjero, donde te casaras";
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
      text = "I am not a fan of orange.";
      break;
    case "L":
    case "X":
      text = "Heredaras una granja con muchos pollitos";
      break;
  }
  document.getElementById("significadoName").innerHTML = text;
}
document.getElementById("btn").addEventListener("click", nameletra);

