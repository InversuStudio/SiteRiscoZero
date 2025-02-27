$(document).ready(function() {
    // Configuração do carrossel
    $('#meu-carrossel').slick({
        centerMode: true,
        centerPadding: '50px',
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '20px'
                }
            }
        ]
    });

    // Suavização ao clicar nos links do menu
    $('.nav-link').click(function(e) {
        e.preventDefault();
        const target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 50
        }, 1000);
    });
});


$(document).ready(function() {
    // Configuração do carrossel
    $('#meu-carrossel').slick({
        centerMode: true,
        centerPadding: '50px',
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '20px'
                }
            }
        ]
    });

    // Suavização ao clicar nos links do menu (rolagem suave)
    $('.nav-link').click(function(e) {
        e.preventDefault(); // Previne o comportamento padrão de rolagem

        const target = $(this).attr('href'); // Pega o link do menu (ID do destino)
        
        // Rola suavemente até o destino, levando em consideração um pequeno espaço do topo
        $('html, body').animate({
            scrollTop: $(target).offset().top - 50 // A posição de rolagem é ajustada para 50px acima do destino
        }, 1000); // A duração da rolagem suave é de 1000ms (1 segundo)
    });
});


$(document).ready(function() {
    // Configuração do carrossel
    $('#meu-carrossel').slick({
        centerMode: true,
        centerPadding: '50px',
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false, // Mantemos os botões de navegação escondidos
        dots: true, // Habilitamos os pontos para indicar os slides
        customPaging: function(slider, i) {
            // Personalizamos os pontos, mostrando "Slide 1", "Slide 2", etc.
            return '<button class="slick-dot">Slide ' + (i + 1) + '</button>';
        },
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '20px'
                }
            }
        ]
    });

    // Suavização ao clicar nos links do menu (rolagem suave)
    $('.nav-link').click(function(e) {
        e.preventDefault(); // Previne o comportamento padrão de rolagem

        const target = $(this).attr('href'); // Pega o link do menu (ID do destino)
        
        // Rola suavemente até o destino, levando em consideração um pequeno espaço do topo
        $('html, body').animate({
            scrollTop: $(target).offset().top - 50 // A posição de rolagem é ajustada para 50px acima do destino
        }, 1000); // A duração da rolagem suave é de 1000ms (1 segundo)
    });
});



// imagem inicial



document.addEventListener('DOMContentLoaded', function() {
    const iniciarBtn = document.getElementById('iniciar-btn');
    const loadingScreen = document.getElementById('loading-screen');
    const siteContent = document.getElementById('site-content');

    iniciarBtn.addEventListener('click', function() {
        loadingScreen.style.display = 'none';
        siteContent.style.display = 'block';
        document.body.style.overflow = 'auto'; // Habilita a rolagem após clicar
    });
});

