function irAPagina() {
    var select = document.getElementById("grupoSelect");
    var pagina = select.value;
    if (pagina) {
        window.location.href = pagina;
    } else {
        alert("Por favor, selecciona un grupo.");
    }
}

