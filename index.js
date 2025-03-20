document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const main = document.querySelector('main');
    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('open');
    });
});








document.addEventListener('DOMContentLoaded', function() {
    const reviewForm = document.getElementById('review-form');
    const reviewList = document.getElementById('review-list');

    reviewForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('review-name').value;
        const text = document.getElementById('review-text').value;

        if (name && text) {
            const reviewDiv = document.createElement('div');
            reviewDiv.classList.add('review');
            reviewDiv.innerHTML = `<strong>${name}:</strong> <p>${text}</p>`;
            reviewList.appendChild(reviewDiv);

            document.getElementById('review-name').value = '';
            document.getElementById('review-text').value = '';
        }
    });

    // Добавляем плавную прокрутку к якорям
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
    
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
    
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,  // отступ сверху, если есть фиксированный хедер
                    behavior: 'smooth'
                });
            }
        });
    });
});