jss
document.addEventListener("DOMContentLoaded", function() {
    const shopBtn = document.querySelector('.shop-btn');
    const shopSection = document.querySelector('.shop');

    // Exibir a loja de naves espaciais com uma transição suave
    setTimeout(() => {
        shopSection.classList.add('show');
    }, 1000); // Adicionar um atraso para a transição começar após 1 segundo

    // Adicionar interação de clique ao botão da loja
    shopBtn.addEventListener('click', function() {
        // Simular o redirecionamento para a página da loja
        window.location.href = 'pagina-da-loja.html'; // Substitua 'pagina-da-loja.html' pelo URL real da página da loja
    });

    const starfield = document.getElementById('starfield');

    for (let i = 0; i < 100; i++) {
        createStar();
    }

    function createStar() {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.width = `${Math.random() * 3}px`;
        star.style.height = star.style.width;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        starfield.appendChild(star);
    }
});
