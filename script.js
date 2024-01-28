document.addEventListener('DOMContentLoaded', function () {
    var message = document.querySelector('.message');
    var countdown = document.getElementById('countdown');
    var hearts = document.querySelectorAll('.heart');
    var word1 = document.getElementById('word1');
    var word2 = document.getElementById('word2');
    var word3 = document.getElementById('word3');
    var heart = document.getElementById('heart');

    // Contagem regressiva de 10 segundos
    var timer = 10;
    var countdownInterval = setInterval(function () {
        timer--;
        if (timer <= 0) {
            clearInterval(countdownInterval);
            message.style.display = 'none';
            removeHearts();
            showWords();
        } else {
            hearts[timer].style.opacity = '0';
        }
    }, 1000);

    // Remover os corações após a contagem regressiva
    function removeHearts() {
        document.getElementById('hearts').style.display = 'none';
    }

    // Exibir as palavras uma após a outra
    function showWords() {
        setTimeout(function() {
            word1.classList.remove('hidden');
        }, 0);
        setTimeout(function() {
            word1.classList.add('hidden');
            word2.classList.remove('hidden');
        }, 2000);
        setTimeout(function() {
            word2.classList.add('hidden');
            word3.classList.remove('hidden');
        }, 4000);
        setTimeout(function() {
            word3.classList.add('hidden');
            heart.classList.remove('hidden');
        }, 6000);
    }
});
