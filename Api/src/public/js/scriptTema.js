function fazerRequisicao() {
    fetch('http://44.204.47.153:3333/api/temas')
        .then(response => response.json())
        .then(data => preencherTabela(data)) 
        .catch(error => console.error('Erro:', error));
}

// Função para preencher a tabela com os dados da API
function preencherTabela(data) {
    var tabela = document.getElementById('dados-api');

    for (var i = 0; i < data.length; i++) {
        var item = data[i];

        var linha = document.createElement('tr');
        var colunaId = document.createElement('td');
        var colunaTema = document.createElement('td');
        var colunaCachorro = document.createElement('td');
        var colunaOnca = document.createElement('td');
        //img 
        var imgOnca = document.createElement('img');
        var imgCachorro = document.createElement('img');

        //botao excluir

        var botaoExcluir = BotaoExcluir(item.id);
        
        colunaId.textContent = item.id;
        colunaTema.textContent = item.tema;
        imgCachorro.src = item.url_cachorro;
        imgOnca.src = item.url_onca;
        colunaCachorro.appendChild(imgCachorro);
        colunaOnca.appendChild(imgOnca);

        linha.appendChild(colunaId);
        linha.appendChild(colunaTema);
        linha.appendChild(colunaCachorro);
        linha.appendChild(colunaOnca);
        linha.appendChild(botaoExcluir);

        tabela.appendChild(linha);
    }
}


function BotaoExcluir(id) {
    var colunaExcluir = document.createElement('td');
    var botaoExcluir = document.createElement('button');
    var imgExcluir = document.createElement('img');
    
    
    imgExcluir.id = 'crud-buttons';
    imgExcluir.src = 'https://cdn.icon-icons.com/icons2/17/PNG/256/recyclebinfilled_recycling_full_garbage_1993.png' ;

    botaoExcluir.addEventListener('click', function() {
        excluirItem(id);
    });

    colunaExcluir.appendChild(botaoExcluir).appendChild(imgExcluir); //

    return colunaExcluir;
}

function excluirItem(id) {
    var url = 'http://localhost:3333/api/temas/' + id;

    fetch(url, {
        method: 'DELETE'
    }).then(response => {
        if (response.ok) {
            alert('Item excluído com sucesso!');
            location.reload(); // Recarregar a página após excluir
        } else {
            alert('Erro ao excluir o item.');
        }
    }).catch(error => console.error('Erro:', error));
}

// Fazer a requisição quando a página é carregada
window.onload = fazerRequisicao;