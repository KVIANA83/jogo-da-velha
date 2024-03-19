// Página Instruções 
// Redirecionar para a página anterior ao clicar no botão "Voltar"
document.querySelector('.btn-voltar button').addEventListener('click', function() {
  history.back();
});

// Página escolher Nível do jogo e salvar a escolha
// Função para carregar o nível salvo, se existir
// Função para carregar a pontuação salva, se existir
window.onload = function() {
  // Carregar nível salvo
  let savedLevel = localStorage.getItem('nivel');
  if (savedLevel) {
    document.querySelectorAll('.btn-nivel').forEach(function(btn) {
      if (btn.getAttribute('data-nivel') === savedLevel) {
        btn.classList.add('ativo');
      } else {
        btn.classList.remove('ativo');
      }
    });
  }

  // Carregar pontuação salva
  let pontuacaoX = localStorage.getItem('pontuacaoX');
  let pontuacaoO = localStorage.getItem('pontuacaoO');
  let empates = localStorage.getItem('empates');
  
  if (pontuacaoX !== null) {
    document.getElementById('pontuacaoX').textContent = pontuacaoX;
  }
  if (pontuacaoO !== null) {
    document.getElementById('pontuacaoO').textContent = pontuacaoO;
  }
  if (empates !== null) {
    document.getElementById('empates').textContent = empates;
  }
};

// Função para salvar a pontuação
function salvarPontuacao() {
  let pontuacaoX = document.getElementById('pontuacaoX').textContent;
  let pontuacaoO = document.getElementById('pontuacaoO').textContent;
  let empates = document.getElementById('empates').textContent;
  
  localStorage.setItem('pontuacaoX', pontuacaoX);
  localStorage.setItem('pontuacaoO', pontuacaoO);
  localStorage.setItem('empates', empates);
}

// Função para resetar a pontuação
function resetarPontuacao() {
  // Define a pontuação de cada jogador e empates como 0
  document.getElementById('pontuacaoX').textContent = '0';
  document.getElementById('pontuacaoO').textContent = '0';
  document.getElementById('empates').textContent = '0';

  // Remove os dados salvos do armazenamento local
  localStorage.removeItem('pontuacaoX');
  localStorage.removeItem('pontuacaoO');
  localStorage.removeItem('empates');
}

// Função para atualizar a pontuação do jogador X
function atualizarPontuacaoX() {
  let pontuacaoX = parseInt(document.getElementById('pontuacaoX').textContent);
  pontuacaoX++;
  document.getElementById('pontuacaoX').textContent = pontuacaoX;
  salvarPontuacao();
}

// Função para atualizar a pontuação do jogador O
function atualizarPontuacaoO() {
  let pontuacaoO = parseInt(document.getElementById('pontuacaoO').textContent);
  pontuacaoO++;
  document.getElementById('pontuacaoO').textContent = pontuacaoO;
  salvarPontuacao();
}

// Função para atualizar a pontuação de empates
function atualizarEmpates() {
  let empates = parseInt(document.getElementById('empates').textContent);
  empates++;
  document.getElementById('empates').textContent = empates;
  salvarPontuacao();
}

// Exemplo de uso: chame essas funções quando o jogador vencer ou houver um empate
// atualizarPontuacaoX(); // Para atualizar a pontuação do jogador X
// atualizarPontuacaoO(); // Para atualizar a pontuação do jogador O
// atualizarEmpates(); // Para atualizar a pontuação de empates

// Adicionando evento de clique ao botão de reset
document.getElementById('resetPontuacao').addEventListener('click', resetarPontuacao);

// Dinamismo do Jogo
document.addEventListener('DOMContentLoaded', function() {
  const cells = document.querySelectorAll('.cell');
  const status = document.querySelector('.status');
  const resetButton = document.getElementById('resetGame');

  let currentPlayer = 'X';
  let gameStatus = ['','','','','','','','',''];

  // Função para verificar o estado do jogo
  function checkGameStatus() {
    const winningConditions = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
      [0, 4, 8], [2, 4, 6] // Diagonais
    ];

    for (let condition of winningConditions) {
      const [a, b, c] = condition;
      if (gameStatus[a] && gameStatus[a] === gameStatus[b] && gameStatus[a] === gameStatus[c]) {
        status.textContent = `O jogador ${gameStatus[a]} venceu!`;
        return;
      }
    }

    if (!gameStatus.includes('')) {
      status.textContent = 'Empate!';
    }
  }

  // Função para lidar com o clique em uma célula
  function cellClickHandler(event) {
    const cellIndex = event.target.dataset.index;

    if (gameStatus[cellIndex] === '' && !status.textContent.includes('venceu')) {
      gameStatus[cellIndex] = currentPlayer;
      event.target.textContent = currentPlayer;
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      status.textContent = `É a vez do jogador ${currentPlayer}`;
      checkGameStatus();
    }
  }

  // Função para reiniciar o jogo
  function resetGame() {
    gameStatus = ['','','','','','','','',''];
    cells.forEach(cell => {
      cell.textContent = '';
    });
    status.textContent = `É a vez do jogador X`;
    currentPlayer = 'X';
  }

  // Adicionar listeners de evento às células
  cells.forEach(cell => {
    cell.addEventListener('click', cellClickHandler);
  });

  // Adicionar listener de evento ao botão de reset
  resetButton.addEventListener('click', resetGame);
});

// Pagina Main
document.addEventListener('DOMContentLoaded', function() {
  const cells = document.querySelectorAll('.cell');
  const status = document.querySelector('.status');
  const resetButton = document.getElementById('resetGame');

  let currentPlayer = 'X';
  let gameStatus = ['','','','','','','','',''];

  // Função para verificar o estado do jogo
  function checkGameStatus() {
    const winningConditions = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
      [0, 4, 8], [2, 4, 6] // Diagonais
    ];

    for (let condition of winningConditions) {
      const [a, b, c] = condition;
      if (gameStatus[a] && gameStatus[a] === gameStatus[b] && gameStatus[a] === gameStatus[c]) {
        status.textContent = `O jogador ${gameStatus[a]} venceu!`;
        return;
      }
    }

    if (!gameStatus.includes('')) {
      status.textContent = 'Empate!';
    }
  }

  // Função para lidar com o clique em uma célula
  function cellClickHandler(event) {
    const cellIndex = event.target.dataset.index;

    if (gameStatus[cellIndex] === '' && !status.textContent.includes('venceu')) {
      gameStatus[cellIndex] = currentPlayer;
      event.target.textContent = currentPlayer;
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      status.textContent = `É a vez do jogador ${currentPlayer}`;
      checkGameStatus();
    }
  }

  // Função para reiniciar o jogo
  function resetGame() {
    gameStatus = ['','','','','','','','',''];
    cells.forEach(cell => {
      cell.textContent = '';
    });
    status.textContent = `É a vez do jogador X`;
    currentPlayer = 'X';
  }

  // Adicionar listeners de evento às células
  cells.forEach(cell => {
    cell.addEventListener('click', cellClickHandler);
  });

  // Adicionar listener de evento ao botão de reset
  resetButton.addEventListener('click', resetGame);
});
