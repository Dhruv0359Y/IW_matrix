const Questions = [
    {
        Question: "What is the primary purpose of the patent prosecution process? ",
        answers: [
            { text: "Granting exclusive rights to the inventor ", correct: true },
            { text: "Generating revenue for the government  ", correct: false },
            { text: "disclosure of the invention ", correct: false },
            { text: "Promoting international collaboration  ", correct: false },
        ]
    },
    {
        Question: "Which organization governs the protection and recognition of well-known trademarks internationally?  ",
        answers: [
            { text: "WIPO (World Intellectual Property Organization)  ", correct: true },
            { text: "USPTO (United States Patent and Trademark Office) ", correct: false },
            { text: "EPO (European Patent Office)", correct: false },
            { text: "IPO (Intellectual Property Office) ' rights  ", correct: false },
        ]
    },
    {
        Question: "Which of the following is a crucial aspect for an invention to be considered non obvious and patentable?",
        answers: [
            { text: "Extensive prior art", correct: false },
            { text: "Low production cost", correct: false },
            { text: "Unique and unexpected innovation  ", correct: true },
            { text: "Limited commercial potential", correct: false },
        ]
    },
    {
        Question: ") In an Intellectual Property Rights (IPR) context, what does a claim define?",
        answers: [
            { text: "The entire invention  ", correct: false },
            { text: "The scope of protection sought for the invention ", correct: true },
            { text: "The inventor's biography  ", correct: false },
            { text: "The market potential of the invention ", correct: false },
        ]
    },
    {
        Question: "Trade secrets are protected under:    ",
        answers: [
            { text: " Copyright law  ", correct: false },
            { text: "Patent law ", correct: false },
            { text: "Trademark law  ", correct: false},
            { text: "Contract law ", correct: true},
        ]
    }
];

const questionElement = document.getElementById("Question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("nextbtn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = Questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
        Question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);

    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");

        }
        button.disabled = true;
    })
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of  ${Questions.
        length}!`;
    nextButton.innerHTML = "Play again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < Questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < Questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }

})



startQuiz();
