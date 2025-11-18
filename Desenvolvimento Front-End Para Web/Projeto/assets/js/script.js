document.addEventListener('DOMContentLoaded', function() {
    
    // Elementos da interface
    const appContainer = document.getElementById('app-container');
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    // === 1. SISTEMA DE TEMPLATES (SPA) ===
    
    // CONTEÚDO DE TODAS AS ROTAS, CENTRALIZADO AQUI
    const templates = {
        // Conteúdo da página inicial (index.html)
        home: `
            <section class="center-section">
                <h2>Quem Somos</h2>
                <img src="assets/img/principal.png" alt="Imagem da ONG" width="300">
                <p>Nossa missão é transformar vidas através da educação, acolhimento e voluntariado.</p>
            </section>

            <section>
                <h2>Missão, Visão e Valores</h2>
                <article>
                    <h3>Missão</h3>
                    <p>Promover impacto social por meio de projetos comunitários.</p>
                </article>
                <article>
                    <h3>Visão</h3>
                    <p>Ser referência em responsabilidade social no Brasil.</p>
                </article>
                <article>
                    <h3>Valores</h3>
                    <p>Transparência, empatia e compromisso.</p>
                </article>
            </section>

            <section>
                <h2>Contato</h2>
                <address>
                    Email: contato@esperancaviva.org<br>
                    Telefone: (11) 4002-8922<br>
                    Endereço: Rua da Solidariedade, 123 - São Paulo/SP
                </address>
            </section>
        `,
        
        // Conteúdo da página de Projetos (projetos.html)
        projetos: `
            <section>
                <h2>Projetos em Andamento</h2>
                <article>
                    <h3>Projeto Acolher</h3>
                    <img src="assets/img/projeto-acolher.jpg" alt="Ações do projeto Acolher" width="280">
                    <p>Oferecemos apoio emocional e educacional para crianças em situação de vulnerabilidade.</p>
                </article>
                <article>
                    <h3>Projeto Semeando Futuro</h3>
                    <img src="assets/img/projeto-semeando-futuro.jpg" alt="Oficina educacional" width="280">
                    <p>Aulas, oficinas e capacitação profissional para jovens.</p>
                </article>
            </section>

            <section>
                <h2>Como Ser Voluntário</h2>
                <p>Basta se cadastrar e escolher uma oportunidade que combine com seu perfil.</p>
            </section>
            
            <section>
                <h2>Como Ajudar com Doações</h2>
                <p>Suas doações ajudam a manter nossos projetos ativos e a transformar mais vidas.</p>
            </section>
        `,
        
        // Conteúdo da página de Cadastro (cadastro.html)
        cadastro: `
            <form id="cadastro-form">
                <fieldset>
                    <legend>Informações Pessoais</legend>
                    <label>Nome Completo:
                        <input type="text" id="nome" required>
                    </label>
                    <label>E-mail:
                        <input type="email" id="email" required>
                    </label>
                    <label>CPF:
                        <input id="cpf" type="text" required minlength="14" maxlength="14">
                    </label>
                    <label>Telefone:
                        <input id="telefone" type="text" required minlength="14" maxlength="15">
                    </label>
                    <label>Data de Nascimento:
                        <input type="date" id="nascimento" required>
                    </label>
                </fieldset>

                <fieldset>
                    <legend>Endereço</legend>
                    <label>Endereço:
                        <input type="text" id="endereco" required>
                    </label>
                    <label>CEP:
                        <input id="cep" type="text" required minlength="9" maxlength="9">
                    </label>
                    <label>Cidade:
                        <input type="text" id="cidade" required>
                    </label>
                    <label>Estado:
                        <select id="estado" required>
                            <option value="">Selecione</option>
                            <option>SP</option>
                            <option>RJ</option>
                            <option>MG</option>
                            <option>ES</option>
                            <option>PR</option>
                            <option>SC</option>
                            <option>RS</option>
                        </select>
                    </label>
                </fieldset>

                <button type="submit">Enviar Cadastro</button>
            </form>
        `
    };
    
    // Função principal de roteamento
    function loadContent(route) {
        let content = templates[route] || `<h2>Página Não Encontrada</h2><p>A rota ${route} não foi definida nos templates.</p>`;
        
        appContainer.innerHTML = content;
        
        // Se a rota for 'cadastro', configurar a validação e reaplicar máscaras
        if (route === 'cadastro') {
            setupFormValidation();
            setupInputMasks(); 
        }
    }

    // Função para reaplicar as máscaras (Conteúdo de mascaras.js)
    function setupInputMasks() {
        // CPF 000.000.000-00
        document.getElementById("cpf")?.addEventListener("input", function () {
            let v = this.value.replace(/\D/g, "");
            v = v.replace(/(\d{3})(\d)/, "$1.$2");
            v = v.replace(/(\d{3})(\d)/, "$1.$2");
            v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
            this.value = v;
        });

        // Telefone (00) 00000-0000
        document.getElementById("telefone")?.addEventListener("input", function () {
            let v = this.value.replace(/\D/g, "");
            v = v.replace(/^(\d{2})(\d)/g, "($1) $2");
            v = v.replace(/(\d{5})(\d)/, "$1-$2");
            this.value = v;
        });

        // CEP 00000-000
        document.getElementById("cep")?.addEventListener("input", function () {
            let v = this.value.replace(/\D/g, "");
            v = v.replace(/(\d{5})(\d)/, "$1-$2");
            this.value = v;
        });
    }

    // Configuração do menu hambúrguer com ARIA
    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        hamburger.classList.toggle("active");

        // ATUALIZAÇÃO ARIA
        const isExpanded = hamburger.classList.contains("active");
        hamburger.setAttribute("aria-expanded", isExpanded);
    });

    // Configurar o roteamento para cliques nos links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = e.target.getAttribute('href');
            let route;
            
            // Mapeamento de rotas (href -> template key)
            if (href.includes('index.html')) {
                route = 'home';
            } else if (href.includes('projetos.html')) {
                route = 'projetos';
            } else if (href.includes('cadastro.html')) {
                route = 'cadastro';
            } else {
                return;
            }

            e.preventDefault(); // Impedir o recarregamento (Core do SPA)
            loadContent(route);
            
            // Fechar o menu hambúrguer após o clique
            if (navMenu.classList.contains("active")) {
                 navMenu.classList.remove("active");
                 hamburger.classList.remove("active");
                 // ATUALIZAÇÃO ARIA ao fechar
                 hamburger.setAttribute("aria-expanded", "false"); 
            }
        });
    });

    // Código de Validação (setupFormValidation)
    function setupFormValidation() {
        const form = document.querySelector('#cadastro-form');
        if (!form) return; 

        form.addEventListener('submit', (e) => {
            // ... (Seu código de validação do formulário aqui) ...
            e.preventDefault(); 
            let firstErrorInput = null;

            form.querySelectorAll('.error-message').forEach(el => el.remove());

            form.querySelectorAll('input, select').forEach(input => {
                if (!input.validity.valid) {
                    const errorMessage = document.createElement('p');
                    errorMessage.className = 'error-message';
                    errorMessage.style.color = 'red'; 
                    errorMessage.style.marginTop = '5px';
                    errorMessage.style.fontSize = '0.9em';

                    let fieldName = input.labels ? input.labels[0].textContent.replace(':', '') : input.placeholder || input.id;
                    
                    if (input.validity.valueMissing) {
                        errorMessage.textContent = `${fieldName} é obrigatório(a).`;
                    } else if (input.validity.typeMismatch) {
                        errorMessage.textContent = `Por favor, insira um formato válido para ${fieldName}.`;
                    } else if (input.validity.tooShort || input.validity.tooLong) {
                        errorMessage.textContent = `${fieldName} deve ter entre ${input.minLength} e ${input.maxLength} caracteres.`;
                    } else {
                        errorMessage.textContent = `Preenchimento incorreto em ${fieldName}.`;
                    }
                    
                    input.parentNode.insertBefore(errorMessage, input.nextSibling);
                    
                    if (!firstErrorInput) {
                        firstErrorInput = input;
                    }
                }
            });
            
            if (firstErrorInput) {
                alert('Atenção: Por favor, corrija os erros no formulário.');
                firstErrorInput.focus();
            } else {
                 alert('Cadastro enviado com sucesso!');
                 //form.reset(); // Opcional
            }
        });
    }

    // === Lógica do Toggle de Tema/Acessibilidade ===
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Carregar preferência do usuário (se existir no localStorage)
    const currentTheme = localStorage.getItem('theme');
    
    // Checar a preferência do sistema
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches; 

    // Lógica para aplicar o tema inicial:
    // 1. Se o tema salvo for 'dark'.
    // 2. OU Se não houver tema salvo (currentTheme é null) E a preferência do sistema for escura.
    if (currentTheme === 'dark' || (!currentTheme && prefersDark)) {
        body.classList.add('dark-mode');
        themeToggle.textContent = '☀️'; // Mudar o ícone para Sol
    } else {
        // Aplica o ícone padrão. Se a preferência salva for 'light', não faz nada, 
        // mas garante que a classe dark-mode seja removida se estava lá por algum motivo
        themeToggle.textContent = '🌙'; 
        if (currentTheme === 'light' && body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
        }
    }

    // Listener para o botão de toggle
    if (themeToggle) { // Garante que o botão exista antes de adicionar o listener
        themeToggle.addEventListener('click', () => {
            if (body.classList.contains('dark-mode')) {
                // Se estiver escuro, muda para claro
                body.classList.remove('dark-mode');
                localStorage.setItem('theme', 'light');
                themeToggle.textContent = '🌙';
            } else {
                // Se estiver claro, muda para escuro
                body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark');
                themeToggle.textContent = '☀️';
            }
        });
    }
    
    // Carregar a rota inicial ao carregar a página
    loadContent('home'); 
});