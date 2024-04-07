        document.getElementById("geriGit").addEventListener("click", function(event) {
            event.preventDefault(); // Sayfa yenileme işlemini engelle
            window.history.back(); // Tarayıcı geçmişinde bir önceki sayfaya git
        });

        // Türkçe karakterleri büyük harfe dönüştüren özel bir fonksiyon
        function buyukHarfeDonustur(metin) {
            var harfler = {
                "i": "İ",
                "ş": "Ş",
                "ğ": "Ğ",
                "ü": "Ü",
                "ö": "Ö",
                "ç": "Ç",
                "ı": "I"
            };
            return metin.replace(/(([iışğüçöı]))/g, function(harf) {
                return harfler[harf];
            }).toUpperCase();
        }

        // H2 başlığını büyük harfe dönüştür
        var baslik = document.getElementById("baslik");
        baslik.innerHTML = buyukHarfeDonustur(baslik.innerHTML);