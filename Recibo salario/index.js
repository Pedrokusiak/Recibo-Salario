
window.addEventListener("load", obtainDate);
const extenso = require('numero-por-extenso');
//Validacao se os campos estao preenchidos
function validarCampos() {
    var valor = document.getElementById("valor");
    var empregado = document.getElementById("empregado");
    var aTituloDe = document.getElementById("aTituloDe");
    var remuneracaoMensal = document.getElementById("remuneracaoMensal");
    var empregador = document.getElementById("empregador");
    var cpf_cnpj = document.getElementById("cpf_cnpj");
    var cidade = document.getElementById("cidade");
    var data = document.getElementById("data");
    if (valor.value <= 0) {
        valor.style.border = "1px solid red";
        valor.style.outline = "1px solid red";
        valor.focus();
        return false;
    } else {
        valor.style.border = "";
        valor.style.outline = "";
    }
    if (empregado.value <= 0) {
        empregado.style.border = "1px solid red";
        empregado.style.outline = "1px solid red";
        empregado.focus();
        return false;
    } else {
        empregado.style.border = "";
        empregado.style.outline = "";
    }
    if (aTituloDe.value <= 0) {
        aTituloDe.style.border = "1px solid red";
        aTituloDe.style.outline = "1px solid red";
        aTituloDe.focus();
        return false;
    } else {
        aTituloDe.style.border = "";
        aTituloDe.style.outline = "";
    }
    if (remuneracaoMensal.value <= 0) {
        remuneracaoMensal.style.border = "1px solid red";
        remuneracaoMensal.style.outline = "1px solid red";
        remuneracaoMensal.focus();
        return false;
    } else {
        remuneracaoMensal.style.border = "";
        remuneracaoMensal.style.outline = "";
    }
    if (empregador.value <= 0) {
        empregador.style.border = "1px solid red";
        empregador.style.outline = "1px solid red";
        empregador.focus();
        return false;
    } else {
        empregador.style.border = "";
        empregador.style.outline = "";
    }
    if (!(validaCpf(cpf_cnpj.value) || validaCnpj(cpf_cnpj.value))) {
        cpf_cnpj.style.border = "1px solid red";
        cpf_cnpj.style.outline = "1px solid red";
        cpf_cnpj.focus();
        return false;
    } else {
        cpf_cnpj.style.border = "";
        cpf_cnpj.style.outline = "";
    }
    if (cidade.value <= 0) {
        cidade.style.border = "1px solid red";
        cidade.style.outline = "1px solid red";
        cidade.focus();
        return false;
    } else {
        cidade.style.border = "";
        cidade.style.outline = "";
    }
    if (data.value <= 0) {
        data.style.border = "1px solid red";
        data.style.outline = "1px solid red";
        data.focus();
        return false;
    } else {
        data.style.border = "";
        data.style.outline = "";
    }
    return true;
}




function validaCpf(cpf){
    if ( !cpf || cpf.length != 11
            || cpf == "00000000000"
            || cpf == "11111111111"
            || cpf == "22222222222" 
            || cpf == "33333333333" 
            || cpf == "44444444444" 
            || cpf == "55555555555" 
            || cpf == "66666666666"
            || cpf == "77777777777"
            || cpf == "88888888888" 
            || cpf == "99999999999" )
        return false;
    var soma = 0
    var resto
    for (var i = 1; i <= 9; i++) 
        soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i)
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11))  resto = 0
    if (resto != parseInt(cpf.substring(9, 10)) ) return false
    soma = 0
    for (var i = 1; i <= 10; i++) 
        soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i)
    resto = (soma * 10) % 11
    if ((resto == 10) || (resto == 11))  resto = 0
    if (resto != parseInt(cpf.substring(10, 11) ) ) return false
    return true
};

