/* DARK/LIGHT */
function toggleTheme() {
    const html = document.documentElement;
    const atual = html.getAttribute("data-theme");

    const novo = atual === "light" ? "dark" : "light";

    html.setAttribute("data-theme", novo);
    localStorage.setItem("theme", novo);
}

document.addEventListener("wheel", (e) => {
    const main = document.querySelector("main");
    if (!main) return;

    main.scrollTop += e.deltaY;
});

/* TO TOP */
const btn = document.getElementById("backToTop");
const main = document.querySelector("main");

// aparecer/desaparecer
main.addEventListener("scroll", () => {
    if (main.scrollTop > 300) {
        btn.classList.add("show");
    } else {
        btn.classList.remove("show");
    }
});

// voltar ao topo
btn.addEventListener("click", () => {
    main.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

/* GIRO NO SPAN DO ALURA */

const spanHolder = document.querySelector('.span-holder');

let angle = 0;
let spinning = true;
let stopping = false;
let lastTime = 0;

const SPEED = 90;      // velocidade normal (deg/s)
const STOP_SPEED = 80; // velocidade enquanto desacelera no hover

function spin(timestamp) {
    if (!lastTime) lastTime = timestamp;
    const delta = (timestamp - lastTime) / 1000;
    lastTime = timestamp;

    if (spinning) {
        // giro normal
        angle += SPEED * delta;
    } else if (!spinning && stopping) {
        // giro até completar ciclo
        angle += STOP_SPEED * delta;

        // quando estiver próximo do ângulo de parada (0°)
        const mod = angle % 360;
        if (mod >= 350 || mod <= 10) {
            angle = 0;
            spanHolder.style.transform = `rotateY(0deg)`;
            stopping = false;
            // NÃO RETORNA — deixa o RAF continuar rodando
        }
    }

    spanHolder.style.transform = `rotateY(${angle}deg)`;
    requestAnimationFrame(spin);
}

requestAnimationFrame(spin);

// === HOVER ENTRA → parar suavemente na próxima volta ===
spanHolder.addEventListener('mouseenter', () => {
    if (spinning) {
        spinning = false;
        stopping = true;
    }
});

/* HOVER SAI → volta a girar infinitamente */
spanHolder.addEventListener('mouseleave', () => {
    if (!spinning) {
        spinning = true;
        stopping = false;
    }
});

/* TYPING */

document.addEventListener("DOMContentLoaded", function() {
  const element = document.getElementById("typing");
  const texts = ['Codar.', 'Criar', 'Transformar.', 'Revolucionar.']; // agora sem as chaves
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentText = texts[textIndex];
    const displayed = currentText.substring(0, charIndex);
    element.textContent = displayed;

    if (!isDeleting && charIndex < currentText.length) {
      charIndex++;
      setTimeout(type, 100);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(type, 60);
    } else {
      if (!isDeleting) {
        isDeleting = true;
        setTimeout(type, 1500);
      } else {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, 300);
      }
    }
  }

  type();
});


/* SIDEBAR */

