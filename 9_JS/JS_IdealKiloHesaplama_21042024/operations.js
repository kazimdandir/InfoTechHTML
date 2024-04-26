function hesapla(){
    var boy = parseInt(document.getElementById('boy').value);
    var kilo = parseInt(document.getElementById('kilo').value);
    var dYili = parseInt(document.getElementById('dYili').value);
    var cinsiyet = document.getElementById('cinsiyet').value.toLowerCase();

    var k;

    if (cinsiyet === 'e') {
        k = 0.9;
    } else if (cinsiyet === 'k') {
        k = 0.8;
    } else {
        k = 0;
    }

    var gecerliTarih = new Date();
    var yas = gecerliTarih.getFullYear() - dYili;

    var ideal = (boy - 100 + yas / 10) * k;

    if (isNaN(ideal)) {
        document.getElementById('sonuc').innerHTML = '';
        document.getElementById('mesaj').innerHTML = 'Lütfen geçerli değerler girin.';
    } else {
        var sonucDiv = document.getElementById('sonuc');
        var mesajDiv = document.getElementById('mesaj');

        if (ideal === kilo) {
            sonucDiv.innerHTML = '<div class="alert alert-success">Fitsiniz</div>';
            mesajDiv.innerHTML = '';
        } else if (ideal < kilo) {
            sonucDiv.innerHTML = '<div class="alert alert-danger">Şişmansınız</div>';
            mesajDiv.innerHTML = '';
        } else {
            sonucDiv.innerHTML = '<div class="alert alert-warning">Zayıfsınız</div>';
            mesajDiv.innerHTML = '';
        }
    }
}