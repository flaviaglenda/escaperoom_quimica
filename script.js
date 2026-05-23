let score = 0;
let lives = 3;
let currentQuestion = 0;
let hintUsed = false;

let minutes = 20;
let seconds = 0;

let timerInterval;


// senha final

const password = ["4", "2", "8", "6"];



const questions = [

    {

        title: "Nível 1 — Tabela Periódica",

        question: "Qual símbolo químico do sódio?",

        answers: [
            "So",
            "Na",
            "Sd",
            "Sn"
        ],

        correct: 1,

        hint: "É usado no sal de cozinha."

    },

    {

        title: "Nível 2 — Massa Química",

        question: "Qual unidade representa massa molar?",

        answers: [
            "kg",
            "g/mol",
            "L",
            "cm³"
        ],

        correct: 1,

        hint: "Está relacionada ao mol."

    },

    {

        title: "Nível 3 — Distribuição Eletrônica",

        question: "Quem criou o diagrama usado na distribuição eletrônica?",

        answers: [
            "Dalton",
            "Pauling",
            "Newton",
            "Bohr"
        ],

        correct: 1,

        hint: "Seu nome aparece no próprio diagrama."

    },

    {

        title: "Nível 4 — Números Quânticos",

        question: "Quantos números quânticos existem?",

        answers: [
            "2",
            "4",
            "6",
            "8"
        ],

        correct: 1,

        hint: "Principal, secundário, magnético e spin."

    }

];




const startBtn =
    document.getElementById(
        "startBtn"
    );

const hintBtn =
    document.getElementById(
        "hintBtn"
    );

const unlockBtn =
    document.getElementById(
        "unlockBtn"
    );



startBtn.addEventListener(
    "click",
    startGame
);


hintBtn.addEventListener(
    "click",
    showHint
);


unlockBtn.addEventListener(
    "click",
    unlockBox
);




function startGame() {

    Swal.fire({

        title: "🧪 Missão iniciada",

        text: "Descubra os 4 dígitos secretos.",

        background: "#111",

        color: "#fff",

        confirmButtonColor: "#00ff66"

    })

        .then(() => {

            document
                .getElementById(
                    "startScreen"
                )
                .classList.add(
                    "hidden"
                );


            document
                .getElementById(
                    "gameScreen"
                )
                .classList.remove(
                    "hidden"
                );


            loadQuestion();

            startTimer();

        });

}




function loadQuestion() {

    hintUsed = false;

    let q =
        questions[
        currentQuestion
        ];


    document
        .getElementById(
            "levelTitle"
        )
        .innerText =
        q.title;


    document
        .getElementById(
            "question"
        )
        .innerText =
        q.question;



    let answers =
        document.getElementById(
            "answers"
        );

    answers.innerHTML = "";



    q.answers.forEach(

        (answer, index) => {


            let button =
                document.createElement(
                    "button"
                );


            button.className =
                "answerBtn";


            button.innerText =
                answer;


            button.onclick =
                () => checkAnswer(index);


            answers.appendChild(
                button
            );


        }

    );

}




function showHint() {

    hintUsed = true;


    Swal.fire({

        title: "💡 Dica",

        text:

            questions[
                currentQuestion
            ].hint,

        background: "#111",

        color: "#fff",

        confirmButtonColor: "#00ff66"

    });

}




function checkAnswer(index) {

    let q =
        questions[
        currentQuestion
        ];


    if (
        index === q.correct
    ) {

        score +=

            hintUsed
                ?
                5
                :
                10;


        unlockDigit();

        updateHUD();


        Swal.fire({

            icon: "success",

            title: "Correto!",

            text: "Você encontrou um dígito.",

            background: "#111",

            color: "#fff",

            confirmButtonColor: "#00ff66"

        });


        currentQuestion++;


        setTimeout(() => {


            if (

                currentQuestion >=
                questions.length

            ) {

                finishGame();

            }

            else {

                loadQuestion();

            }


        }, 1500);

    }

    else {

        score += 1;

        lives--;


        updateHUD();


        Swal.fire({

            icon: "error",

            title: "Errado",

            text: "Você perdeu uma vida.",

            background: "#111",

            color: "#fff"

        });


        if (
            lives <= 0
        ) {

            clearInterval(
                timerInterval
            );


            Swal.fire({

                title: "GAME OVER",

                text: "Você perdeu todas as vidas.",

                icon: "warning",

                background: "#111",

                color: "#fff"

            })

                .then(() => {

                    location.reload();

                });

        }

    }

}




function unlockDigit() {

    let pos =
        currentQuestion + 1;


    document
        .getElementById(
            "d" + pos
        )
        .innerText =

        password[
        currentQuestion
        ];

}



function updateHUD() {

    document
        .getElementById(
            "score"
        )
        .innerText =
        score;


    document
        .getElementById(
            "lives"
        )
        .innerText =
        lives;

}




function startTimer() {

    timerInterval =

        setInterval(() => {


            seconds--;


            if (
                seconds < 0
            ) {

                seconds = 59;

                minutes--;

            }


            if (
                minutes < 0
            ) {

                clearInterval(
                    timerInterval
                );

                finishGame();

                return;

            }


            document
                .getElementById(
                    "timer"
                )
                .innerText =

                `${minutes}:${seconds
                    .toString()
                    .padStart(
                        2,
                        "0"
                    )}`;


        }, 1000);

}




function finishGame() {

    clearInterval(
        timerInterval
    );


    document
        .getElementById(
            "gameScreen"
        )
        .classList.add(
            "hidden"
        );


    document
        .getElementById(
            "endScreen"
        )
        .classList.remove(
            "hidden"
        );


    document
        .getElementById(
            "finalScore"
        )
        .innerText =

        `Pontuação: ${score}/40`;



    let rank =
        "🥉 BRONZE";


    let medal =
        document.querySelector(
            ".bronze"
        );


    if (
        score >= 35
    ) {

        rank =
            "🥇 OURO";


        medal =
            document.querySelector(
                ".ouro"
            );

    }

    else if (
        score >= 25
    ) {

        rank =
            "🥈 PRATA";


        medal =
            document.querySelector(
                ".prata"
            );

    }


    document
        .getElementById(
            "ranking"
        )
        .innerText =
        rank;


    medal.classList.add(
        "activeRank"
    );

}


function unlockBox() {

    let code =

        document.getElementById("p1").value +
        document.getElementById("p2").value +
        document.getElementById("p3").value +
        document.getElementById("p4").value;


    if (code === "4286") {

        document
            .querySelector(".box")
            .classList.add("opened");


        Swal.fire({

            icon: "success",

            title: "🔓 Caixa aberta!",

            text: "A caixa começou a liberar arquivos secretos...",

            background: "#111",

            color: "#fff",

            confirmButtonColor: "#00ff66"

        })

            .then(() => {

                setTimeout(() => {

                    document
                        .getElementById("endScreen")
                        .classList.add("hidden");


                    document
                        .getElementById("victoryScreen")
                        .classList.remove("hidden");


                    document
                        .getElementById("finalRank")
                        .innerText =

                        document
                            .getElementById("ranking")
                            .innerText;


                    document
                        .getElementById("victoryPoints")
                        .innerText =

                        `Pontuação final: ${score}/40`;

                }, 1500);

            });

    }

    else {

        Swal.fire({

            icon: "error",

            title: "Senha incorreta",

            text: "A caixa continua bloqueada.",

            background: "#111",

            color: "#fff"

        });

    }

}