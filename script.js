function validarTexto(estado) {
    var mensaje_encontrado = document.getElementById('encontrado');
    var boton_copiar = document.getElementById("btn-copiar");
    if(estado) {
        mensaje_encontrado.style.display = 'block'; 
        boton_copiar.style.display = 'none';
    }
    else {
        mensaje_encontrado.style.display = 'none';
        boton_copiar.style.display = 'block';
    }
}

function encriptar() {
    var texto = document.getElementById("input-texto");
    var texto2 = document.getElementById("texto2");
    texto = texto.value.toLowerCase();
    var estado = false;
    if (texto == '') { 
        estado = true;
	}
    validarTexto(estado);
    var txtCifrado = texto.replaceAll("e","enter");
    var txtCifrado = txtCifrado.replaceAll("o","ober");
    var txtCifrado = txtCifrado.replaceAll("i","imes");
    var txtCifrado = txtCifrado.replaceAll("a","ai");
    var txtCifrado = txtCifrado.replaceAll("u","ufat");
    texto2.value = txtCifrado;
    document.getElementById("input-texto").value = "";
}

function desencriptar() {
    var texto = document.getElementById("input-texto");
    var texto2 = document.getElementById("texto2");
    texto = texto.value.toLowerCase();
    var estado = false;
    if (texto == '') { 
        estado = true;
	}
    validarTexto(estado);
    var txtCifrado = texto.replaceAll("enter","e");
    var txtCifrado = txtCifrado.replaceAll("ober","o");
    var txtCifrado = txtCifrado.replaceAll("imes","i");
    var txtCifrado = txtCifrado.replaceAll("ai","a");
    var txtCifrado = txtCifrado.replaceAll("ufat","u");
    texto2.value = txtCifrado;
    document.getElementById("input-texto").value = "";
}

function copiar() {
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
    document.getElementById("texto2").value = "";
    document.getElementById("btn-copiar").style.display = 'none';
}

