// ================= BANCO DE DADOS DE PROJETOS =================
const projetos = {
    "01": { titulo: "Scanner", descricao: "Scanner de vulnerabilidades e análise de portas.", tech: "Python", status: "ACTIVE" },
    "02": { titulo: "Keylogger", descricao: "Estudo de captura de eventos de teclado para fins educacionais.", tech: "Python", status: "ACTIVE" },
    "03": { titulo: "Weather", descricao: "Dashboard climático integrado via API.", tech: "JS, API", status: "ACTIVE" },
    
    // Módulos em Desenvolvimento
    "04": { titulo: "[IN DEVELOPMENT] Data Scraper", descricao: "Módulo de extração automatizada. Deploy em breve.", tech: "Python, Selenium", status: "DEVELOPING" },
    "05": { titulo: "[IN DEVELOPMENT] RSA Encryptor", descricao: "Criptografia assimétrica em fase de implementação matemática.", tech: "Python", status: "LOCKED" },
    "06": { titulo: "[IN DEVELOPMENT] Network Mapper", descricao: "Mapeamento de serviços de rede sob auditoria interna.", tech: "Python, Sockets", status: "SCANNING" },
    "07": { titulo: "[IN DEVELOPMENT] SQLi Simulator", descricao: "Ambiente de laboratório para testes de injeção SQL.", tech: "SQL, PHP", status: "UNDER_AUDIT" },
    "08": { titulo: "[IN DEVELOPMENT] Brute Force", descricao: "Testador de políticas de senhas em fase de testes alpha.", tech: "Python", status: "TESTING" },
    "09": { titulo: "[IN DEVELOPMENT] Wi-Fi Analyzer", descricao: "Análise de espectro wireless em desenvolvimento.", tech: "Python, Scapy", status: "ENCRYPTED" },
    "10": { titulo: "[IN DEVELOPMENT] Malware Sandbox", descricao: "Arquitetura de ambiente isolado (VM) em configuração.", tech: "Virtualization", status: "LOCKED" },
    "11": { titulo: "[IN DEVELOPMENT] Firewall Logic", descricao: "Regras de filtragem de pacotes em fase de script.", tech: "Python", status: "DEVELOPING" },
    "12": { titulo: "[IN DEVELOPMENT] Phishing Lab", descricao: "Simulador de engenharia social para treinamento de usuários.", tech: "HTML/CSS", status: "EDUCATIONAL" },
    "13": { titulo: "[IN DEVELOPMENT] Hash Cracker", descricao: "Algoritmos de comparação de hash em otimização.", tech: "Python, Hashlib", status: "DEVELOPING" },
    "14": { titulo: "[IN DEVELOPMENT] Proxy Intermediary", descricao: "Redirecionamento de tráfego seguro em desenvolvimento.", tech: "Python", status: "LOCKED" },
    "15": { titulo: "[IN DEVELOPMENT] OSINT Investigator", descricao: "Ferramenta de coleta de dados públicos via APIs.", tech: "Python, APIs", status: "SCANNING" },
    "16": { titulo: "Portfolio OS", descricao: "Este sistema que você está navegando agora.", tech: "HTML, CSS, JS", status: "STABLE" }
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
        iniciarAudioContext(); 
        
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

// abrirProjeto para incluir o desbloqueio
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


document.addEventListener('DOMContentLoaded', () => {


    setInterval(() => {
        const h = document.getElementById("clock");
        if(h) h.innerText = new Date().toLocaleTimeString('pt-BR');
    }, 1000);

 
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

    //  CLIMA
    buscarClima();

    //  TEMA 
    document.getElementById('theme-toggle')?.addEventListener('change', (e) => {
        document.documentElement.setAttribute('data-theme', e.target.checked ? 'light' : 'dark');
    });

    //  DRAG & DROP INICIALIZAÇÃO
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