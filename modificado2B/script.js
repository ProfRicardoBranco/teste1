// Função para abrir o vídeo flutuante
function abrirVideo(videoId) {
    const player = document.getElementById('player');
    const videoFlutuante = document.getElementById('videoFlutuante');

    // Atualiza a URL do iframe para o vídeo do YouTube
    player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

    // Exibe o player flutuante
    videoFlutuante.style.display = 'block';
}

// Função para fechar o vídeo flutuante
function fecharVideo() {
    const player = document.getElementById('player');
    const videoFlutuante = document.getElementById('videoFlutuante');
    
    // Limpa o src do iframe para parar o vídeo
    player.src = '';

    // Esconde o player flutuante
    videoFlutuante.style.display = 'none';
}
