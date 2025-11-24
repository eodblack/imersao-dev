# Base de Conhecimento - Portfólio Dinâmico

Este é um projeto de uma página web estática que funciona como uma base de conhecimento pessoal ou portfólio. Ele exibe uma coleção de projetos e artigos em formato de cards, com funcionalidade de busca em tempo real para filtrar o conteúdo.

![Screenshot da Aplicação](src/img/bg-hero.1762108430.png)
*(Sugestão: troque o caminho acima pelo de um screenshot mais representativo da sua aplicação)*

## ✨ Funcionalidades

- **Renderização Dinâmica de Conteúdo**: O conteúdo dos cards não está fixo no HTML. Ele é carregado de forma assíncrona a partir dos arquivos `data.json` e `blog.json`, tornando a manutenção e adição de novos itens muito mais simples.
- **Busca em Tempo Real**: Um campo de busca permite filtrar os cards exibidos com base no título ou descrição, proporcionando uma experiência de usuário rápida e interativa.
- **Design Limpo e Moderno**: Uma interface simples e focada no conteúdo, utilizando HTML semântico e CSS estilizado.

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando tecnologias web fundamentais, sem a necessidade de frameworks complexos:

- **HTML5**: Para a estrutura principal da página.
- **CSS3**: Para a estilização e o design visual.
- **JavaScript (Vanilla)**: Para toda a lógica de interatividade, incluindo a busca e a renderização dinâmica dos dados a partir dos arquivos JSON.

## 📂 Estrutura do Projeto

```
/
├── index.html            # Arquivo principal da estrutura da página
├── style.css             # Folha de estilos para a aparência visual
├── script.js             # Lógica de programação (busca e renderização)
├── data.json             # "Banco de dados" com as informações dos projetos/cards
├── blog.json             # "Banco de dados" com as informações dos posts de blog
├── src/                    # Pasta com assets (imagens, vídeos, etc.)
└── README.md             # A documentação que você está lendo
```

## ⚙️ Como Utilizar

Como não há necessidade de um servidor ou processo de compilação, você pode simplesmente:

1.  Clonar ou baixar este repositório.
2.  Abrir o arquivo `index.html` diretamente em seu navegador de preferência (Google Chrome, Firefox, etc.).

## ✏️ Como Adicionar Conteúdo

Para adicionar novos projetos ou artigos, você não precisa mexer no `index.html` ou `script.js`. Basta editar os arquivos JSON:

- **Para adicionar um novo projeto**: Abra o arquivo `data.json` e adicione um novo objeto ao array, seguindo a estrutura existente:

  ```json
  {
    "image": "caminho/para/imagem.png",
    "title": "Título do Novo Projeto",
    "description": "Descrição breve do seu novo projeto.",
    "link": "https://link-para-o-projeto.com"
  }
  ```

- **Para adicionar um novo post de blog**: Faça o mesmo no arquivo `blog.json`.
