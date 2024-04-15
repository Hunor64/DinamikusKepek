let kepFajlok = [];
let listaFajl = 'lista.txt';

fetch(listaFajl)
    .then(response => response.text())
    .then(text => {
        kepFajlok = text.split('');

        let container = document.querySelector('.container');
        kepFajlok.forEach(kepNev => {
            let kartya = document.createElement('div');
            kartya.classList.add('kartya');

            let kep = document.createElement('img');
            kep.classList.add('kep');
            kep.src = `FREE_PNG/${mappa}/${kepNev}`;

            kartya.appendChild(kep);
            container.appendChild(kartya);
        });
    });