let itens = [
  {
    titulo: 'Café Expresso',
    descricao:
      'Café expresso feito com grãos selecionados com máquina profissional.',
    alt: 'Café Expresso',
    imagemUrl:
      'https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    titulo: 'Prensa Francesa',
    descricao: 'Sabor suave do café selecionado.',
    alt: 'Prensa Francesa',
    imagemUrl:
      'https://images.unsplash.com/photo-1444594975920-e69885b357d5?q=80&w=1712&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    titulo: 'Café Filtrado',
    descricao: 'Café filtrado v60 com todas as notas sensoriais.',
    alt: 'Café Filtrado',
    imagemUrl:
      'https://images.unsplash.com/photo-1498603536246-15572faa67a6?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    titulo: 'Café verde',
    descricao: 'Café filtrado v60 com todas as notas sensoriais.',
    alt: 'Café Filtrado',
    imagemUrl:
      'https://plus.unsplash.com/premium_photo-1674327105074-46dd8319164b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

if (!localStorage.getItem('produtos')) {
  localStorage.setItem('produtos', JSON.stringify(itens));
}

const createCards = () => {
  let produtos = JSON.parse(localStorage.getItem('produtos'));
  for (let produto of produtos) {
    let card = createCardItem(produto);
    let cardsDiv = document.getElementById('cards');
    if(cardsDiv){
      cardsDiv.insertAdjacentHTML('beforeend', card);
    }
  }
};

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

// função para adicionar lonha na tabala
const creatItensTable = () => {
  let produtos = JSON.parse(localStorage.getItem('produtos'));
  for (let produto of produtos) {
    let linha = creatRowTable(produto);
    let tbody = document.getElementById('itensTBody');
    tbody.insertAdjacentHTML('beforeend', linha);
  }
}

const  creatRowTable = (item) => {
  const tr = `<tr>
    <td>${item.titulo}</td>
    <td>${item.descricao}</td>
    <td>${item.alt}</td>
    <td><img src='${item.imagemUrl}' class="card-img-top" </td>
  </tr>`
  return tr;
}
 
// while
// for(;;)
// itens.map(()=>{});
// itens.forEach(()=>{});


createCards();

if(document.getElementById('itensTBody')){
  creatItensTable();
}
