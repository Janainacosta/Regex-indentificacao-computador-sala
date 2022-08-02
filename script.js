function validarPC() {

    let pc = document.getElementById("pc").value;
    let pcRegex = /[A-Z]{7}[0-9]{1}[A-Z]{3}[0-9]{1,2}/;
    let valid = true;
    let lab = pc.slice(3, 7);
    let maq;

    if (pc.match(pcRegex) && pc.length <= 13) {

        if (pc.slice(0, 3) !== 'LAB') valid = false;
        if (pc.slice(8, 11) !== 'MAQ') valid = false;

        if (lab === 'PROG') {
            lab = 'Programação';
        } else if (lab === 'INFO') {
            lab = 'Informática';
        } else {
            valid = false;
        }

        pc.length == 12 ? (maq = pc.slice(-1)) : (maq = pc.slice(-2));
    } else {
        valid = false;
    }

    const msgError = document.getElementsByClassName("msg");
    if (msgError.length >= 1) {
        for (let erro of msgError) {
            erro.remove();
        }
    }

    const div = document.createElement("div");
    if (valid) {
        div.innerHTML = "Máquina válida";
        div.innerHTML += `<br> Laboratório de ${lab} ${pc[7]} - Máquina nº ${maq}`;
        div.classList.add("maquina_valida", "msg");
        document.querySelector(".h1").appendChild(div);
    } else {
        div.innerHTML = "Máquina inválida";
        div.classList.add("maquina_invalida", "msg");
        document.querySelector(".h1").appendChild(div);
    }
}