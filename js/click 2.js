// 💬 Это скрипт от deepseek для обработки клика в таблице, см. в promo-block.css и projects.css

    document.addEventListener('DOMContentLoaded', function() {
        const rows = document.querySelectorAll('.clickable-row');
        
        rows.forEach(row => {
            row.addEventListener('click', function() {
                const url = this.getAttribute('data-href');
                if (url) {
                    window.location.href = url;
                }
            });
            
            // Опционально: открывать ссылку в новой вкладке по Ctrl+клик
            row.addEventListener('auxclick', function(e) {
                if (e.button === 1) { // Средняя кнопка мыши
                    e.preventDefault();
                    const url = this.getAttribute('data-href');
                    if (url) {
                        window.open(url, '_blank');
                    }
                }
            });
        });
    });