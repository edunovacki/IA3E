const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [//abre a lista de objetos (itens)
    {//abre o item
        enunciado:"Você gosta da Inteligência Artificial?",
        alternativas:[{
            texto:"Sim",
            afirmação:"Afirmação da alternativa 1"
        },
        {
            texto:"Não",
            afirmação:"Afirmação da alternativa 2"
        }
        ]
    },
    {
        enunciado:"Você utiliza a Inteligência Artificial?",
        alternativas:[{
            texto:"Sim",
            afirmação:"Afirmação da alternativa 1"
        },
        {
            texto:"Não",
            afirmação:"Afirmação da alternativa 2"
        }
        ]
    },
    {
        enunciado:"Você tem medo da Inteligência Artificial?",
        alternativas:[{
            texto:"Sim",
            afirmação:"Afirmação da alternativa 1"
        },
        {
            texto:"Não",
            afirmação:"Afirmação da alternativa 2"
        }
        ]
    }
]
let posicao = 0;
let perguntaAtual;
let respostas = "";

function mostraPergunta(){
    i (posicao>=perguntas.lenght){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    caixaAlternativa.textContent = " ";
    mostraAlternativas();
}
function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativa){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        botaoAlternativas.addEventListener("click",() => respostasSelecionadas(alternativa));
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}
function respostasSelecionadas(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmação;
    respostas = afirmacoes;
    posicao++;
    mostraPergunta();
}
function mostraResultado(){
    caixaPergunta.textContent = "Daqui a 10 anos...";
}
mostraPergunta();
