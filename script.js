// BANCO DE DADOS DE PROJETOS
const dadosProjetos = {
    "01": { titulo: "Neural File Scanner", descricao: "Análise de integridade SHA-256 para detecção de alterações não autorizadas em arquivos críticos.", tech: "Python, Hashlib", status: "SECURE" },
    "02": { titulo: "Kernel Keylogger", descricao: "Monitoramento de periféricos de entrada focado em testes de invasão física e auditoria.", tech: "Python, Pynput", status: "ACTIVE" },
    "03": { titulo: "Weather OS Intel", descricao: "Dashboard meteorológico com consumo de API e interface Glassmorphism.", tech: "JS, Fetch API", status: "ONLINE" },
    "04": { titulo: "Data Scraper Pro", descricao: "Extração de dados automatizada em larga escala com Selenium.", tech: "Python, Selenium", status: "ACTIVE" },
    "05": { titulo: "RSA Encryptor", descricao: "Implementação de criptografia assimétrica para proteção de mensagens.", tech: "Python, Math", status: "ENCRYPTED" },
    "06": { titulo: "Network Mapper", descricao: "Varredura de portas TCP/UDP e identificação de serviços na rede.", tech: "Python, Sockets", status: "SECURE" },
    "07": { titulo: "SQLi Simulator", descricao: "Ambiente de teste para exploração e mitigação de injeções SQL.", tech: "SQL, PHP", status: "AUDIT" },
    "08": { titulo: "Brute Force Tester", descricao: "Simulador de ataque de dicionário para checagem de políticas de senhas.", tech: "Python, Itertools", status: "TESTING" },
    "09": { titulo: "Wi-Fi Analyzer", descricao: "Monitoramento de pacotes wireless e força de sinal.", tech: "Python, Scapy", status: "SCANNING" },
    "10": { titulo: "Malware Sandbox", descricao: "Ambiente isolado para execução de binários suspeitos.", tech: "VM, Python", status: "ISOLATED" },
    "11": { titulo: "Firewall Logic", descricao: "Filtragem de pacotes baseada em IP e protocolos de rede.", tech: "Python", status: "BLOCKING" },
    "12": { titulo: "Phishing Lab", descricao: "Simulação de engenharia social para treinamento corporativo.", tech: "HTML, CSS", status: "EDUCATIONAL" },
    "13": { titulo: "Hash Cracker", descricao: "Reversão de hashes usando comparação com rainbow tables.", tech: "Python, Hashlib", status: "ACTIVE" },
    "14": { titulo: "Proxy Intermediary", descricao: "Mascaramento de IP e redirecionamento de tráfego HTTP.", tech: "Python, Sockets", status: "SECURE" },
    "15": { titulo: "OSINT Investigator", descricao: "Coleta de dados públicos em fontes abertas para inteligência.", tech: "Python, APIs", status: "ACTIVE" },
    "16": { titulo: "Cyber Dashboard", descricao: "Interface de portfólio focada em alta performance visual e responsividade.", tech: "HTML, CSS, JS", status: "STABLE" }
};

