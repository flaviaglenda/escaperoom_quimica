const questions = [
    // NÍVEL 1: Tabela Periódica
    {
        level: 1,
        category: "NÍVEL 1: Tabela Periódica",
        question: "O que representa o símbolo 'Fe'?",
        answers: ["Ferro", "Flúor", "Fósforo", "Fermio"],
        correct: 0,
        hint: "É um metal muito usado na construção civil.",
        digit: "9"
    },
    {
        level: 1,
        category: "NÍVEL 1: Tabela Periódica",
        question: "Em que família encontramos o hélio?",
        answers: ["Metais Alcalinos", "Halogênios", "Gases Nobres", "Calcogênios"],
        correct: 2,
        hint: "É a família 18."
    },
    {
        level: 1,
        category: "NÍVEL 1: Tabela Periódica",
        question: "O símbolo 'Au' corresponde a qual elemento?",
        answers: ["Prata", "Cobre", "Ouro", "Alumínio"],
        correct: 2,
        hint: "Vem do latim 'Aurum'."
    },
    {
        level: 1,
        category: "NÍVEL 1: Tabela Periódica",
        question: "Verdadeiro ou falso: O neônio é um gás nobre.",
        answers: ["Verdadeiro", "Falso"],
        correct: 0,
        hint: "Ele é usado em letreiros luminosos."
    },

    // NÍVEL 2: Massa Química
    {
        level: 2,
        category: "NÍVEL 2: Massa Química",
        question: "Verdadeiro ou falso: A massa atômica representa a massa de um único átomo de um elemento químico.",
        answers: ["Verdadeiro", "Falso"],
        correct: 0,
        hint: "Pense na definição básica.",
        digit: "1"
    },
    {
        level: 2,
        category: "NÍVEL 2: Massa Química",
        question: "Qual destas substâncias é uma molécula?",
        answers: ["Na", "O₂", "Fe", "Au"],
        correct: 1,
        hint: "Dois ou mais átomos ligados."
    },
    {
        level: 2,
        category: "NÍVEL 2: Massa Química",
        question: "Qual é a diferença entre massa atômica, massa molecular e massa molar?",
        answers: [
            "Não há diferença",
            "Atômica é do átomo, Molecular da molécula, Molar é por mol (g/mol)",
            "São apenas nomes diferentes",
            "Massa molar só serve para gases"
        ],
        correct: 1,
        hint: "Observe as unidades (u e g/mol)."
    },
    {
        level: 2,
        category: "NÍVEL 2: Massa Química",
        question: "Verdadeiro ou falso: A massa molecular é obtida pela soma das massas atômicas dos átomos que formam uma molécula.",
        answers: ["Verdadeiro", "Falso"],
        correct: 0,
        hint: "H₂O = 1+1+16 = 18 u."
    },

    // NÍVEL 3: Distribuição Eletrônica
    {
        level: 3,
        category: "NÍVEL 3: Distribuição Eletrônica",
        question: "Verdadeiro ou falso: O elétron mais energético sempre está no último subnível da configuração eletrônica.",
        answers: ["Verdadeiro", "Falso"],
        correct: 0,
        hint: "Seguimos a ordem de energia.",
        digit: "5"
    },
    {
        level: 3,
        category: "NÍVEL 3: Distribuição Eletrônica",
        question: "Verdadeiro ou falso: Na distribuição eletrônica, os elétrons ocupam primeiro os níveis de menor energia.",
        answers: ["Verdadeiro", "Falso"],
        correct: 0,
        hint: "Diagrama de Linus Pauling."
    },
    {
        level: 3,
        category: "NÍVEL 3: Distribuição Eletrônica",
        question: "Qual é a ordem correta de preenchimento segundo o diagrama de Linus Pauling?",
        answers: [
            "1s → 2s → 2p → 3s",
            "1s → 2p → 2s → 3s",
            "1s → 3s → 2s → 2p",
            "1s → 2s → 3s → 2p"
        ],
        correct: 0,
        hint: "Siga as setas diagonais."
    },
    {
        level: 3,
        category: "NÍVEL 3: Distribuição Eletrônica",
        question: "Qual é o elétron mais energético na configuração: 1s² 2s² 2p⁶ 3s² 3p⁵ ?",
        answers: ["2p⁶", "3s²", "3p⁵", "1s²"],
        correct: 2,
        hint: "É o último subnível preenchido."
    },

    // NÍVEL 4: Número Quântico
    {
        level: 4,
        category: "NÍVEL 4: Número Quântico",
        question: "Verdadeiro ou falso: Os números quânticos servem para identificar a posição e a energia de um elétron no átomo.",
        answers: ["Verdadeiro", "Falso"],
        correct: 0,
        hint: "É o 'endereço' do elétron.",
        digit: "0"
    },
    {
        level: 4,
        category: "NÍVEL 4: Número Quântico",
        question: "Verdadeiro ou falso: O número quântico secundário (l) está relacionado ao subnível do elétron.",
        answers: ["Verdadeiro", "Falso"],
        correct: 0,
        hint: "s=0, p=1, d=2, f=3."
    },
    {
        level: 4,
        category: "NÍVEL 4: Número Quântico",
        question: "Verdadeiro ou falso: O número quântico magnético determina a orientação espacial do orbital.",
        answers: ["Verdadeiro", "Falso"],
        correct: 0,
        hint: "Ele varia de -l a +l."
    },
    {
        level: 4,
        category: "NÍVEL 4: Número Quântico",
        question: "O número quântico principal (n) indica:",
        answers: ["o spin do elétron", "o nível de energia", "o orbital", "a rotação do núcleo"],
        correct: 1,
        hint: "Camadas K, L, M, N, O, P, Q."
    }
];

