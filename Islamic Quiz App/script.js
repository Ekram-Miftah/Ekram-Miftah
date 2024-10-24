const questions = [
    {
        question: "What event marks the beginning of the Islamic calendar (Hijri)?",
        answer: [
            { text: "The migration (Hijra) of Prophet Muhammad (PBUH) from Mecca to Medina", correct: true },
            { text: "The revelation of the Quran", correct: false },
            { text: "The birth of Prophet Muhammad (PBUH)", correct: false },
            { text: "The conquest of Mecca", correct: false },
        ]
    },
    {
        question: "Which Islamic scholar is known for formalizing the Five Pillars of Islam?",
        answer: [
            { text: "Imam Al-Ghazali", correct: false },
            { text: "Imam Al-Bukhari", correct: false },
            { text: "Imam Malik", correct: false },
            { text: "Imam Al-Shafi'i", correct: true },
        ]
    },
    {
        question: "Which battle is considered a turning point in Islamic history, securing the survival of early Muslims in Medina?",
        answer: [
            { text: "The Battle of Badr", correct: true },
            { text: "The Battle of Uhud", correct: false },
            { text: "The Battle of the Trench", correct: false },
            { text: "The Battle of Hunayn", correct: false },
        ]
    },
    {
        question: "Which school of thought in Islam emphasizes predestination (Qadar) as a key tenet of faith?",
        answer: [
            { text: "Ash'ari", correct: true },
            { text: "Mu'tazila", correct: false },
            { text: "Kharijite", correct: false },
            { text: "Ibadi", correct: false },
        ]
    },
    {
        question: "What is the significance of Laylat al-Qadr (The Night of Power) in the Islamic faith?",
        answer: [
            { text: "It is believed to be the night when the Quran was first revealed to Prophet Muhammad (PBUH)", correct: true },
            { text: "It is the night of Prophet Muhammad's (PBUH) ascension to the heavens", correct: false },
            { text: "It is the night when Muslims fast for the first time during Ramadan", correct: false },
            { text: "It is the night of the Eid celebration", correct: false },
        ]
    },
    {
        question: "In Islamic theology, which angel is responsible for taking the souls at the time of death?",
        answer: [
            { text: "Angel Azrael", correct: true },
            { text: "Angel Jibreel", correct: false },
            { text: "Angel Israfil", correct: false },
            { text: "Angel Mikael", correct: false },
        ]
    },
    {
        question: "Which Islamic philosopher is known for his work on reconciling Islamic teachings with Greek philosophy, particularly Aristotle?",
        answer: [
            { text: "Ibn Rushd (Averroes)", correct: true },
            { text: "Al-Farabi", correct: false },
            { text: "Ibn Sina (Avicenna)", correct: false },
            { text: "Al-Ghazali", correct: false },
        ]
    },
    {
        question: "Which verse of the Quran is often referred to as 'Ayat al-Kursi' (The Throne Verse) and is considered one of the most powerful verses?",
        answer: [
            { text: "Surah Al-Baqarah 2:255", correct: true },
            { text: "Surah Al-Ikhlas 112:1", correct: false },
            { text: "Surah Al-Fatiha 1:1", correct: false },
            { text: "Surah Yasin 36:58", correct: false },
        ]
    },
    {
        question: "In Sufism, what term refers to the spiritual journey of purifying the heart and soul to attain closeness to Allah?",
        answer: [
            { text: "Tazkiyah", correct: true },
            { text: "Fiqh", correct: false },
            { text: "Tawhid", correct: false },
            { text: "Shariah", correct: false },
        ]
    },
    {
        question: "What was the key treaty signed between Muslims and the Quraysh tribe that allowed the Muslims to perform Hajj peacefully for the first time?",
        answer: [
            { text: "The Treaty of Hudaybiyyah", correct: true },
            { text: "The Treaty of Taif", correct: false },
            { text: "The Treaty of Mecca", correct: false },
            { text: "The Treaty of Medina", correct: false },
        ]
    }
];


const questionElement = document.getElementById("question");
const answerBtns = document.getElementById("answer");
const nextBtn = document.getElementById("nextBtn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.style.display = "none";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = currentQuestion.question;
    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.classList.add("btn");
        button.innerHTML = answer.text;
        answerBtns.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextBtn.style.display = "none";
    while (answerBtns.firstChild) {
        answerBtns.removeChild(answerBtns.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerBtns.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length} questions!`;
    if (score > questions.length / 2) {
        questionElement.innerHTML += ` Nice! Keep it up.`;
    } else {
        questionElement.innerHTML += ` You should read more.`;
    }
    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = "block";
    nextBtn.addEventListener("click", startQuiz);
}

startQuiz();
