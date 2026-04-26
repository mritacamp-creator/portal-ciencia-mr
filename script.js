// O Banco de Dados
const bancoDeDados = {
    dinossauros: [
        {
            id: "stauricossauro",
            nome: "Estauricossauro",
            subtitulo: "Período Triássico",
            descricao: "Um predador ágil que viveu no que hoje é o Brasil. Tinha cerca de 2 metros de comprimento.",
            animacao: "animacoes/estauricossauro.mp4",
            som: "sons/rugido-estauricossauro.mp3"
        },
        {
            id: "braquiossauro",
            nome: "Braquiossauro",
            subtitulo: "Período Jurássico",
            descricao: "Um dos maiores animais que já caminharam sobre a Terra. O seu pescoço permitia comer folhas em árvores altas.",
            animacao: "animacoes/braquiossauro.mp4",
            som: "sons/rugido-braquiossauro.mp3"
        },
        {
            id: "t-rex",
            nome: "Tiranossauro Rex",
            subtitulo: "Período Cretáceo",
            descricao: "O rei dos dinossauros. Tinha a mordida mais poderosa de qualquer animal terrestre já conhecido.",
            animacao: "animacoes/t-rex.mp4",
            som: "sons/trex.mp3"
        }
    ]
};

let audioAtual = null;

function carregarPaleontologia() {
    const trilha = document.getElementById('linha-do-tempo-dinos');
    trilha.innerHTML = ''; // Limpa antes de renderizar
    
    bancoDeDados.dinossauros.forEach(item => {
        const div = document.createElement('div');
        div.className = 'cartao-item';
        div.onclick = () => abrirModalFoco(item.id, 'dinossauros');
        
        // Usando a classe de thumbnail para manter a proporção correta
        div.innerHTML = `
            <video class="video-thumbnail" src="${item.animacao}" autoplay loop muted playsinline></video>
            <h3>${item.nome}</h3>
            <p>${item.subtitulo}</p>
        `;
        trilha.appendChild(div);
    });
}

function tocarSom(caminhoDoSom) {
    if (audioAtual) { audioAtual.pause(); audioAtual.currentTime = 0; }
    audioAtual = new Audio(caminhoDoSom);
    audioAtual.play();
}

function abrirModalFoco(id, categoria) {
    const item = bancoDeDados[categoria].find(d => d.id === id);
    const conteudo = document.getElementById('conteudo-foco');
    
    // Separamos o vídeo da caixa de texto para um visual premium
    conteudo.innerHTML = `
        <video class="video-destaque" src="${item.animacao}" controls autoplay loop muted playsinline></video>
        
        <div class="conteudo-texto-modal">
            <h2>${item.nome}</h2>
            <span class="subtitulo">${item.subtitulo}</span>
            <p class="descricao">${item.descricao}</p>
            <button class="botao-som" onclick="tocarSom('${item.som}')">🔊 Tocar Som Novamente</button>
        </div>
    `;
    
    document.getElementById('modal-container').classList.add('visivel');
    
    if(item.som) {
        tocarSom(item.som);
    }
}

function fecharModal() {
    document.getElementById('modal-container').classList.remove('visivel');
    if (audioAtual) { audioAtual.pause(); }
}

// Inicia o site
carregarPaleontologia();