let currentQuestionIndex = 0;
let score = 0;
let lives = 3;
let timer;
let timeLeft = 1200;
let usedHint = false;
let foundDigits = ["?", "?", "?", "?"];
const correctPassword = ["9", "1", "5", "0"];

// DOM Elements
const startScreen = document.getElementById('startScreen');
const gameScreen = document.getElementById('gameScreen');
const endScreen = document.getElementById('endScreen');
const victoryScreen = document.getElementById('victoryScreen');
const startBtn = document.getElementById('startBtn');
const questionText = document.getElementById('question');
const answersContainer = document.getElementById('answers');
const levelTitle = document.getElementById('levelTitle');
const livesDisplay = document.getElementById('lives');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const hintBtn = document.getElementById('hintBtn');
const unlockBtn = document.getElementById('unlockBtn');

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            gameOver("O tempo acabou!");
        }
    }, 1000);
}

function startGame() {
    startScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    startTimer();
    showQuestion();
}

function showQuestion() {
    const q = questions[currentQuestionIndex];
    levelTitle.textContent = q.category;
    questionText.textContent = q.question;
    answersContainer.innerHTML = '';
    usedHint = false;

    q.answers.forEach((answer, index) => {
        const btn = document.createElement('button');
        btn.textContent = answer;
        btn.classList.add('answerBtn');
        btn.onclick = () => checkAnswer(index);
        answersContainer.appendChild(btn);
    });
}

function checkAnswer(selectedIndex) {
    const q = questions[currentQuestionIndex];
    
    if (selectedIndex === q.correct) {
        // Pontuação: 10 se sem dica, 5 se com dica
        score += usedHint ? 5 : 10;
        scoreDisplay.textContent = score;
        
        // Se a pergunta tinha um dígito da senha (fim do nível)
        if (q.digit) {
            updatePassword(q.digit, q.level);
        }

        Swal.fire({
            title: 'Correto!',
            icon: 'success',
            timer: 800,
            showConfirmButton: false
        });

        nextQuestion();
    } else {
        lives--;
        livesDisplay.textContent = lives;
        
        Swal.fire({
            title: 'Errado!',
            text: 'Você perdeu uma vida.',
            icon: 'error',
            confirmButtonText: 'Continuar'
        });

        if (lives <= 0) {
            backToPreviousLevel();
        }
    }
}

function updatePassword(digit, level) {
    foundDigits[level - 1] = digit;
    document.getElementById(`d${level}`).textContent = digit;
}

function backToPreviousLevel() {
    const currentLevel = questions[currentQuestionIndex].level;
    
    if (currentLevel > 1) {
        // Volta para o início do nível anterior
        const prevLevel = currentLevel - 1;
        currentQuestionIndex = questions.findIndex(q => q.level === prevLevel);
        
        // Limpa o dígito do nível que falhou e do anterior
        foundDigits[currentLevel - 1] = "?";
        foundDigits[prevLevel - 1] = "?";
        document.getElementById(`d${currentLevel}`).textContent = "?";
        document.getElementById(`d${prevLevel}`).textContent = "?";
    } else {
        // Se já estiver no nível 1, reinicia o nível 1
        currentQuestionIndex = 0;
    }

    lives = 3;
    livesDisplay.textContent = lives;
    
    Swal.fire({
        title: 'Vidas Esgotadas!',
        text: currentLevel > 1 ? "Você voltou ao início do nível anterior." : "Você reiniciou o Nível 1.",
        icon: 'warning',
        confirmButtonText: 'Recomeçar'
    }).then(() => {
        showQuestion();
    });
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        finishGame();
    }
}

