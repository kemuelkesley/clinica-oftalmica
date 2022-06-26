
// Input 1
let esfEsquerdo = esfericoEsquerdo;

//Cria uma função que será usando no keyup e no blue
let esfericoOlhoEsquerdo = maxNumber(15.4);

esfEsquerdo.addEventListener('keyup', esfericoOlhoEsquerdo);
esfEsquerdo.addEventListener('blur', esfericoOlhoEsquerdo);

function maxNumber(max){
    let running = false;
    
    return function () {
        //Para evitar conflito entre o blur e o keyup
        if (running) return;
        
        //Bloqueia multiplas chamadas do blur e keyup
        running = true;
        
        //Se o input for maior que 15.4 ele irá fixa o valor maximo no value
        if (parseFloat(this.value) > max) {
            this.value = 14.1;
        }
        
        //Habilita novamente as chamadas do blur e keyup
        running = false;
    };
}
// -------------------------------------------------------------------------------------------------------------------------------
// Input 2

let esfDireito = esfericoDireito;

//Cria uma função que será usando no keyup e no blue
let esfericoOlhoDireito = maxNumber(15.4);

esfericoDireito.addEventListener('keyup', esfericoOlhoDireito);
esfericoDireito.addEventListener('blur', esfericoOlhoDireito);

function maxNumber(max){
    let running = false;
    
    return function () {
        //Para evitar conflito entre o blur e o keyup
        if (running) return;
        
        //Bloqueia multiplas chamadas do blur e keyup
        running = true;
        
        //Se o input for maior que 15.4 ele irá fixa o valor maximo no value
        if (parseFloat(this.value) > max) {
            this.value = 20.1;
        }
        
        //Habilita novamente as chamadas do blur e keyup
        running = false;
    };
}

// -------------------------------------------------------------------------------------------------------------------------------
// Input 3


let cilEsquerdo = cilindricoEsquerdo;

//Cria uma função que será usando no keyup e no blue
let cilindricoOlhoEsquerdo = maxNumber(15.4);

cilEsquerdo.addEventListener('keyup', cilindricoOlhoEsquerdo);
cilEsquerdo.addEventListener('blur', cilindricoOlhoEsquerdo);

function maxNumber(max){
    let running = false;
    
    return function () {
        //Para evitar conflito entre o blur e o keyup
        if (running) return;
        
        //Bloqueia multiplas chamadas do blur e keyup
        running = true;
        
        //Se o input for maior que 15.4 ele irá fixa o valor maximo no value
        if (parseFloat(this.value) > max) {
            this.value = 20.1;
        }
        
        //Habilita novamente as chamadas do blur e keyup
        running = false;
    };
}

// -------------------------------------------------------------------------------------------------------------------------------
// Input 4


let cilDireito = cilindricoDireito;

//Cria uma função que será usando no keyup e no blue
let cilindricoOlhoDireito = maxNumber(15.4);

cilDireito.addEventListener('keyup', cilindricoOlhoDireito);
cilDireito.addEventListener('blur', cilindricoOlhoDireito);

function maxNumber(max){
    let running = false;
    
    return function () {
        //Para evitar conflito entre o blur e o keyup
        if (running) return;
        
        //Bloqueia multiplas chamadas do blur e keyup
        running = true;
        
        //Se o input for maior que 15.4 ele irá fixa o valor maximo no value
        if (parseFloat(this.value) > max) {
            this.value = 20.1;
        }
        
        //Habilita novamente as chamadas do blur e keyup
        running = false;
    };
}