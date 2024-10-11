const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [//abre a lista de objetos (itens)
    {//abre o item
        enunciado: "Você tem cachorro?",
        alternativas: [{
            texto: "Sim, eu tenho",
            afirmação: "Afirmação da alternativa 1"
        },
        {
            texto: "Não, eu não tenho",
            afirmação: "Afirmação da alternativa"
        }
        ]
    },
    {
        enunciado: "Você tem gato?",
        alternativas: [{
            texto: "Sim, eu tenho",
            afirmação: "Afirmação da alternativa 1"
        },
        {
            texto:"Não, eu não tenho",
            afirmação:"Afirmação da alternativa 2"
        }
        ]
    },
    {
        enunciado: "Você gosta de animais?",
        alternativas: [{
            texto: "Sim, eu gosto",
            afirmação: "Afirmação da alternativa 1"
        },
        {
            texto: "Não, eu não gosto",
            afirmação: "Afirmação da alternativa"
        }
        ]
    }
]
let posicao = 0;
let perguntaAtual;
let respostas = "";


function mostraPergunta() {
    if (posicao>=perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    caixaAlternativa.textContent = " ";
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",  () => respostasSelecionadas(alternativa));
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}
function respostasSelecionadas(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmação;
    respostas += afirmacoes + " ";
    posicao++;
    mostraPergunta();
}
function mostraResultado(){
    caixaPergunta.textContent = "Confira suas respostas: ";
    textoResultado.textContent = respostas; 
    caixaAlternativa.textContent = "";
}
mostraPergunta();