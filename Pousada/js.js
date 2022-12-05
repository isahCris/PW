function verificar(){
    var nome = document.getElementById('nome').value;

    if ((document.getElementById('nome').value == '')  ||
        (document.getElementById('nome').value.length < 2)) 
    {
        alert("Preencha o nome corretamente!");
    }
    else
    {
        alert(nome);
    }
}

function calcular(){
    var qtdeHospede, qtdeDiaria, slcSuite, nomeProduto, valorUnitario, adicionais = 0, valorTotal,valorDiaria,comida;
    
    slcSuite = document.getElementById("slcSuite");
    qtdeHospede = document.getElementById("qtdeHospede").value;
    slcSuiteValue = slcSuite.options[slcSuite.selectedIndex].value;
    qtdeDiaria = document.getElementById("qtdeDiaria").value;


    //Radio button
    var entrega = parseInt(document.form.rdEntrega.value);

    if(entrega==1){
        comida = 30.00;
    }
    else if (entrega==2){
        comida = 60.00;
    }
    else{
        comida=120.00;
    }

    //Checkbox
    if (document.getElementById('traslado').checked) {
        adicionais = adicionais + 50.00;
    }
    if (document.getElementById('tuor').checked == true){
        adicionais = adicionais + 70.00;
    }
    if (document.getElementById('passeio').checked == true){
        adicionais = adicionais + 100.00;
    }

    switch(slcSuiteValue){
        case "1":
            valorDiaria = 155.00;
            document.getElementById('nomeProduto').innerHTML= "Paz";
            valorUnitario = 399.99;
            document.getElementById('valorUnitario').innerHTML = "Valor por pessoa: R$" +valorUnitario;
            document.getElementById('valorTotal').innerHTML = "Valor Total:  " + "R$" + valorTotal;
            document.getElementById('adicionais').innerHTML = "Valores adicionais: R$" + adicionais;
            document.getElementById('comida1').innerHTML = "Valor refeição: " + "R$" + comida;
            document.getElementById('diaria').innerHTML = "diaria: R$" +valorDiaria;
            valorTotal = (valorUnitario*qtdeHospede)+(valorDiaria*qtdeDiaria)+adicionais+comida;
            document.getElementById('valorTotal').innerHTML = "Valor Total:R$" + valorTotal;
            break;
        case "2":
            valorDiaria = 275.00;
            valorUnitario = 499.99;
            document.getElementById('nomeProduto').innerHTML = "Ilheiro";
            document.getElementById('valorUnitario').innerHTML = "Valor por Pessoa R$" + valorUnitario;
            document.getElementById('adicionais').innerHTML = "Valores adicionais: R$" + adicionais;
            document.getElementById('comida1').innerHTML = "Valor refeição: R$" + comida;
            document.getElementById('diaria').innerHTML = "Valor da Diaria:R$" + valorDiaria;
            valorTotal = (valorUnitario*qtdeHospede)+(valorDiaria*qtdeDiaria)+adicionais+comida;
            document.getElementById('valorTotal').innerHTML = "Valor Total:R$" + valorTotal;
            break;
            
        case "3":
            valorDiaria = 345.00;
            document.getElementById('nomeProduto').innerHTML = "Carmesim";
            valorUnitario = 699.99;
            document.getElementById('valorUnitario').innerHTML = "Valor por Pessoa : R$" + valorUnitario;
            document.getElementById('adicionais').innerHTML = "Valores adicionais: R$" + adicionais;
            document.getElementById('comida1').innerHTML = "Valor refeição: R$" + comida;
            document.getElementById('diaria').innerHTML = "Valor da Diaria:R$" + valorDiaria;
            valorTotal = (valorUnitario*qtdeHospede)+(valorDiaria*qtdeDiaria)+adicionais+comida;
            document.getElementById('valorTotal').innerHTML = "Valor Total:R$" + valorTotal;
            break;
        case "4":
            valorDiaria = 106.00;
            document.getElementById('nomeProduto').innerHTML = "Carinho";
            valorUnitario = 299.99;
            document.getElementById('valorUnitario').innerHTML = "Valor por pessoa: R$" + valorUnitario;
            document.getElementById('adicionais').innerHTML = "Valores adicionais: R$" + adicionais;
            document.getElementById('comida1').innerHTML = "Valor refeição: R$" + comida;
            document.getElementById('diaria').innerHTML = "Valor da Diaria : R$" + valorDiaria;
            valorTotal = (valorUnitario*qtdeHospede)+(valorDiaria*qtdeDiaria)+adicionais+comida;
            document.getElementById('valorTotal').innerHTML = "Valor Total:R$" + valorTotal;
            break;
        case "5":
            valorDiaria = 85.75;
            document.getElementById('nomeProduto').innerHTML = "Afeto";
            valorUnitario = 999.99;
            document.getElementById('valorUnitario').innerHTML = "Valor por pessoa: R$" + valorUnitario;
            document.getElementById('adicionais').innerHTML = "Valores adicionais: R$" + adicionais;
            document.getElementById('comida1').innerHTML = "Valor refeição: R$" + comida;
            document.getElementById('diaria').innerHTML = "Valor da Diaria : R$" + valorDiaria;
            valorTotal = (valorUnitario*qtdeHospede)+(valorDiaria*qtdeDiaria)+adicionais+comida;
            document.getElementById('valorTotal').innerHTML = "Valor Total:R$" + valorTotal;
            break;
        case "6":
            valorDiaria = 700.00;
            document.getElementById('nomeProduto').innerHTML = "Harmonia";
            valorUnitario = 870.00;
            document.getElementById('valorUnitario').innerHTML = "Valor por pessoa: R$" + valorUnitario;
            document.getElementById('adicionais').innerHTML = "Valores adicionais: R$" + adicionais;
            document.getElementById('comida1').innerHTML = "Valor refeição: R$" + comida;
            document.getElementById('diaria').innerHTML = "Valor da Diaria : R$" + valorDiaria;
            valorTotal = (valorUnitario*qtdeHospede)+(valorDiaria*qtdeDiaria)+adicionais+comida;
            document.getElementById('valorTotal').innerHTML = "Valor Total:R$" + valorTotal;
            break;
        default:
            valorUnitario = "Selecione Alguma Suite";
            document.getElementById('valorUnitario').innerHTML = "Selecione uma Suíte Válida";
            break;
    }
    
}
