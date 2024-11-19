// script.js
document.querySelectorAll('.maisvideos a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        const videoId = this.getAttribute('data-video-id');
        const modal = document.getElementById('videoModal');
        const modalVideo = document.getElementById('modalVideo');
        
        // Define a URL do vídeo no modal com autoplay
        modalVideo.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        
        // Mostra o modal
        modal.style.display = 'block';
        
        // Fecha o modal ao clicar no botão de fechar
        document.querySelector('.close').onclick = function() {
            modal.style.display = 'none';
            modalVideo.src = ''; // Limpa o vídeo ao fechar
        }
        
        // Fecha o modal ao clicar fora do iframe
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
                modalVideo.src = ''; // Limpa o vídeo ao fechar
            }
        }
    });
});