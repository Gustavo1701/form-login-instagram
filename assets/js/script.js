let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        
        function showSlide(n) {
            slides[currentSlide].style.display = 'none';
            currentSlide = (n + slides.length) % slides.length;
            slides[currentSlide].style.display = 'block';
        }

        function nextSlide() {
            showSlide(currentSlide + 1);
        }

        function prevSlide() {
            showSlide(currentSlide - 1);
        }

        function autoSlide() {
            nextSlide();
        }

        // Iniciar com o primeiro slide visível
        showSlide(0);

        // Slide automático a cada 3 segundos
        setInterval(autoSlide, 4000);