function gameOver(reason) {
    clearInterval(timer);
    Swal.fire({
        title: 'Fim de Jogo',
        text: reason,
        icon: 'error',
        confirmButtonText: 'Reiniciar'
    }).then(() => {
        location.reload();
    });
}

function finishGame() {
    clearInterval(timer);
    gameScreen.classList.add('hidden');
    endScreen.classList.remove('hidden');
    updateRanking();
}

function updateRanking() {
    const rankingText = document.getElementById('ranking');
    const finalScoreText = document.getElementById('finalScore');
    finalScoreText.textContent = `Pontuação Final: ${score}`;

    // Ranking: Ouro (>130), Prata (90-130), Bronze (10-90)
    if (score > 130) {
        rankingText.textContent = "Ranking: OURO 🥇";
        document.querySelector('.ouro').classList.add('active');
    } else if (score >= 90) {
        rankingText.textContent = "Ranking: PRATA 🥈";
        document.querySelector('.prata').classList.add('active');
    } else if (score >= 10) {
        rankingText.textContent = "Ranking: BRONZE 🥉";
        document.querySelector('.bronze').classList.add('active');
    } else {
        rankingText.textContent = "Ranking: SEM MEDALHA";
    }
}

unlockBtn.onclick = () => {
    const p1 = document.getElementById('p1').value;
    const p2 = document.getElementById('p2').value;
    const p3 = document.getElementById('p3').value;
    const p4 = document.getElementById('p4').value;

    if ([p1, p2, p3, p4].join('') === correctPassword.join('')) {
        document.querySelector('.box').classList.add('open');
        setTimeout(() => {
            endScreen.classList.add('hidden');
            victoryScreen.classList.remove('hidden');
            document.getElementById('finalRank').textContent = document.getElementById('ranking').textContent;
            document.getElementById('victoryPoints').textContent = `Total de Pontos: ${score}`;
        }, 1000);
    } else {
        Swal.fire('Senha Incorreta!', 'Verifique os números encontrados nos níveis.', 'error');
    }
};

hintBtn.onclick = () => {
    if (!usedHint) {
        const q = questions[currentQuestionIndex];
        Swal.fire('Dica Química', q.hint, 'info');
        usedHint = true;
    } else {
        Swal.fire('Aviso', 'Você já usou a dica para esta pergunta!', 'warning');
    }
};

startBtn.onclick = startGame;

document.getElementById('showRulesBtn').onclick = () => {
    Swal.fire({
        title: 'COMO JOGAR & REGRAS',
        html: `
            <div style="text-align: left; font-family: 'Poppins', sans-serif; font-size: 0.9rem; line-height: 1.6; color: #333;">
                <p><b>Objetivo Geral:</b> Resolva os desafios químicos para desbloquear a senha e descobrir o que tem na caixa.</p>
                <br>
                <p><b>Dinâmica:</b> Acerte as perguntas para desbloquear a senha e avançar de nível.</p>
                <br>
                <p><b>Níveis:</b></p>
                <ul style="padding-left: 20px;">
                    <li>Nível 1: Tabela Periódica</li>
                    <li>Nível 2: Massa Química</li>
                    <li>Nível 3: Distribuição Eletrônica</li>
                    <li>Nível 4: Números Quânticos</li>
                </ul>
                <br>
                <p><b>Sistema de Pontos:</b></p>
                <ul style="padding-left: 20px;">
                    <li>Resposta Correta: 10 pontos</li>
                    <li>Resposta com Dica: 5 pontos</li>
                    <li>Erro: Perde uma vida</li>
                </ul>
                <br>
                <p><b>Informações Extras:</b></p>
                <ul style="padding-left: 20px;">
                    <li> Começa com 3 vidas.</li>
                    <li>Se perder todas as vidas, volta ao nível anterior.</li>
                    <li>Ranking: Ouro (>130), Prata (90-130), Bronze (10-90).</li>
                </ul>
            </div>
        `,
        confirmButtonText: 'ENTENDIDO',
        confirmButtonColor: '#00ff66',
        background: '#fff',
        width: '500px'
    });
};

const inputs = document.querySelectorAll('.passInput');
inputs.forEach((input, index) => {
    input.addEventListener('keyup', (e) => {
        if (e.target.value.length === 1 && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });
});
