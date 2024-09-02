
/*Criando costante do formulario*/
const form = document.getElementById('form-meta');
const nomeUsuario = document.getElementById('nome-usuario');
const salarioAtual = document.getElementById('salario-atual');
const salarioAlmejado = document.getElementById('salario-almejado');
let nomeEValido = false;
let valorValido = false;

/*criando a função para garantir nome completo*/
function validaNome(nomeCompleto) {
    const nomeComArray = nomeCompleto.split(' ');
    return nomeComArray.length >= 2; 
}

/*criando uma função para que o salario desejado seja maior que o atual*/
function validaSalario(salarioAtualValor,salarioAlmejadoValor){
    return Number(salarioAlmejadoValor) > Number (salarioAtualValor);
}

/*Fazendo com que a pagina não recarregue após o submit*/
form.addEventListener('submit',function(e) {
    e.preventDefault();

    /*  constantes para mensagem de conclusao */
    const planoInfalivel = document.getElementById('plano');
    const mensagemConclusao = `Muito bem <b>${nomeUsuario.value}</b>! para alavancar seu salário de R$<b>${salarioAtual.value}</b> para R$<b>${salarioAlmejado.value}</b>, você deve: <b>${planoInfalivel.value}</b>`;

    nomeEValido = validaNome(nomeUsuario.value);/*chamando a validação do nome*/
    valorValido = validaSalario(salarioAtual.value,salarioAlmejado.value);/*chamando a validação do salario*/

    //corrigindo borda vermelha persistente
    document.querySelector('.mensagem-erro').style.display='none';
    nomeUsuario.style.border = '1px solid #ccc';
    document.querySelector('.mensagemValor-erro').style.display='none';
    salarioAlmejado.style.border = '1px solid #ccc';

    /*condicional para informar ao usuario que o nome não esta completo*/
    if(nomeEValido && valorValido){
        const containerMessagemConclusao = document.querySelector('.succes-message'); /*escrevendo a mensagem com estilização*/
        containerMessagemConclusao.innerHTML = mensagemConclusao;
        containerMessagemConclusao.style.display = 'block';

        /*limpando campos após conclusâo*/
        nomeUsuario.value = '';
        salarioAtual.value ='';
        salarioAlmejado.value ='';
        planoInfalivel.value ='';
    } else {
        if (!nomeEValido) {
            document.querySelector('.mensagem-erro').style.display = 'block';
            nomeUsuario.style.border = '1px solid red';
        }
        if (!valorValido) {
            document.querySelector('.mensagemValor-erro').style.display = 'block';
            salarioAlmejado.style.border = '1px solid red';
        }
    }
})
/*fazendo aparecer a mensagem de erro do nome ao digitar o nome */
nomeUsuario.addEventListener('keyup', function(e){
    nomeEValido = validaNome(e.target.value);
    if(!nomeEValido){
        document.querySelector('.mensagem-erro').style.display='block';
        nomeUsuario.classList.add('error');
    } else {
        document.querySelector('.mensagem-erro').style.display='none';
        nomeUsuario.classList.remove('error');//removendo a mensagem
    }
    console.log(e.target.value)
})
/*Fazendo aparecer mensagem de erro ao colocar o valor menor*/
salarioAlmejado.addEventListener('keyup', function(e){
    valorValido = validaSalario(salarioAtual.value,e.target.value);
    if(!valorValido){
        document.querySelector('.mensagemValor-erro').style.display = 'block';
        salarioAlmejado.classList.add('error')
    } else {
        document.querySelector('.mensagemValor-erro').style.display='none';
        salarioAlmejado.classList.remove('error');//removendo a mensagem
    }
    console.log(e.target.value)
})