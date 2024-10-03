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
let 

function mostraPergunta(){
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativa){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        botaoAlternativas.addEventListener("click",function(){
            posicao++;
            mostraPergunta();
        });
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}
mostraPergunta();
