/* Recuperar Informações*/
const hoje = document.querySelector('#dia');
const formulario = document.querySelector('#formulario');
const entrada = document.querySelector('#entrada');
const listaDeTarefas = document.querySelector('#listaTarefas')
const tarefa = document.querySelector('.tarefa');
const btnConcluir = document.querySelector('.concluir');
const btnDeletar = document.querySelector('.deletar');
const Data = new Date();


/* Funções */ 
function setarDia() {
    let diaDoMes = Data.getDate() < 10 ? `0${Data.getDate()}` : Data.getDate();
    return diaDoMes;
};

function setarDiaSemana() {
    let nomeDiaDaSemana = {
        1: "Domingo",
        2: "Segunda",
        3: "Terça",
        4: "Quarta",
        5: "Quinta",
        6: "Sexta",
        7: "Sábado"
    };

    let diaSemana = nomeDiaDaSemana[Data.getDay()+1];
    return diaSemana;
};

function setarMes() {
    let nomeMes = {
        1: "Janeiro",
        2: "Fevereiro",
        3: "Março",
        4: "Abril",
        5: "Maio",
        6: "Junho",
        7: "Julho",
        8: "Agosto",
        9: "Setembro",
        10: "Outubro",
        11: "Novembro",
        12: "Dezembro"
    };

    let mes = nomeMes[Data.getMonth()+1];
    return mes;
};

function pegarDia() {
    /*Sábado, 27 de Janeiro */
    hoje.innerHTML = `${setarDiaSemana()}, ${setarDia()} de ${setarMes()}`;
}
pegarDia();

function criarTarefa() {
    // <li class="tarefa concluida">
    //     <h3>Refazer Design do ToDo List</h3>
    //     <div class="botoes">
    //         <button class="concluir">
    //             <i class="fa-solid fa-check-double"></i>
    //         </button>
    //         <button class="deletar">
    //             <i class="fa-solid fa-trash"></i>
    //         </button>
    //     </div>
    // </li>
}


/* Ações */
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    criarTarefa()
})