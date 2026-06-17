const rezas = [
  "Minha energia está protegida e nenhum mal permanece em mim.",
  "Toda energia negativa se desfaz agora e não tem força sobre mim.",
  "Meu caminho está aberto e minha proteção está firme.",
  "Eu estou em equilíbrio e cercado de boas energias.",
  "Tudo que não é positivo se afasta de mim neste momento."
];

function mostrarReza() {
  const index = new Date().getDate() % rezas.length;
  document.getElementById("rezaDia").innerText = rezas[index];
}

function novaReza() {
  const index = Math.floor(Math.random() * rezas.length);
  document.getElementById("rezaDia").innerText = rezas[index];
}

mostrarReza();

tsParticles.load("particles", {
  background: { color: "transparent" },
  particles: {
    number: { value: 60 },
    color: { value: "#00ffcc" },
    links: {
      enable: true,
      distance: 120,
      color: "#00ffcc",
      opacity: 0.2
    },
    move: { enable: true, speed: 1 },
    size: { value: 2 }
  }
});

const mensagens = [
  "Seja firme. O que é seu já está a caminho.",
  "Nem toda energia merece sua atenção.",
  "O que foi travado começa a se abrir.",
  "Confie no processo, mesmo sem entender.",
  "Algo bom está sendo preparado para você.",
  "Afaste-se do que pesa, aproxime-se do que fortalece."
];

function gerarMensagem() {
  const index = Math.floor(Math.random() * mensagens.length);
  document.getElementById("mensagemOraculo").innerText = mensagens[index];
}