// Array inicial de itens de café com suas propriedades
let itens = [
  {
    titulo: 'Café Expresso',
    descricao: 'Café expresso feito com grãos selecionados com máquina profissional.',
    alt: 'Café Expresso',
    imagemUrl: 'https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    titulo: 'Prensa Francesa',
    descricao: 'Sabor suave do café selecionado.',
    alt: 'Prensa Francesa',
    imagemUrl: 'https://images.unsplash.com/photo-1444594975920-e69885b357d5?q=80&w=1712&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    titulo: 'Café Filtrado',
    descricao: 'Café filtrado v60 com todas as notas sensoriais.',
    alt: 'Café Filtrado',
    imagemUrl: 'https://images.unsplash.com/photo-1498603536246-15572faa67a6?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    titulo: 'Café verde',
    descricao: 'Café filtrado v60 com todas as notas sensoriais.',
    alt: 'Café Filtrado',
    imagemUrl: 'https://plus.unsplash.com/premium_photo-1674327105074-46dd8319164b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

// Verifica se já existem produtos no localStorage; se não, armazena os itens iniciais
if (!localStorage.getItem('produtos')) {
  localStorage.setItem('produtos', JSON.stringify(itens));
}

// Função para criar e exibir os cards dos produtos
const createCards = () => {
  let produtos = JSON.parse(localStorage.getItem('produtos')); // Recupera os produtos do localStorage
  for (let produto of produtos) { // Itera sobre cada produto
    let card = createCardItem(produto); // Cria um card para o produto
    let cardsDiv = document.getElementById('cards'); // Seleciona o elemento onde os cards serão inseridos
    if (cardsDiv) {
      cardsDiv.insertAdjacentHTML('beforeend', card); // Adiciona o card ao DOM
    }
  }
};

// Função para gerar o HTML de um card de produto
const createCardItem = (item) => {
  return `<div class="col m-2">
      <div class="card">
        <img src="${item.imagemUrl}" class="card-img-top" alt="${item.alt}">
        <div class="card-body">
          <h5 class="card-title">${item.titulo}</h5>
          <p class="card-text">${item.descricao}</p>
          <a href="#" class="btn btn-primary">Comprar</a>
        </div>
      </div>
    </div>`;
};

// Função para adicionar linhas na tabela de produtos
const creatItensTable = () => {
  let produtos = JSON.parse(localStorage.getItem('produtos')); // Recupera os produtos do localStorage
  for (let produto of produtos) { // Itera sobre cada produto
    let linha = creatRowTable(produto); // Cria uma linha para o produto
    let tbody = document.getElementById('itensTBody'); // Seleciona o corpo da tabela
    tbody.insertAdjacentHTML('beforeend', linha); // Adiciona a linha ao DOM
  }
}

// Função para gerar o HTML de uma linha da tabela
const creatRowTable = (item) => {
  const tr = `<tr>
    <td>${item.titulo}</td>
    <td>${item.descricao}</td>
    <td>${item.alt}</td>
    <td><img src='${item.imagemUrl}' class="card-img-top" alt="${item.alt}"></td>
  </tr>`;
  return tr; // Retorna a linha gerada
}

// Chama a função para criar os cards ao carregar a página
createCards()

// Função para adicionar novos itens ao localStorage
const addItens = (event) => {
  event.preventDefault(); // Impede o comportamento padrão do formulário
  
  // Obtém os valores dos campos do formulário
  const titulo = document.getElementById('titulo').value;
  const descricao = document.getElementById('descricao').value;
  const alt = document.getElementById('alt').value;
  const imagemUrl = document.getElementById('imagemUrl').value;

  // Cria um novo objeto de item
  const novoItem = { titulo, descricao, alt, imagemUrl };

  // Adiciona o novo item ao array de produtos
  let produtos = JSON.parse(localStorage.getItem('produtos'));
  produtos.push(novoItem);
  localStorage.setItem('produtos', JSON.stringify(produtos)); // Atualiza o localStorage

  // Recarrega a página para atualizar os elementos (melhorar isso pode ser uma boa ideia)
  location.reload();

  // Limpa o formulário após adicionar
  document.getElementById('formulario').reset();
};

// Adiciona o evento de submit ao formulário
const form = document.getElementById('formulario');
if (form) {
  form.addEventListener('submit', addItens); // Registra a função para adicionar itens ao enviar o formulário
}

// Cria a tabela ao carregar
if (document.getElementById('itensTBody')) {
  creatItensTable(); // Chama a função para criar a tabela se o elemento existir
}
