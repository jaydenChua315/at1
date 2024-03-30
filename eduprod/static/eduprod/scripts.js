document.addEventListener("DOMContentLoaded", function() {
    let currentQuestionIndex = 0;
    let questionsJson = document.getElementById('content').getAttribute('data-questions');
    questionsJson = questionsJson.replace(/[\x00-\x1F\x7F-\x9F]/g, "");
    questionsJson = questionsJson.replace(/&nbsp;/g, " ");
    questionsJson = questionsJson.replace(/\s+/g, ' ').trim();
    console.log("Original JSON String:", questionsJson); // Check the transfer
    let questions = JSON.parse(questionsJson);
    console.log("Parsed Questions:", questions); // Check the parse
    const content = document.getElementById('content');
    const btn = document.getElementById('revealBtn');

    function displayQuestion() {
    console.log("Current Question Index:", currentQuestionIndex); // Check the index value
    console.log(questions[currentQuestionIndex]); // Check the array contents

    if (currentQuestionIndex < questions.length) {
    console.log(questions[0].fields); // Check if array is valid
    console.log(questions[currentQuestionIndex].fields); // Check if fields is accessible
    const question = questions[currentQuestionIndex].fields.question_text;
    const answer = questions[currentQuestionIndex].fields.answer_text;
    content.innerHTML = `<div class='question'>Question: ${question}</div><div class='answer' style='display: none;'>Answer: ${answer}</div>`;
    } else {
    content.innerHTML = "No more questions.";
    btn.style.display = "none";
    }
}

    // Listen for changes on the category dropdown
    categorySelect.addEventListener('change', (event) => {
        filterQuestionsByCategory(event.target.value);
    });


    // Filter questions based on the default or initial category selection
    filterQuestionsByCategory(categorySelect.value);


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
