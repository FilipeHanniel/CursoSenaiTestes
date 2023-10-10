const produtos = [
    {
        tipo: "capacete",
        nome: "Capacete 1",
        alt: "Isto é um capacete, modelo1",
        preco: 50,
        imageURL: 'images/capacete01.png'
    },
    {   
        tipo: "capacete",
        nome: "Capacete 2",
        alt: "Isto é um capacete, modelo2",
        preco: 60,
        imageURL: 'images/capacete02.png'
    },
    {   
        tipo: "capacete",
        nome: "Capacete 3",
        alt: "Isto é uma blusa, modelo3",
        preco: 130,
        imageURL: 'images/capacete03.png',
    },
    {
        tipo: "blusão",
        nome: "Blusão 1",
        alt: "Isto é uma blusa, modelo1",
        preco: 100,
        imageURL: 'images/blusa01.png'
    },
    {   
        tipo: "blusão",
        nome: "Blusão 2",
        alt: "Isto é um capacete, modelo2",
        preco: 150,
        imageURL: 'images/blusa02.png'
    },
    {   
        tipo: "blusão",
        nome: "Blusão 3",
        alt: "Isto é uma blusa, modelo3",
        preco: 99,
        imageURL: 'images/blusa03.png'
    }
    
]

const carrinho = [];

const adicionarCarrinho = (numeroItem) => {
    carrinho.push(produtos[numeroItem]);
    mostrarQuantidadeItensCarrinho();
}

const mostrarQuantidadeItensCarrinho = () => {
    document.getElementById('link_carrinho').textContent = "Mostrar carrinho ("+ carrinho.length+ ")";

}

const criarProduto = (nome, alt, preco,imageURL, elemento, index) => {
    
    elemento.innerHTML = elemento.innerHTML
    + "<div class='produto'>" + 
    "<img src="+imageURL+" alt='"+alt+"'/>" +
    "<h2>"+ nome + "</h2>    <p>R$ " + preco + "</p> <button class='adicionarCarrinho' onclick='adicionarCarrinho("+ index +")'>Adicionar ao carrinho</button> </div>";
}

const buscarProdutos = () => {
    const lista = produtos;
    lista.forEach((item, index) => {
        let elemento = ""
        if (item.tipo === 'capacete') {
            elemento = document.getElementById('capacetes');
        } else {
            elemento = document.getElementById('blusas');
        }              
        criarProduto(item.nome, item.alt, item.preco, item.imageURL, elemento, index);
    })

    
}

mostrarQuantidadeItensCarrinho();
buscarProdutos();

