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
    	alert("buenos días");
    }
    else if ( hora >= 12 && hora < 19){
    	alert("buenas tardes");
    }
    else {
    	alert("buenas noches");
    }
}

Reloj();