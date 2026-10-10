let questions = []
let nextId = 1;

function addQuestion (question, options, answer) {
    const newQuestion = {
        id: nextId++,
        question: question,
        options: options,
        answer: answer,
    }
    questions.push(newQuestion)
}

function showAllQuestions(questions) {
    questions.forEach(quest => {
        console.log(`${quest.id}. ${quest.question}`)
        console.log(`Варианты: ${quest.options.join(', ')}`)
    });
}

function askQuestion(id) {
    const quest = questions.find((q) => q.id === id);
    
    const optionsText = quest.options
        .map((option, index) => `${index + 1}. ${option}`)
        .join("\n");
    
    const userAnswer = prompt(
        `${quest.question}\n\n${optionsText}\n\nВведите ваш ответ:`
    );
    
    return userAnswer;
}


function checkAnswer(id, userAnswer) {
    const quest = questions.find((q) => {
        return q.id === id
    })
    return quest.answer === userAnswer
}

function startQuiz() {
    let score = 0;
    
    questions.forEach((quest) => {
        const userAnswer = askQuestion(quest.id);
        const isCorrect = checkAnswer(quest.id, userAnswer);
        
        if (isCorrect) {
            console.log("Правильно!");
            score++;
        } else {
            console.log(`Неправильно. Правильный ответ: ${quest.answer}`);
        }
    });
}

addQuestion(
    "Столица Франции?",
    ["Лондон", "Париж", "Берлин", "Мадрид"],
    "Париж"
);

addQuestion(
    "Сколько будет 2 + 2?",
    ["3", "4", "5", "6"],
    "4"
);

addQuestion(
    "Кто написал «Войну и мир»?",
    ["Пушкин", "Толстой", "Достоевский", "Чехов"],
    "Толстой"
);

addQuestion(
    "Какой язык программирования мы учим?",
    ["Python", "Java", "JavaScript", "C++"],
    "JavaScript"
);

addQuestion(
    "Сколько дней в неделе?",
    ["5", "6", "7", "8"],
    "7"
);

startQuiz();

