const dinossaurosData = [
    // --- TRIÁSSICO ---
    { 
        id: "stauricossauro", era: "triassico", nome: "Estauricossauro", subtitulo: "O Pioneiro Brasileiro", 
        animacao: "animacoes/estauricossauro.mp4",
        descricao: "Descoberto no Rio Grande do Sul, este é um dos dinossauros mais antigos do mundo! Ele era um carnívoro pequeno, com cerca de 2 metros de comprimento e pesando apenas 30 kg.<br><br><strong>Curiosidade:</strong> Ele tinha pernas longas e finas, o que indica que era um corredor extremamente rápido, capaz de caçar pequenos lagartos e insetos gigantes com sua mandíbula cheia de dentes curvados para trás." 
    },
    { 
        id: "herrerassauro", era: "triassico", nome: "Herrerassauro", subtitulo: "O Caçador Primitivo", 
        animacao: "animacoes/Herrerasaurus",
        descricao: "Encontrado na Argentina, este predador viveu há cerca de 230 milhões de anos. Ele podia chegar a 6 metros de comprimento e era um dos maiores carnívoros de sua época.<br><br><strong>Curiosidade:</strong> A mandíbula do Herrerassauro tinha uma articulação dupla especial que permitia deslizar para frente e para trás, ajudando a segurar e engolir presas que se debatiam." 
    },
    { 
        id: "celofise", era: "triassico", nome: "Celófise", subtitulo: "O Pequeno Velocista", 
        animacao: "animacoes/celofise.mp4",
        descricao: "Um dinossauro esguio e muito ágil que caçava em grandes bandos. Ele media cerca de 3 metros, mas pesava pouquíssimo (uns 20 kg) porque seus ossos eram ocos, como os das aves modernas.<br><br><strong>Curiosidade:</strong> Centenas de esqueletos de Celófise foram encontrados juntos no Novo México (EUA), provando que eles andavam em enormes matilhas para se proteger e caçar." 
    },
    { 
        id: "plateossauro", era: "triassico", nome: "Plateossauro", subtitulo: "O Ancestral dos Gigantes", 
        animacao: "animacoes/plateossauro.mp4",
        descricao: "Este foi um dos primeiros dinossauros herbívoros gigantes. Com até 10 metros de comprimento, ele podia andar sobre quatro patas, mas se erguia nas patas traseiras para alcançar as folhas mais altas das árvores.<br><br><strong>Curiosidade:</strong> Ele engolia pedras de propósito! Essas pedras ficavam no seu estômago e ajudavam a esmagar as plantas duras que ele comia, funcionando como um 'liquidificador' interno." 
    },
    { 
        id: "eoraptor", era: "triassico", nome: "Eoraptor", subtitulo: "O Ladrão da Alvorada", 
        animacao: "animacoes/eoraptor.mp4",
        descricao: "Com apenas 1 metro de comprimento e o peso de um cachorro pequeno, ele é considerado o 'avô' de quase todos os dinossauros. Ele era onívoro, ou seja, comia tanto plantas quanto pequenos animais.<br><br><strong>Curiosidade:</strong> Seus dentes da frente eram afiados como folhas (para cortar carne), mas os dentes de trás eram chatos e retos (para esmagar plantas). Ele estava pronto para qualquer refeição!" 
    },

    // --- JURÁSSICO ---
    { 
        id: "braquiossauro", era: "jurassico", nome: "Braquiossauro", subtitulo: "O Gigante Pescoçudo", 
        animacao: "animacoes/braquiossauro.mp4",
        descricao: "Um verdadeiro titã! Ele podia chegar a 25 metros de comprimento e pesar o equivalente a 10 elefantes juntos. Ao contrário de outros pescoçudos, suas patas dianteiras eram muito maiores que as traseiras, dando a ele uma postura parecida com a de uma girafa.<br><br><strong>Curiosidade:</strong> Seu coração era tão poderoso que precisava bombear sangue com uma força gigantesca para fazer o oxigênio subir pelo seu enorme pescoço até o cérebro!" 
    },
    { 
        id: "estegossauro", era: "jurassico", nome: "Estegossauro", subtitulo: "O Tanque de Placas", 
        animacao: "animacoes/estegossauro.mp4",
        descricao: "Um herbívoro de 9 metros de comprimento que parecia um tanque de guerra blindado. Ele tinha fileiras de enormes placas ósseas nas costas e quatro espinhos mortais na ponta do rabo para se defender dos predadores.<br><br><strong>Curiosidade:</strong> Apesar de ser gigante e assustador, o Estegossauro não era muito inteligente. Seu cérebro tinha o tamanho e o formato exato de uma salsicha ou de uma noz!" 
    },
    { 
        id: "alossauro", era: "jurassico", nome: "Alossauro", subtitulo: "O Leão do Jurássico", 
        animacao: "animacoes/alossauro.mp4",
        descricao: "O superpredador dominante de sua época. Ele media até 12 metros e caçava grandes dinossauros herbívoros. Suas mãos tinham três garras enormes que funcionavam como ganchos de açougueiro.<br><br><strong>Curiosidade:</strong> Ele atacava como se seu crânio fosse um machado! O Alossauro abria a boca de forma impressionante e usava a força do pescoço para 'bater' os dentes na presa, em vez de apenas morder." 
    },
    { 
        id: "diplodoco", era: "jurassico", nome: "Diplodoco", subtitulo: "A Cauda de Chicote", 
        animacao: "animacoes/diplodoco.mp4",
        descricao: "Um dos dinossauros mais compridos que já existiu, chegando a 27 metros! A maior parte desse tamanho era dividida entre seu pescoço imenso e sua cauda extremamente fina e longa.<br><br><strong>Curiosidade:</strong> A ponta de sua cauda podia ser balançada tão rápido que rompia a barreira do som, criando um estalo supersônico alto como um trovão para assustar predadores!" 
    },
    { 
        id: "ceratossauro", era: "jurassico", nome: "Ceratossauro", subtitulo: "O Caçador de Chifre", 
        animacao: "animacoes/ceratossauro.mp4",
        descricao: "Um carnívoro feroz e muito fácil de reconhecer. Ele tinha um chifre pontudo bem no meio do nariz e pequenas placas ósseas que desciam pelas suas costas, como as de um crocodilo.<br><br><strong>Curiosidade:</strong> Além de caçar dinossauros em terra firme, estudos mostram que o Ceratossauro era um excelente nadador e passava muito tempo caçando peixes e crocodilos pré-históricos em lagos profundos." 
    },

    // --- CRETÁCEO ---
    { 
        id: "t-rex", era: "cretaceo", nome: "Tiranossauro Rex", subtitulo: "O Rei Tirano", 
        animacao: "animacoes/t-rex.mp4",
        descricao: "O rei indiscutível dos dinossauros! Com 12 metros de comprimento, ele foi o maior predador terrestre da América do Norte. Apesar de seus braços minúsculos, suas pernas e mandíbulas eram incrivelmente poderosas.<br><br><strong>Curiosidade:</strong> O T-Rex tinha a mordida mais forte de qualquer animal que já pisou na Terra! Seus dentes, do tamanho de bananas, podiam esmagar os ossos de suas presas com uma força de quase 4.000 kg." 
    },
    { 
        id: "triceratops", era: "cretaceo", nome: "Tricerátops", subtitulo: "O Rosto de Três Chifres", 
        animacao: "animacoes/triceratops.mp4",
        descricao: "O grande gladiador herbívoro! Ele pesava quase 9 toneladas e tinha um enorme escudo de osso sólido protegendo o pescoço, além de três chifres frontais afiados como lanças.<br><br><strong>Curiosidade:</strong> Ele foi o maior rival do T-Rex. O crânio de um Tricerátops era tão resistente que ocupava quase um terço do tamanho de todo o seu corpo, sendo uma das maiores cabeças de todos os animais terrestres." 
    },
    { 
        id: "velociraptor", era: "cretaceo", nome: "Velociraptor", subtitulo: "O Assassino de Penas", 
        animacao: "animacoes/velociraptor.mp4",
        descricao: "Esqueça os filmes! O verdadeiro Velociraptor não era maior do que um peru gigante e tinha o corpo todo coberto por penas, parecendo uma grande e perigosa ave que não voava.<br><br><strong>Curiosidade:</strong> Sua principal arma era a 'garra terrível': uma garra curva e afiada de 9 centímetros no segundo dedo de cada pé, que ele usava para perfurar o pescoço de suas vítimas com ataques rápidos e precisos." 
    },
    { 
        id: "espinossauro", era: "cretaceo", nome: "Espinossauro", subtitulo: "O Pescador Gigante", 
        animacao: "animacoes/espinossauro.mp4",
        descricao: "Maior, mais longo e mais pesado que o próprio T-Rex! O Espinossauro tinha uma enorme 'vela' de pele e osso nas costas e o focinho alongado, muito parecido com o de um crocodilo moderno.<br><br><strong>Curiosidade:</strong> Foi o primeiro dinossauro conhecido que vivia quase todo o tempo na água. Seus ossos eram muito densos para ele não boiar, permitindo que mergulhasse fundo para caçar peixes gigantes e tubarões de rio." 
    },
    { 
        id: "anquilossauro", era: "cretaceo", nome: "Anquilossauro", subtitulo: "A Fortaleza Viva", 
        animacao: "animacoes/anquilossauro.mp4",
        descricao: "Um herbívoro coberto por uma espessa armadura de osso da cabeça ao rabo. Até mesmo as suas pálpebras eram de osso, tornando-o quase impenetrável aos dentes dos grandes predadores.<br><br><strong>Curiosidade:</strong> Na ponta do seu rabo, ele possuía um gigantesco 'martelo' de osso maciço. Com um único golpe certeiro, ele podia quebrar as pernas de um T-Rex como se fossem palitos de dente!" 
    }
];

