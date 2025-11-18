// CPF 000.000.000-00
document.getElementById("cpf").addEventListener("input", function () {
    let v = this.value.replace(/\D/g, "");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    this.value = v;
});

// Telefone (00) 00000-0000
document.getElementById("telefone").addEventListener("input", function () {
    let v = this.value.replace(/\D/g, "");
    v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
    v = v.replace(/(\d{5})(\d)/, "$1-$2");
    this.value = v;
});

// CEP 00000-000
document.getElementById("cep").addEventListener("input", function () {
    let v = this.value.replace(/\D/g, "");
    v = v.replace(/(\d{5})(\d)/, "$1-$2");
    this.value = v;
});