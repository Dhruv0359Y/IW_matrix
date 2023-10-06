const Questions = [
    {
        Question: "What does IPR stand for? ",
        answers: [
            { text: "Internet Protocol Routing ", correct: false },
            { text: "Intellectual Property Rights ", correct: true },
            { text: "International Patent Registry ", correct: false },
            { text: "Individual Property Regulations ", correct: false },
        ]
    },
    {
        Question: "What is the main purpose of intellectual property rights? ",
        answers: [
            { text: "To limit creativity and innovation ", correct: false },
            { text: "To stifle competition in the market ", correct: false },
            { text: "To provide free access to all types of information ", correct: false },
            { text: "To encourage innovation and protect creators' rights  ", correct: true },
        ]
    },
    {
        Question: "What is the main purpose of patents? ",
        answers: [
            { text: "To protect an author's creative work ", correct: false },
            { text: "To prevent the copying of a unique product design ", correct: false },
            { text: "To grant inventors exclusive rights to their inventions ", correct: true },
            { text: "To keep trade secrets confidential  ", correct: false },
        ]
    },
    {
        Question: "What does a copyright protect?  ",
        answers: [
            { text: "A new plant species ", correct: false },
            { text: "An author's novel ", correct: true },
            { text: "A manufacturing process ", correct: false },
            { text: "A company's logo ", correct: false },
        ]
    },
    {
        Question: "What is the term of protection for a typical copyright?   ",
        answers: [
            { text: "5 years  ", correct: false },
            { text: "20 years ", correct: false },
            { text: "The lifetime of the creator plus 70 years ", correct: true },
            { text: "Indefinite ", correct: false },
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
    nextButton.innerHTML = "Play Again";
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
