window.onload = function() {
    var time = 0.5;
    
    document.querySelectorAll('.number').forEach(function(element) {
        var num = parseInt(element.getAttribute('data-num'));
        var i = 0;
        var step = Math.floor((time * 1000) / num);
        
        var int = setInterval(function() {
            if (i <= num) {
                element.innerHTML = i;
            } else {
                clearInterval(int);
            }
            i++;
        }, step);
    });
};

document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    let score = 0;
    const totalQuestions = 2;

    // Проверяем ответы
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');

    if (q1 && q1.value === 'html') {
        score++;
    }
    if (q2 && q2.value === 'css') {
        score++;
    }

    // Выводим результат
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Вы набрали ${score} из ${totalQuestions} правильных ответов.`;
});