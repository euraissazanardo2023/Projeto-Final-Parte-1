// Função para mover o carrossel
function moveCarousel(carouselId, direction) {
    const carousel = document.getElementById(carouselId);
    const totalImages = carousel.children.length;
    const currentTransform = getComputedStyle(carousel).transform;
    
    // Pegando o valor atual do 'translateX' (movimento da posição das imagens)
    const currentX = currentTransform === 'none' ? 0 : parseFloat(currentTransform.split(',')[4]);

    // Lógica para mover o carrossel para frente ou para trás
    const movement = direction === 1 ? -1 : 1; // Se for para frente, move -1 (para a esquerda), senão move 1 (para a direita)
    const newPosition = currentX + (movement * 300); // Ajuste o '300' conforme necessário para o espaçamento entre as imagens
    
    // Atualizando a posição do carrossel
    carousel.style.transform = `translateX(${newPosition}px)`;
}

// Função para ajustar a largura das imagens no carrossel, caso necessário
function adjustCarousel() {
    const carousels = document.querySelectorAll('.carousel');
    
    carousels.forEach(carousel => {
        const images = carousel.children;
        let totalWidth = 0;
        for (let i = 0; i < images.length; i++) {
            totalWidth += images[i].offsetWidth;
        }
        carousel.style.width = totalWidth + 'px';
    });
}

// Chama a função de ajuste ao carregar a página
window.addEventListener('load', adjustCarousel);
