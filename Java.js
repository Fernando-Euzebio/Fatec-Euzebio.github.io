function destacar(objeto) {
    var opcao = document.getElementById(objeto);
    opcao.style.backgroundColor = "gray";

    setTimeout(function() {
        opcao.style.backgroundColor = "";
    }, 2000);
}