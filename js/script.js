// Grau Esferico

let esfericoEsquerdo =  document.querySelector('#esferico__esquerdo');
let esfericoDireito =  document.querySelector('#esferico__direito');


// Grau cilindrico
let cilindricoEsquerdo =  document.querySelector('#cilindrico__esquerdo');
let cilindricoDireito =  document.querySelector('#cilindrico__direito');


// Botão calcular
let = buttonCalc = document.querySelector('#enter');

// Botão de Limpar
let clickBotao = document.querySelector('#reset');

// Div que vai ficar oculta.

let esconderCampo = document.querySelector('#div__oculta');


// Calcular todos os campos
function calcularCampos(){
    buttonCalc.addEventListener('click', () => {
        let calcular = Number(esfericoEsquerdo.value) + Number(esfericoDireito.value) + Number(cilindricoEsquerdo.value) + Number(cilindricoDireito.value)
        console.log(typeof(calcular));
        console.log(calcular);
                         
        if(calcular > 10){
            alert('valor maior que 10')
            
        }
        divInvisivelBotaoCalcular();
        
    });
    
    
}


// Limpar os dados do Formulario
function limparCampos(){
    clickBotao.addEventListener('click', function(){
    
        esfericoEsquerdo.value = '';
        esfericoDireito.value = '';
        cilindricoEsquerdo.value = '';
        cilindricoDireito.value = '';
         
        divInvisivelBotaoLimpar();
       
    });
}

function divInvisivelBotaoCalcular(){
        
    if(esconderCampo.style.display === 'block'){
        esconderCampo.style.display = 'none';
    }else {
        esconderCampo.style.display = 'block';
    }
}

function divInvisivelBotaoLimpar(){
    if(esconderCampo.style.display === 'block'){
        esconderCampo.style.display = 'none'
    }
}


// Chamando Funcões

calcularCampos();
limparCampos();

