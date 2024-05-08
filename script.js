
// const button = document.querySelector("#RegisterBtn");
// button.addEventListener("click" , () =>{
//     for(let i = 1 ; i <=4 ; i++){
//         const checkedAnswer = document.querySelector(`input[name="ans${i}"]`).value;
//         if(!checkedAnswer){
//             alert("Please Fill the form");
//             return;
//         } 
//     }
//     const rollNumber = document.querySelector("#RollNumber").value;
//     const stdName= document.querySelector("#StudentName").value;
//     const batch = document.querySelector("#Batch").value;
//     const section = document.querySelector("#Section").value;

//     window.localStorage.setItem("RollNumber" , rollNumber);
//     window.localStorage.setItem("StudentName" , stdName);
//     window.localStorage.setItem("Batch" , batch);
//     window.localStorage.setItem("Section" , section);
//     window.location.href = "index.html";
    
// });
// let correct = document.querySelectorAll(".correct");
// let submit = document.querySelector(".submit");
// let tryAgain = document.querySelector(".tryAgain");

// submit.addEventListener("click", () => {
//     let score = 0;
//     for (let i = 1; i <= 10; i++) {
//         const selectedAnswer = document.querySelector(`input[name="answer${i}"]:checked`);
//        if(!selectedAnswer){
//         const message = document.querySelector(".showResult");
//         message.textContent = "Please fill the form Properly";
//         message.style.color = "red";
//         return;
//        } 
//         if (selectedAnswer && selectedAnswer.classList.contains('correct')) {
//             score += 10;
//         }
//         window.location.href = "result.html";
//     }
//     if(score >= 70 && score <= 100){
//         document.querySelector("#rollNumber1").textContent = rollNumber;
//         document.querySelector("#studentName1").textContent = stdName;
//         document.querySelector("#batch1").textContent = batch;
//         document.querySelector("#section1").textContent = section;

//         document.querySelector("#passFail").textContent = "Conratulation You are Passed";
//         document.querySelector("#score").textContent = `${score}`;
//         document.querySelector("#hardwork").textContent = "Weldone";
//     } 
// });
// tryAgain.addEventListener("click" , () =>{
//     location.reload();
// });

// const button = document.querySelector("#RegisterBtn");
// button.addEventListener("click", () => {
//     for (let i = 1; i <= 4; i++) {
//         const checkedAnswer = document.querySelector(`input[name="ans${i}"]`).value;
//         if (!checkedAnswer) {
//             alert("Please Fill the form");
//             return;
//         }
//     }
//     const rollNumber = document.querySelector("#RollNumber").value;
//     const stdName = document.querySelector("#StudentName").value;
//     const batch = document.querySelector("#Batch").value;
//     const section = document.querySelector("#Section").value;

//     window.localStorage.setItem("RollNumber", rollNumber);
//     window.localStorage.setItem("StudentName", stdName);
//     window.localStorage.setItem("Batch", batch);
//     window.localStorage.setItem("Section", section);
//     window.location.href = "index.html";

// });
// let tryAgain = document.querySelector(".tryAgain");
// const submit = document.querySelector(".submit");
// submit.addEventListener("click", () => {
//     let score = 0;
//     for (let i = 1; i <= 10; i++) {
//         const selectedAnswer = document.querySelector(`input[name="answer${i}"]:checked`);
//         if (!selectedAnswer) {
//             const message = document.querySelector(".showResult");
//             message.textContent = "Please fill the form Properly";
//             message.style.color = "red";
//             return;
//         }
//         if (selectedAnswer && selectedAnswer.classList.contains('correct')) {
//             score += 10;
//         }
//     }
//     window.location.href = "result.html";
// });

// // Accessing values from localStorage
// const rollNumber = window.localStorage.getItem("RollNumber");
// const stdName = window.localStorage.getItem("StudentName");
// const batch = window.localStorage.getItem("Batch");
// const section = window.localStorage.getItem("Section");

// if (score >= 70 && score <= 100) {
//     document.querySelector("#rollNumber1").textContent = rollNumber;
//     document.querySelector("#studentName1").textContent = stdName;
//     document.querySelector("#batch1").textContent = batch;
//     document.querySelector("#section1").textContent = section;

//     document.querySelector("#passFail").textContent = "Congratulations! You passed";
//     document.querySelector("#score").textContent = `${score}`;
//     document.querySelector("#hardwork").textContent = "Well done";
// };

// tryAgain.addEventListener("click" , () =>{
//     location.reload();
// });


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
        window.location.href = "index.html";
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