// O resto do código (carregarLinhaDoTempo, abrirModalFoco, alternarSomVideo e fecharModal) continua igualzinho aqui embaixo...

function carregarLinhaDoTempo() {
    dinossaurosData.forEach(item => {
        const trilhaExata = document.getElementById(`trilha-${item.era}`);
        const div = document.createElement('div');
        div.className = 'cartao-item';
        div.onclick = () => abrirModalFoco(item.id);
        
        div.innerHTML = `
            <video class="video-thumbnail" src="${item.animacao}" autoplay loop muted playsinline></video>
            <h3>${item.nome}</h3>
            <p>${item.subtitulo}</p>
        `;
        trilhaExata.appendChild(div);
    });
}

function abrirModalFoco(id) {
    const item = dinossaurosData.find(d => d.id === id);
    const conteudo = document.getElementById('conteudo-foco');
    
    // Adicionamos um ID no vídeo e o botão de mutar logo abaixo
    conteudo.innerHTML = `
        <video id="video-modal" class="video-destaque" src="${item.animacao}" autoplay loop playsinline></video>
        <button id="btn-mutar" class="botao-mutar" onclick="alternarSomVideo()">🔊 Áudio Ativado (Clique para Silenciar)</button>
        
        <div class="conteudo-texto-modal">
            <h2>${item.nome}</h2>
            <span class="subtitulo">${item.subtitulo}</span>
            <p class="descricao">${item.descricao}</p>
        </div>
    `;
    
    document.getElementById('modal-container').classList.add('visivel');
}

// A NOVA MÁGICA: Função para ligar e desligar o som
function alternarSomVideo() {
    const video = document.getElementById('video-modal');
    const btn = document.getElementById('btn-mutar');
    
    if (video.muted) {
        video.muted = false; // Liga o som
        btn.innerHTML = "🔊 Áudio Ativado (Clique para Silenciar)";
        btn.style.backgroundColor = "#e1b12c";
    } else {
        video.muted = true; // Desliga o som
        btn.innerHTML = "🔇 Áudio Silenciado (Clique para Ouvir)";
        btn.style.backgroundColor = "#7f8fa6"; // Fica cinza para mostrar que desligou
    }
}

function fecharModal() {
    document.getElementById('modal-container').classList.remove('visivel');
    const videoDestaque = document.getElementById('video-modal');
    if (videoDestaque) {
        videoDestaque.pause();
    }
}

carregarLinhaDoTempo();