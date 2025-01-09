document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    let score = 0;
    const totalQuestions = 5;

    // Проверяем ответы
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');
    const q4 = document.querySelector('input[name="q4"]:checked');
    const q5 = document.querySelector('input[name="q5"]:checked');

    if (q1 && q1.value === 'yes') {
        score++;
    }
    if (q2 && q2.value === 'yes ofc') {
        score++;
    }
    if (q3 && q3.value === 'yes') {
        score++;
    }
    if (q4 && q4.value === 'yes') {
        score++;
    }
    if (q5 && q5.value === 'yes ofc') {
        score++;
    }
    
    // Выводим результат
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `u got ${score} from ${totalQuestions}, but it doesn't metter now (send me results!). click button`;

    const nextButton = document.getElementById('next-button');
    nextButton.style.display = 'block';
});