document.addEventListener('DOMContentLoaded', () => {
    // --- Declarações de Variáveis ---
    const checkbox = document.getElementById("checkbox");
    const sidebar = document.getElementById("sidebar");
    const cardContainer = document.querySelector('#secao-aprender');
    const blogContainer = document.querySelector('#secao-blog');
    const buscaInput = document.querySelector('#busca-input');
    const clearBuscaBtn = document.querySelector('#clear-busca');
    const linksMenu = document.querySelectorAll('.sidebar-menu a');
    
    const TRANSITION_DURATION = 500;
    let displayTimer = null;

    let data = [];
    let dataBlog = [];

    // --- Lógica da Sidebar ---
    if (checkbox && sidebar) {
        sidebar.classList.add('no-anim');
        const estadoSidebar = localStorage.getItem('sidebarOpen');
        if (estadoSidebar === 'true') {
            sidebar.classList.add('open');
            checkbox.checked = true;
        } else {
            sidebar.classList.remove('open');
            checkbox.checked = false;
        }
        requestAnimationFrame(() => {
            sidebar.classList.remove('no-anim');
        });

        checkbox.addEventListener("change", () => {
            sidebar.classList.toggle("open", checkbox.checked);
            localStorage.setItem('sidebarOpen', checkbox.checked);
        });
    }

    /* BUSCA */
    buscaInput.addEventListener('input', () => {
        clearBuscaBtn.classList.toggle('visible', buscaInput.value.trim() !== '');
    });

    clearBuscaBtn.addEventListener('click', () => {
        buscaInput.value = '';
        clearBuscaBtn.classList.remove('visible');
        const secaoAtiva = document.querySelector('.main-content.active').id;
        if (secaoAtiva === 'secao-aprender') {
            renderizarCards(data);
        } else if (secaoAtiva === 'secao-blog') {
            renderizarBlog(dataBlog);
        }
    });

    /* PÁGINAS/SEÇÕES */
    function mostrarSecao(secaoId) {
        const todasSecoes = document.querySelectorAll('.main-content');
        const secaoAtual = document.querySelector('.main-content.active');
        const secaoAlvo = document.getElementById(secaoId);

        if (displayTimer) {
            clearTimeout(displayTimer);
            displayTimer = null;
        }

        if (secaoAtual && secaoAtual.id === secaoId) return;

        if (secaoAtual) {
            secaoAtual.classList.remove('active');
            displayTimer = setTimeout(() => {
                secaoAtual.style.display = 'none';
            }, TRANSITION_DURATION);
        }
        
        if (secaoAlvo) {
            secaoAlvo.style.display = 'block';
            setTimeout(() => {
                secaoAlvo.classList.add('active');
            }, 10);
        }
        
        todasSecoes.forEach(secao => {
            if (secao.id !== secaoId && !secao.classList.contains('active')) {
                secao.style.display = 'none';
            }
        });
    }

    linksMenu.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const secaoAlvoId = link.getAttribute('data-secao');
            
            if (secaoAlvoId) {
                localStorage.setItem('secaoAtiva', secaoAlvoId);
                const secaoAtivaAtual = document.querySelector('.main-content.active');

                if (!secaoAtivaAtual || secaoAtivaAtual.id !== secaoAlvoId) {
                    mostrarSecao(secaoAlvoId);
                }

                if (secaoAlvoId === 'secao-aprender') {
                    renderizarCards(data);
                    buscaInput.value = '';
                    clearBuscaBtn.classList.remove('visible');
                } else if (secaoAlvoId === 'secao-blog') {
                    renderizarBlog(dataBlog);
                    buscaInput.value = '';
                    clearBuscaBtn.classList.remove('visible');
                }
            }
        });
    });

    /* SE ERRO */
    async function inicializar() {
        try {
            const [respostaAprender, respostaBlog] = await Promise.all([
                fetch('data.json'),
                fetch('blog.json')
            ]);

            data = await respostaAprender.json();
            dataBlog = await respostaBlog.json();
            
            renderizarCards(data);
            renderizarBlog(dataBlog);

            const ultimaSecao = localStorage.getItem('secaoAtiva') || 'secao-inicio';
            mostrarSecao(ultimaSecao);

        } catch (error) {
            console.error('Erro ao carregar os dados:', error);
        }
    }

    function renderizarCards(dados) {
        if (!cardContainer) return;
        
        cardContainer.innerHTML = '';
        if (dados.length === 0) {
            mostrarSecao('secao-nenhum');
            return;
        }
        for (const dado of dados) {
            const article = document.createElement('article');
            article.classList.add('card');
            article.innerHTML = `
            <div class="card-content">
            <h2>O que é ${dado.nome}?</h2>
            <p><strong>Ano de criação:</strong> ${dado.ano}</p>
            <p>${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Saiba mais<svg class="link-to" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M13 18l6 -6" /><path d="M13 6l6 6" /></svg></a>
            </div>
            `;
            cardContainer.appendChild(article);
        }
    }

    function renderizarBlog(posts) {
        if (!blogContainer) return;
    
        const titulo = blogContainer.querySelector('h1');
        const descricao = blogContainer.querySelector('p');
        
        let blogWrapper = blogContainer.querySelector('.blog-wrapper');
        if (!blogWrapper) {
            blogWrapper = document.createElement('div');
            blogWrapper.classList.add('blog-wrapper');
            blogContainer.appendChild(blogWrapper);
        }
    
        blogWrapper.innerHTML = '';
    
        if (posts.length === 0) {
            mostrarSecao('secao-nenhum');
            return;
        }
    
        const listHtml = posts.map(post => `
            <article class="blog-post">
                ${post.imagem ? `<img src="${post.imagem}" class="thumb" alt="${post.titulo}">` : ''}
                <div class="blog-info">
                    <h2 class="post-title">${post.titulo}</h2>
                    <p class="post-resumo">${post.resumo || ''}</p>
                    <span class="meta">${post.autor || ''} ${post.data ? '— ' + post.data : ''}</span>
                    ${post.link ? `<a href="${post.link}" target="_blank" rel="noopener" class="blog-link">Ler mais</a>` : ''}
                </div>
            </article>
        `).join('');
    
        blogWrapper.innerHTML = `<div class="blog-list">${listHtml}</div>`;
    }

    function iniciarBusca() {
        const termo = buscaInput.value.trim().toLowerCase();
        if (termo === '') return;

        const resultadosAprender = data.filter(item =>
            item.nome.toLowerCase().includes(termo) ||
            item.descricao.toLowerCase().includes(termo)
        );

        const resultadosBlog = dataBlog.filter(post =>
            post.titulo.toLowerCase().includes(termo) ||
            post.resumo.toLowerCase().includes(termo)
        );

        if (resultadosAprender.length > 0) {
            renderizarCards(resultadosAprender);
            mostrarSecao('secao-aprender');
        } else if (resultadosBlog.length > 0) {
            renderizarBlog(resultadosBlog);
            mostrarSecao('secao-blog');
        } else {
            mostrarSecao('secao-nenhum');
        }
    }

    // --- Listeners de Busca ---
    const botaoBusca = document.querySelector('#botao-busca');
    if (botaoBusca) {
        botaoBusca.addEventListener('click', iniciarBusca);
    }

    if (buscaInput) {
        buscaInput.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                iniciarBusca();
            }
        });
    }

    // Inicializa a aplicação
    inicializar();
});
