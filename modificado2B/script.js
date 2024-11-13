// Função para abrir o vídeo no player flutuante
function abrirVideo(videoId) {
    const player = document.getElementById('player');
    const videoFlutuante = document.getElementById('videoFlutuante');

    // Atualiza o iframe com o URL do vídeo
    player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

    // Exibe o player flutuante
    videoFlutuante.style.display = 'block';
}

// Função para fechar o player flutuante
function fecharVideo() {
    const player = document.getElementById('player');
    const videoFlutuante = document.getElementById('videoFlutuante');

    // Limpa o vídeo para parar a reprodução ao fechar
    player.src = '';

    // Esconde o player flutuante
    videoFlutuante.style.display = 'none';
}
