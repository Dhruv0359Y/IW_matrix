const Questions = [
    {
        Question: "Cyber nex Tech Innovations wants to protect the unique design and user interface of their TechMate device. Which form of intellectual property should they consider? ",
        answers: [
            { text: " Copyright ", correct: true },
            { text: "Patent ", correct: false },
            { text: "Trademark", correct: false },
            { text: "Trade secret", correct: false },
        ]
    },
    {
        Question: "To safeguard the specific algorithms and software code used in the TechMate device's AI capabilities, what should Cyber nex Tech Innovations apply for?",
        answers: [
            { text: "Trademark ", correct: false },
            { text: "Patent", correct: true },
            { text: "Copyright", correct: false },
            { text: ") Trade secret", correct: false },
        ]
    },
    {
        Question: "Cyber nex Tech Innovations is concerned about others using the name TechMate for similar products. Which type of intellectual property protection can help them prevent this?",
        answers: [
            { text: "Copyright ", correct: false },
            { text: "Trade secret", correct: false },
            { text: "Trademark ", correct: true },
            { text: "Patent", correct: false },
        ]
    },
    {
        Question: ") If Cyber nex Tech Innovations wants to protect the confidential source code and proprietary algorithms used in TechMate from unauthorized access or disclosure, what should they rely on?",
        answers: [
            { text: "Copyright   ", correct: false },
            { text: "Trade secret", correct: true },
            { text: "Trademark", correct: false },
            { text: "Patent", correct: false },
        ]
    },
    {
        Question: "Another tech company, ABC Innovations, has developed a similar personal assistant device called SmartBuddy. If Cyber nex Tech Innovations believes that SmartBuddy infringes on their intellectual property rights, what legal action can they take?",
        answers: [
            { text: " File a patent application  ", correct: false },
            { text: "Send a cease-and-desist letter", correct: true },
            { text: "Register a copyright", correct: false},
            { text: "Apply for a trademark", correct: false},
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
