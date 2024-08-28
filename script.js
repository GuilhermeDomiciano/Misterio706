function startGame() {
    // Limpa o conteúdo principal
    document.getElementById('main-content').innerHTML = '';

    // Adiciona uma mensagem de boas-vindas
    const welcomeMessage = document.createElement('div');
    welcomeMessage.innerHTML = 'Seja bem-vindo ao jogo Mistério 706.<br>Antes de começarmos, qual é o seu nome?<br>';
    document.getElementById('main-content').appendChild(welcomeMessage);

    // Cria e adiciona o campo de entrada para o nome
    const caixaNome = document.createElement('input');
    caixaNome.id = 'inputName';
    caixaNome.placeholder = 'Digite seu nome'; // Adiciona um placeholder para melhor experiência do usuário
    document.getElementById('main-content').appendChild(caixaNome);

    // Cria e adiciona o botão de confirmação
    const btnConfirm = document.createElement('button');
    btnConfirm.className = 'btn'; // Corrige a propriedade para a classe
    btnConfirm.textContent = 'Prosseguir';
    btnConfirm.onclick = beginGame; // Define a função diretamente
    document.getElementById('main-content').appendChild(btnConfirm);
}

function beginGame() {
    const playerName = document.getElementById('inputName').value;

    document.getElementById('main-content').innerHTML = '';

    
}

