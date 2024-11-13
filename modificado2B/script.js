function abrirVideo(videoId) {
    const player = document.getElementById('player');
    const videoFlutuante = document.getElementById('videoFlutuante');
    
    // Atualizar o iframe com o vídeo correto
    player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

    // Exibir o player flutuante
    videoFlutuante.style.display = 'block';
}

function fecharVideo() {
    const videoFlutuante = document.getElementById('videoFlutuante');
    const player = document.getElementById('player');
    
    // Parar o vídeo quando for fechado
    player.src = '';

    // Esconder o player flutuante
    videoFlutuante.style.display = 'none';
}
