const notificarButton = document.getElementById("notificar");
const beijoButton = document.getElementById("beijo");
const beijoGif = document.getElementById("beijoGif");
const alertBox = document.createElement("div");

alertBox.className = "alert-box";
alertBox.textContent = "Amor, não esqueçe de levar o RG em Holambra 🫶🏻";
const heartRainContainer = document.getElementById("heart-rain");

// Função para criar e exibir a chuva de corações
function startHeartRain() {
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement("img");
        heart.src = "coracao.png";
        heart.className = "heart-rain";
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 5 + 2}s`;
        heart.style.animationDelay = `${Math.random() * 2}s`;
        heartRainContainer.appendChild(heart);
    }
}

// Função para parar a chuva de corações
function stopHeartRain() {
    heartRainContainer.innerHTML = "";
}

function showAlert() {
    document.body.appendChild(alertBox);
    alertBox.style.display = "block";
    setTimeout(() => {
        alertBox.style.animation = "zoom-rotate 0.5s ease-out"; // Aplica a animação de zoom e rotação
        alertBox.addEventListener("animationend", () => {
            document.body.removeChild(alertBox);
            alertBox.style.animation = ""; // Remove a animação após a conclusão
        });
    }, 10000);
}

// Adiciona evento de clique ao botão "CLIQUE AQUI"
notificarButton.addEventListener("click", () => {
    showAlert();
});

// Adiciona evento de clique ao botão "22/01"
beijoButton.addEventListener("click", () => {
    if (beijoGif.style.display === "block") {
        beijoGif.style.display = "none"; // Fecha o GIF se estiver aberto
        stopHeartRain(); // Para a chuva de corações
        alertBox.style.display = "none"; // Esconde a caixa de mensagem se estiver aberta
    } else {
        beijoGif.style.display = "block"; // Abre o GIF se estiver fechado
        startHeartRain(); // Inicia a chuva de corações
        showAlert(); // Exibe a caixa de mensagem
    }
});