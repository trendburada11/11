document.addEventListener('DOMContentLoaded', function () {
    const product = [
        {
            id: 0,
            image: 'tool/img/blog/blog1.jpg',
            title: 'chatgbt doğru kullanmıyor olabilirsiniz',
            link: 'chatgbt_dogru_kullanmiyor_olabilirsin/index.html',
			date: '06/04/2024'
        },
        {
            id: 1,
            image: 'tool/img/blog/blog2.jpg',
            title: 'Link Kısaltma Yoluyla Gelir Kazanmak Artık Her Zamankinden Daha Kolay',
            link: 'link_kisaltarak_para_kazanma/index.html',
			date: '06/03/2024'
        },
        {
            id: 2,
            image: 'tool/img/blog/blog3.jpg',
            title: 'Fotoğraflardan Filigranları Kaldırmanın Yeni Bir Yolu',
            link: 'filigran_kaldirma/index.html',
			date: '06/02/2024'
        }
    ];

    const searchBar = document.getElementById('searchBar');

    searchBar.addEventListener('input', function (event) {
        const searchData = event.target.value.trim().toLowerCase();
        const filteredItems = product.filter(item => {
            return item.title.toLowerCase().includes(searchData);
        });
        displayItems(filteredItems);
    });

    function displayItems(items) {
        const cardContainer = document.querySelector('.blog-container');
        cardContainer.innerHTML = ''; // Önceki içeriği temizle
        items.forEach(item => {
            const { image, title, link, date } = item;
            const card = `
                <div class='card' data-link='blogs/${link}'>
                    <div class='image-container'>
                        <img src='${image}'>
                    </div>
                    <div class='card-content'>
                        <h2>${title}</h2>
						<p class="footer">Yazar <span class="name">TrendBurada11</span> <span class="date">${date}</span></p>
						
                    </div>
                </div>`;
            cardContainer.innerHTML += card;
        });

        // Eklenen card elementlerine click event'ı ekle
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.addEventListener('click', function() {
                const link = this.getAttribute('data-link');
                window.location.href = link; // Sayfayı belirtilen linke yönlendir
            });
        });
    }

    displayItems(product);
});
