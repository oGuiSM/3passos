document.addEventListener('DOMContentLoaded', function () {
    var countdown = document.getElementById('countdown');
    var message = document.getElementById('message');
    var success = document.getElementById('success');

    var timer = 10; // Tempo inicial da contagem regressiva

    var countdownInterval = setInterval(function () {
        timer--;
        countdown.textContent = timer;
        if (timer <= 0) {
            clearInterval(countdownInterval);
            countdown.style.display = 'none';
            message.style.display = 'block';
        }
    }, 1000);
});

function conquistar() {
    var message = document.getElementById('message');
    var success = document.getElementById('success');
    var body = document.body;

    message.style.display = 'none';
    success.style.display = 'block';
    body.style.backgroundImage = "url('https://img.freepik.com/fotos-premium/mao-fazendo-um-conceito-de-forma-de-coracao-amor-e-relacionamento-gesto_33745-540.jpg')";
}
