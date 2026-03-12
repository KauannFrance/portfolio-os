// ================= BANCO DE DADOS DE PROJETOS =================
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

// ================= ÁUDIO (BIP SINTÉTICO MELHORADO) =================
let audioCtx = null; // Inicializa como nulo

function iniciarAudioContext() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
}

function playTechBeep(tipo) {
    try {
        iniciarAudioContext(); // Garante que o contexto está ativo
        
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

        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime); // Aumentei um pouco o volume (0.1)
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
        
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.1);
    } catch (e) {
        console.error("Erro ao reproduzir áudio:", e);
    }
}

// ATUALIZE A FUNÇÃO abrirProjeto para incluir o desbloqueio
function abrirProjeto(id) {
    iniciarAudioContext(); // Desbloqueia o áudio no clique do usuário
    
    const overlay = document.getElementById('project-overlay');
    const detailsDiv = document.getElementById('project-details');
    const info = dadosProjetos[id];

    if (info && overlay && detailsDiv) {
        playTechBeep('open'); // Toca o som de abertura
        
        detailsDiv.innerHTML = `
            <p style="color:var(--clima-color); font-family:monospace; margin-bottom:15px; font-size:0.9rem;">> MODULE_ID: ${id} | STATUS: ${info.status}</p>
            <h2 class="modal-title-adjust" style="color:var(--text-h1); line-height:1.2; margin-bottom:20px;">${info.titulo}</h2>
            <p style="font-size:1.1rem; color:var(--text-p); line-height:1.6; margin-bottom:30px;">${info.descricao}</p>
            <div class="tags">
                ${info.tech.split(',').map(t => `<span style="background:rgba(56,189,248,0.1); color:var(--clima-color); padding:8px 15px; border-radius:8px; display:inline-block; margin:4px; font-weight:bold; border:1px solid rgba(56,189,248,0.2);">${t.trim()}</span>`).join('')}
            </div>
        `;
        overlay.style.display = 'flex';
    }
}


// ================= EVENTOS PRINCIPAIS =================
document.addEventListener('DOMContentLoaded', () => {

    // 1. RELÓGIO (Corrigido para o ID 'clock' que está no seu HTML)
    setInterval(() => {
        const h = document.getElementById("clock");
        if(h) h.innerText = new Date().toLocaleTimeString('pt-BR');
    }, 1000);

    // 2. EFEITO MÁQUINA DE ESCREVER
    const termText = "Estudante de ADS e Desenvolvedor Júnior. Apaixonado por programação, lógica e resolução de problemas reais. Buscando minha primeira oportunidade no mercado de tecnologia para aplicar meus conhecimentos, absorver novas stacks e gerar valor corporativo. READY_FOR_DEPLOYMENT...";
    let i = 0;
    function typeWriter() {
        const el = document.getElementById("typewriter");
        if (el && i < termText.length) {
            el.innerHTML += termText.charAt(i);
            i++;
            setTimeout(typeWriter, 30);
        }
    }
    setTimeout(typeWriter, 1500);

    // 3. CLIMA
    buscarClima();

    // 4. TEMA (Corrigido para o ID 'theme-toggle')
    document.getElementById('theme-toggle')?.addEventListener('change', (e) => {
        document.documentElement.setAttribute('data-theme', e.target.checked ? 'light' : 'dark');
    });

    // 5. DRAG & DROP INICIALIZAÇÃO
    const wWeather = document.querySelector('.widget-weather');
    const wStatus = document.querySelector('.widget-status');
    const wModal = document.querySelector('.modal-content');
    if (wWeather) tornarArrastavel(wWeather);
    if (wStatus) tornarArrastavel(wStatus);
    if (wModal) tornarArrastavel(wModal);

    // 6. REMOVER LOADER
    setTimeout(() => { 
        const loader = document.getElementById('loader-seguranca');
        if(loader) loader.style.display = 'none'; 
    }, 1000);
});

// ================= FUNÇÕES AUXILIARES =================

async function buscarClima() {
    try {
        const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Sao Paulo&units=metric&lang=pt_br&appid=30fe6f22cbfbfb5805043da7e418d606`);
        const d = await resp.json();
        if (d.cod === 200) {
            const t = document.getElementById("temp");
            const ic = document.getElementById("clima-icone");
            if(t) t.innerText = Math.round(d.main.temp) + "°C";
            if(ic) ic.src = `https://openweathermap.org/img/wn/${d.weather[0].icon}@4x.png`;
        }
    } catch (e) { console.error("API Clima:", e); }
}

function abrirProjeto(id) {
    const overlay = document.getElementById('project-overlay');
    const detailsDiv = document.getElementById('project-details');
    const info = dadosProjetos[id];

    if (info && overlay && detailsDiv) {
        playTechBeep('open');
        detailsDiv.innerHTML = `
            <p style="color:var(--clima-color); font-family:monospace; margin-bottom:15px; font-size:0.9rem;">> MODULE_ID: ${id} | STATUS: ${info.status}</p>
            <h2 class="modal-title-adjust" style="color:var(--text-h1); line-height:1.2; margin-bottom:20px;">${info.titulo}</h2>
            <p style="font-size:1.1rem; color:var(--text-p); line-height:1.6; margin-bottom:30px;">${info.descricao}</p>
            <div class="tags">
                ${info.tech.split(',').map(t => `<span style="background:rgba(56,189,248,0.1); color:var(--clima-color); padding:8px 15px; border-radius:8px; display:inline-block; margin:4px; font-weight:bold; border:1px solid rgba(56,189,248,0.2);">${t.trim()}</span>`).join('')}
            </div>
        `;
        overlay.style.display = 'flex';
    }
}

function fecharProjeto() {
    const overlay = document.getElementById('project-overlay');
    if (overlay) {
        playTechBeep('close');
        overlay.style.display = 'none';
    }
}

// ================= DRAG & DROP =================
function tornarArrastavel(elemento) {
    if (!elemento) return;
    let offsetX = 0, offsetY = 0;
    elemento.style.cursor = "grab";

    elemento.addEventListener('mousedown', (e) => {
        if (window.innerWidth < 950) return; // Desativa no mobile
        if(e.target.tagName === 'BUTTON' || e.target.tagName === 'A') return;
        
        e.preventDefault();
        elemento.style.cursor = "grabbing";
        elemento.style.zIndex = 99999;

        const rect = elemento.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;

        elemento.style.right = 'auto';
        elemento.style.bottom = 'auto';
        elemento.style.position = 'fixed';
        elemento.style.left = rect.left + 'px';
        elemento.style.top = rect.top + 'px';

        const mover = (e) => {
            elemento.style.left = (e.clientX - offsetX) + 'px';
            elemento.style.top = (e.clientY - offsetY) + 'px';
        };

        const parar = () => {
            elemento.style.cursor = "grab";
            document.removeEventListener('mousemove', mover);
            document.removeEventListener('mouseup', parar);
        };

        document.addEventListener('mousemove', mover);
        document.addEventListener('mouseup', parar);
    });
}