function validaCnpj(cnpj) {
    if ( !cnpj || cnpj.length != 14
            || cnpj == "00000000000000" 
            || cnpj == "11111111111111" 
            || cnpj == "22222222222222" 
            || cnpj == "33333333333333" 
            || cnpj == "44444444444444" 
            || cnpj == "55555555555555" 
            || cnpj == "66666666666666" 
            || cnpj == "77777777777777" 
            || cnpj == "88888888888888" 
            || cnpj == "99999999999999")
        return false
    var tamanho = cnpj.length - 2
    var numeros = cnpj.substring(0,tamanho)
    var digitos = cnpj.substring(tamanho)
    var soma = 0
    var pos = tamanho - 7
    for (var i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--
      if (pos < 2) pos = 9
    }
    var resultado = soma % 11 < 2 ? 0 : 11 - soma % 11
    if (resultado != digitos.charAt(0)){
        return false;
    }
    tamanho = tamanho + 1
    numeros = cnpj.substring(0,tamanho)
    soma = 0
    pos = tamanho - 7
    for (var i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--
      if (pos < 2) pos = 9
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11
    if (resultado != digitos.charAt(1)) return false
    return true;
}
// Tratamento mes atual
function obtainDate() {
    let date = new Date();
    date.setDate(1);
    let month = date.toLocaleString("pt-br", { month: "long" });
    document.getElementById("remuneracaoMensal").value = capitalize(month) + " " + date.getFullYear();
}
// Tratamento data atual
function mostrarDataAtual() {

    var dataInput = document.getElementById("data");
    var dataAtual = new Date();
    var dataAtualFormatada = dataAtual.toISOString().substr(0, 10);
    dataInput.value = dataAtualFormatada;
}


function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function radioSelected(radio) {
    radio.value === "PIX" && radio.checked ?
        document.styleSheets.item(0).cssRules.item(27).style.display = "block" :
        document.styleSheets.item(0).cssRules.item(27).style.display = "none"; //row-chave
}

function openModal() {
    if (validarCampos()) {
        obtainValueForm();
        writeModal();
        document.getElementById("modal").style.display = "block";
    }
}


window.onclick = function (event) {
    if (event.target === modal) document.getElementById("modal").style.display = "none";
}

function obtainValueForm() {
    valor = document.getElementById("valor").value;
    empregado = document.getElementById("empregado").value;
    aTituloDe = document.getElementById("aTituloDe").value;
    remuneracaoMensal = document.getElementById("remuneracaoMensal").value;
    empregador = document.getElementById("empregador").value;
    cpfCnpj = document.getElementById("cpf_cnpj").value;
    cidade = document.getElementById("cidade").value;
    data = new Date(document.getElementById("data").value);
    chave = document.getElementById("chave").value;
}

function writeModal() {
    document.getElementById("valorWrite").textContent = valor;
    document.getElementById("empregadoWrite").textContent = empregado.toUpperCase();
    document.getElementById("aTituloDeWrite").textContent = aTituloDe.toUpperCase();
    document.getElementById("remuneracaoMensalWrite").textContent = remuneracaoMensal.toUpperCase();
    document.getElementById("empregadorWrite").textContent = empregador.toUpperCase();
    document.getElementById("cpf_cnpjWrite").textContent = cpfCnpj.length > 14 ? "CNPJ: " + cpfCnpj : "CPF: " + cpfCnpj;
    document.getElementById("cidadeWrite").textContent = cidade;
    document.getElementById("dataWrite").textContent = data.getDate() + " de " + capitalize(data.toLocaleString("pt-br", { month: "long" })) + " de " + data.getFullYear();
    // document.getElementById("chaveWrite").textContent = chave;
    document.getElementById("assinaturaWrite").textContent = empregado;
}



function converter() {
    let valor = document.getElementById("valor").value;
    let extenso = numeroPorExtenso(valor);
    document.getElementById("extensoWrite").value = extenso;
  }
  
  function numeroPorExtenso(numero) {
    let unidades = ['', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove'];
    let dezenas = ['', 'dez', 'vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'];
    let dezenasEspeciais = ['dez', 'onze', 'doze', 'treze', 'quatorze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'dezenove'];
    let centenas = ['', 'cento', 'duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setecentos', 'oitocentos', 'novecentos'];
    let milhares = ['', 'mil', 'milhões', 'bilhões', 'trilhões', 'quatrilhões', 'quintilhões', 'sextilhões', 'setilhões', 'octilhões', 'nonilhões', 'decilhões'];
  
    let num = parseInt(numero);
    let extenso = '';
  
    if (num == 0) return 'zero';
  
    if (num < 0 || num >= 10000000) {
      return 'Número inválido';
    }
    if (num >= 1000000) {
        let milhar = Math.floor(num / 1000);
        extenso = numeroPorExtenso(milhar) + ' ' + milhares[1];
        num %= 1000;
        if (num > 0) {
          if (num < 100) {
            extenso += ' e ';
          } else {
            extenso += ', ';
          }
        }
      }
    
    if (num >= 1000) {
      let milhar = Math.floor(num / 1000);
      extenso = numeroPorExtenso(milhar) + ' ' + milhares[2];
      num %= 1000;
      if (num > 0) {
        if (num < 100) {
          extenso += ' e ';
        } else {
          extenso += ', ';
        }
      }
    }
  
    if (num >= 100) {
      let centena = Math.floor(num / 100);
      extenso += centenas[centena];
      num %= 100;
      if (num > 0) {
        extenso += ' e ';
      }
    }
  
    if (num >= 10 && num < 20) {
      extenso += dezenasEspeciais[num - 10];
    } else if (num >= 20) {
      let dezena = Math.floor(num / 10);
      extenso += dezenas[dezena];
      num %= 10;
      if (num > 0) {
        extenso += ' e ';
      }
    }
  
    if (num >= 1 && num < 10) {
      extenso += unidades[num];
    }
    extenso += " Reais";
    return extenso.trim();
  }

function fecharModal() {
    document.getElementById("modal").style.display = "none";
}

