function fazerRequisicao() {
    fetch('https://api-jdo-h6kx.onrender.com/api/user')
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
        var colunaNome = document.createElement('td');
        var colunaAtivo = document.createElement('td');
        var colunaLogin = document.createElement('td');
        var colunaSenha = document.createElement('td');       
        var colunaEmail = document.createElement('td');
    
        colunaId.textContent = item.id;
        colunaNome.textContent = item.nome;
        colunaAtivo.textContent = item.isActive ? 'Não' :'Sim';
        colunaLogin.textContent = item.login;
        colunaSenha.textContent = item.senha;
        colunaEmail.textContent = item.email;
        
        linha.appendChild(colunaId);
        linha.appendChild(colunaNome);
        linha.appendChild(colunaAtivo);
        linha.appendChild(colunaLogin);
        linha.appendChild(colunaSenha);
        linha.appendChild(colunaEmail);

        tabela.appendChild(linha);
    }
}

window.onload = fazerRequisicao;