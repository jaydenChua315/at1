document.addEventListener("DOMContentLoaded", function() {
    let currentQuestionIndex = 0;
    const questions = JSON.parse(document.getElementById('content').getAttribute('data-questions'));
    const content = document.getElementById('content');
    const btn = document.getElementById('revealBtn');

    function displayQuestion() {
        if (currentQuestionIndex < questions.length) {
            const question = questions[currentQuestionIndex].fields.question_text;
            const answer = questions[currentQuestionIndex].fields.answer_text;
            content.innerHTML = `<div class='question'>Question: ${question}</div><div class='answer' style='display: none;'>Answer: ${answer}</div>`;
            btn.textContent = "Reveal Answer";
        } else {
            content.innerHTML = "No more questions.";
            btn.style.display = "none";
        }
    }

    displayQuestion();
    
    // Button for revealing answer and showing next question.
    btn.addEventListener("click", function() {
        const answerElement = content.querySelector('.answer');
        if (btn.textContent === "Reveal Answer") {
            answerElement.style.display = "block";
            btn.textContent = "Next Question";
        } else {
            currentQuestionIndex++;
            displayQuestion();
        }
    });
});

// JavaScript to handle category selection
document.getElementById("categorySelect").addEventListener("change", function() {
    var selectedCategory = this.value;
    filterQuestions(selectedCategory);
    filterQuestions1(selectCategory1);
});

function filterQuestions(category) {
    var questions = document.getElementById("content").dataset.questions;
    var parsedQuestions = JSON.parse(questions);
    
    // Filter questions based on selected category
    if (category === "all") {
        // Display all questions
        // Implement your logic here to display all questions
    } else {
        // Display questions from selected category
        var filteredQuestions = parsedQuestions.filter(function(question) {
            return question.category === category;
        });
        // Display filtered questions
        // Implement your logic here to display filtered questions
    }
};

// Function to set the current question
function setCurrentQuestion(questionData) {
    document.getElementById("questionDisplay").textContent = questionData.question_text;
    setCorrectAnswer(questionData.answer_text);
}

// Function to set the correct answer
function setCorrectAnswer(answer) {
    correctAnswer = answer.toLowerCase(); // Convert answer to lowercase for case-insensitive comparison
}

// Function to check the user's answer
function checkAnswer(userAnswer) {
    var formattedUserAnswer = userAnswer.toLowerCase(); // Convert user's answer to lowercase for case-insensitive comparison
    if (formattedUserAnswer === correctAnswer) {
        document.getElementById("resultMessage").innerHTML = "Got it!";
    } else {
        document.getElementById("resultMessage").textContent = "Oops, Try again?";
    }
}

// Fetch a random question from the database
var questionsData = JSON.parse(document.getElementById("content").dataset.questions);
var randomQuestionIndex = Math.floor(Math.random() * questionsData.length);
var randomQuestion = questionsData[randomQuestionIndex];
setCurrentQuestion(randomQuestion);

// Event listener for answer submission
document.getElementById("submitAnswerBtn").addEventListener("click", function() {
    var userAnswer = document.getElementById("answerInput").value;
    checkAnswer(userAnswer);
});