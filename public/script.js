// Handle No Button Click
const noButton = document.getElementById('no-button');
const messageBox = document.getElementById('message-box');

noButton.addEventListener('click', () => {
  messageBox.style.display = 'block'; // Show the message box
});

// Handle Yes Button Click
const yesButton = document.getElementById('yes-button');
const choiceContainer = document.getElementById('choice-container');
const questionContainer = document.getElementById('question-container');

yesButton.addEventListener('click', () => {
  choiceContainer.style.display = 'none'; // Hide Yes/No buttons
  questionContainer.style.display = 'block'; // Show Question Section
});

// Handle Answer Submission
const submitButton = document.getElementById('submit-answer');
const answerInput = document.getElementById('answer-input');
const errorMessage = document.getElementById('error-message');

submitButton.addEventListener('click', () => {
  const userAnswer = answerInput.value.trim().toLowerCase();
  if (userAnswer === 'shirish') {
    window.location.href = '/hurray'; // Redirect to Hurray Page
  } else {
    errorMessage.style.display = 'block'; // Show Error Message
  }
});