// ================= ÁUDIO (BIP SINTÉTICO) =================
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function playTechBeep(tipo) {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    if (tipo === 'open') {
        oscillator.type = 'square';
        oscillator.frequency.setValueAtTime(800, audioCtx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(400, audioCtx.currentTime + 0.1);
    } else if (tipo === 'close') {
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(400, audioCtx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(200, audioCtx.currentTime + 0.1);
    }
    gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.1);
}

// ================= EVENTOS PRINCIPAIS =================
document.addEventListener('DOMContentLoaded', () => {

    // EFEITO MÁQUINA DE ESCREVER (TERMINAL)
    const termText = "Estudante de ADS e Desenvolvedor Júnior. Apaixonado por programação, lógica e resolução de problemas reais. Buscando minha primeira oportunidade no mercado de tecnologia para aplicar meus conhecimentos, absorver novas stacks e gerar valor corporativo. Altamente adaptável e com extrema vontade de aprender. Mission Status: READY_FOR_DEPLOYMENT...";
    
    let i = 0;
    function typeWriter() {
        if (i < termText.length) {
            document.getElementById("typewriter").innerHTML += termText.charAt(i);
            i++;
            setTimeout(typeWriter, 30); // Velocidade da digitação
        }
    }
    setTimeout(typeWriter, 1500); // Começa a digitar após o loader sumir

    // SCROLL E BOLINHAS
    const container = document.querySelector('.main-scroll-container');
    const dots = document.querySelectorAll('.dot');

    if (container) {
        container.addEventListener('scroll', () => {
            const index = Math.round(container.scrollTop / window.innerHeight);
            dots.forEach(dot => dot.classList.remove('active'));
            if(dots[index]) dots[index].classList.add('active');
        });
    }

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            container.scrollTo({ top: i * window.innerHeight, behavior: 'smooth' });
        });
    });

    // RELÓGIO
    setInterval(() => {
        const h = document.getElementById("hora");
        if(h) h.innerText = new Date().toLocaleTimeString('pt-BR');
    }, 1000);

    // TEMA
    document.getElementById('checkbox')?.addEventListener('change', (e) => {
        document.documentElement.setAttribute('data-theme', e.target.checked ? 'light' : 'dark');
    });

    // CLIMA
    async function buscarClima() {
        try {
            const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Sao Paulo&units=metric&lang=pt_br&appid=30fe6f22cbfbfb5805043da7e418d606`);
            const d = await resp.json();
            if (d.cod === 200) {
                document.getElementById("temp").innerText = Math.round(d.main.temp) + "°C";
                document.getElementById("clima-icone").src = `https://openweathermap.org/img/wn/${d.weather[0].icon}@4x.png`;
            }
        } catch (e) { console.error("API Clima:", e); }
    }
    buscarClima();

    // REMOVER LOADER
    setTimeout(() => { 
        document.getElementById('loader-seguranca').style.display = 'none'; 
    }, 1000);

    // LÓGICA DO MODAL COM ÁUDIO
    const overlay = document.getElementById('project-overlay');
    const detailsDiv = document.getElementById('project-details');

    document.querySelectorAll('.card-mini').forEach(card => {
        card.addEventListener('click', () => {
            playTechBeep('open'); // Som
            
            const id = card.getAttribute('data-projeto');
            const info = dadosProjetos[id];
            
            if (info) {
                detailsDiv.innerHTML = `
                    <p style="color:var(--clima-color); font-family:monospace; margin-bottom:15px; font-size:0.9rem;">> MODULE_ID: ${id} | STATUS: ${info.status}</p>
                    <h2 style="font-size:3.5rem; color:var(--text-h1); line-height:1; margin-bottom:20px;">${info.titulo}</h2>
                    <p style="font-size:1.1rem; color:var(--text-p); line-height:1.6; margin-bottom:30px;">${info.descricao}</p>
                    <div class="tags">
                        ${info.tech.split(',').map(t => `<span style="background:rgba(56,189,248,0.1); color:var(--clima-color); padding:8px 15px; border-radius:8px; display:inline-block; margin:4px; font-weight:bold;">${t.trim()}</span>`).join('')}
                    </div>
                `;
                overlay.classList.remove('overlay-hidden');
            }
        });
    });
});

function fecharProjeto() {
    playTechBeep('close'); // Som
    document.getElementById('project-overlay').classList.add('overlay-hidden');
}
// ================= SISTEMA DE DRAG & DROP (ALTA PERFORMANCE) =================
function tornarArrastavel(elemento) {
    if (!elemento) return;

    let offsetX = 0, offsetY = 0;

    // Estilo visual inicial (mãozinha aberta)
    elemento.style.cursor = "grab";

    elemento.addEventListener('mousedown', iniciarArraste);

    function iniciarArraste(e) {
        // Ignora se o usuário clicou em um botão ou link dentro do painel
        if(e.target.tagName === 'BUTTON' || e.target.tagName === 'A') return;
        
        e.preventDefault();
        
        // Muda o cursor para "agarrando" (mãozinha fechada)
        elemento.style.cursor = "grabbing";
        
        // Traz a janela para a frente de tudo
        elemento.style.zIndex = 99999;

        // Calcula a posição exata de onde o mouse pegou o elemento
        const rect = elemento.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;

        // Quebra as âncoras do CSS original para liberar o movimento
        elemento.style.right = 'auto';
        elemento.style.bottom = 'auto';
        elemento.style.transform = 'none'; // Remove efeitos de hover que atrapalham
        elemento.style.margin = '0'; 
        
        // Garante que o elemento flutue livremente em relação à tela do monitor
        elemento.style.position = 'fixed';
        
        // Seta a posição inicial imediatamente para não dar "pulo"
        elemento.style.left = rect.left + 'px';
        elemento.style.top = rect.top + 'px';

        document.addEventListener('mousemove', moverElemento);
        document.addEventListener('mouseup', pararArrastar);
    }

    function moverElemento(e) {
        e.preventDefault();
        // A mágica da fluidez: atualiza instantaneamente colado no mouse
        elemento.style.left = (e.clientX - offsetX) + 'px';
        elemento.style.top = (e.clientY - offsetY) + 'px';
    }

    function pararArrastar() {
        elemento.style.cursor = "grab";
        document.removeEventListener('mousemove', moverElemento);
        document.removeEventListener('mouseup', pararArrastar);
    }
}

// INICIALIZA O DRAG & DROP
document.addEventListener('DOMContentLoaded', () => {
    // Adiciona o sistema de arrastar nos widgets e na janela modal
    const wWeather = document.querySelector('.widget-weather');
    const wStatus = document.querySelector('.widget-status');
    const wModal = document.querySelector('.modal-content');
    
    if (wWeather) tornarArrastavel(wWeather);
    if (wStatus) tornarArrastavel(wStatus);
    if (wModal) tornarArrastavel(wModal);
});