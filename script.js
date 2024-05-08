
document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector("#RegisterBtn");
    button.addEventListener("click", function() {
        // Check if all fields are filled
        const inputs = document.querySelectorAll("input[type='text']");
        for (let input of inputs) {
            if (!input.value.trim()) {
                alert("Please fill all fields.");
                return;
            }
        }
        // Store student details in localStorage
        localStorage.setItem("RollNumber", document.querySelector("#RollNumber").value);
        localStorage.setItem("StudentName", document.querySelector("#StudentName").value);
        localStorage.setItem("Batch", document.querySelector("#Batch").value);
        localStorage.setItem("Section", document.querySelector("#Section").value);
        window.location.href = "quiz.html";
    });

    const submitButton = document.querySelector(".submit");
submitButton.addEventListener("click", function() {
    console.log("Submit button clicked"); // Check if the event listener is triggered
    let score = 0;
    // Iterate over each question
    for (let i = 1; i <= 10; i++) {
        const selectedAnswer = document.querySelector(`input[name="answer${i}"]:checked`);
        if (!selectedAnswer) {
            const message = document.querySelector(".showResult");
            message.textContent = "Please answer all questions.";
            message.style.color = "red";
            return;
        }
        // Increment score if the selected answer is correct
        if (selectedAnswer.classList.contains('correct')) {
            score += 10;
        }
    }
    // Store score in localStorage
    localStorage.setItem("score", score);
    window.location.href = "result.html";
});

});







