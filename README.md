# Base de Conhecimento - Portfólio Dinâmico

Este é um projeto de uma página web estática que funciona como uma base de conhecimento pessoal ou portfólio. Ele exibe uma coleção de projetos e artigos em formato de cards, com funcionalidade de busca em tempo real para filtrar o conteúdo.

![Screenshot da Aplicação]

<img width="1919" height="1079" alt="Captura de tela 2025-11-23 222502" src="https://github.com/user-attachments/assets/da301cc4-f646-4b40-9b08-644605d40b1d" />
<img width="1919" height="1079" alt="Captura de tela 2025-11-23 222523" src="https://github.com/user-attachments/assets/430968a5-a65c-4d8d-b39f-1dbcefceaeb7" />
<img width="1919" height="1079" alt="Captura de tela 2025-11-23 222550" src="https://github.com/user-attachments/assets/08da6972-488f-4b41-90b3-a5c2eb5b5eba" />
<img width="1919" height="1079" alt="Captura de tela 2025-11-23 222559" src="https://github.com/user-attachments/assets/769513a2-5931-4098-a32b-de94696aad3f" />
<img width="500" height="941" alt="Captura de tela 2025-11-23 235518" src="https://github.com/user-attachments/assets/878e9de7-82c2-4d2b-9003-dbfe55ebd581" />
<img width="496" height="941" alt="Captura de tela 2025-11-23 235534" src="https://github.com/user-attachments/assets/9c632990-3a30-45b9-b02b-7f1fc97bae8f" />
<img width="495" height="939" alt="Captura de tela 2025-11-23 235547" src="https://github.com/user-attachments/assets/77baea3e-49a3-4bb5-af22-ff2851f27804" />
<img width="1121" height="940" alt="Captura de tela 2025-11-23 235602" src="https://github.com/user-attachments/assets/377c7fa9-d420-4cda-99cf-191ee2b44e35" />
<img width="1122" height="941" alt="Captura de tela 2025-11-23 235611" src="https://github.com/user-attachments/assets/d0836772-1f5c-49ed-8ebd-bc12c0f77192" />
<img width="541" height="942" alt="Captura de tela 2025-11-23 235621" src="https://github.com/user-attachments/assets/28cb9a89-ad0c-4bc1-aec2-e2b243d224f3" />


[▶️ Ver vídeo no Google Drive](https://drive.google.com/file/d/1QRx7BEwX6tPNFnKyukiM4Fr4lmH9dpoj/view?usp=sharing)

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
