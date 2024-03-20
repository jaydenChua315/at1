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
}