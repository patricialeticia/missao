const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado:"Como os hábitos alimentares variam em diferentes culturas ao redor do mundo?",
        alternativas: [
            {
                texto:"A falta de compreensão e respeito pela cultura alimentar de uma comunidade pode levar à marginalização e à perda de tradições valiosas!",
               afirmacao:"Promover a educação alimentar, ensinando às gerações futuras sobre a importância de preservar  culinárias"
            },
            {
                texto:"Os hábitos alimentares variam de acordo com os recursos disponíveis, as tradições culturais, as crenças religiosas e os aspectos socioeconômicos de cada região!",
                afirmacao:"Promover a conscientização sobre a diversidade dos hábitos alimentares em diferentes culturas por meio de programas educacionais"
            }
                 
        ]
    },
];
let atual = 0;
let perguntaAtual;
let historiaFinal="";

function mostraPergunta() {
    if(atual>= perguntas.length){
        mostraResultado();
        return;
    }culturas
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent="";
    mostraAlternativas();
}

function mostraAlternativas()
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () =>respostaSelecionada(alternativa)); {
        caixaAlternativas.appendChild(botaoAlternativas);
     }
}
mostraPergunta();


function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historia += afirmacoes + "";
    atual++;
    mostraPergunta();
}
  function mostraResultado(){
    caixaPerguntas.textContent="Em 2049...";
    textoResultado.textContent=historiaFinal;
    caixaAlternativas.textContent="";
  }
 mostraPergunta();
