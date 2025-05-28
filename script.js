let map;

const redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const yellowIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-yellow.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

const greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

let mapContainer = document.getElementById('map');
    window.circuiti = [
    //MOTOCROSS
    {
        id: 'mx-rivarolo',
        nome: 'Mx Rivarolo',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 45.1432,
        lng: 10.4901,
        info: '<a href="dettagli/mx-rivarolo.html">Dettagli Mx Rivarolo</a>'
    },
    {
        id: 'mx-lugugnano',
        nome: 'Lugugnano Cross Park',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 43.0287,
        lng: 13.7359,
        info: '<a href="dettagli/mx-lugugnano.html">Dettagli Mx Lugugnano</a>'
    },
    {
        id: 'mx-trofarello',
        nome: 'Pista Motocross Trofarello Circuit',
        tipo: 'motocross',
        difficolta: 'facile',
        lat: 44.9835,
        lng: 7.7167,
        info: '<a href="dettagli/mx-trofarello.html">Dettagli Mx Trofarello Circuit</a>'
    },
    {
        id: 'mx-frassini',
        nome: 'Pista Motocross Frassini-Chiusdino',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 43.164040,
        lng: 11.123724,
        info: '<a href="dettagli/mx-frassini.html">Dettagli Mx Frassini-Chiusdino</a>'
    },
    {
        id: 'mx-montevarchi',
        nome: 'Pista Motocross Montevarchi',
        tipo: 'motocross',
        difficolta: 'difficile',
        lat: 43.29423,
        lng: 11.32162,
        info: '<a href="dettagli/mx-montevarchi.html">Dettagli Mx Montevarchi</a>'
    },
    {
        id:'mx-santabarbara',
        nome: 'Pista Motocross Santa Barbara',
        tipo: 'motocross',
        difficolta: 'difficile',
        lat: 43.64313,
        lng: 10.79292,
        info: '<a href="dettagli/mx-santabarbara.html">Dettagli Mx Santa barbara</a>'
    },
    {
        id:'mx-gioiella',
        nome: 'Pista Motocross Gioiella',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 43.09799,
        lng: 11.97439,
        info: '<a href="dettagli/mx-gioiella.html">Dettagli Mx Gioiella</a>'
    },
    {
        id:'mx-magione',
        nome: 'Pista Motocross Magione-Carpine Racing Team',
        tipo: 'motocross',
        difficolta: 'facile',
        lat: 43.131111,
        lng: 12.239444, 
        info: '<a href="dettagli/mx-magione.html">Dettagli Mx Magione-Carpine Racing Team</a>'
    },
    {
        id:'mx-latrogna',
        nome: 'Pista Motocross G.Ceccarini "La Trogna"',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 43.49836561991677, 
        lng: 12.284167700938305,
        info: '<a href="dettagli/mx-latrogna.html">Dettagli Mx G.Ceccarini "La Trogna"</a>'
    },
    {
        id:'mx-gualdotadino',
        nome: 'Pista Motocross Gualdo tadino',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 43.20418868028757, 
        lng: 12.736364283733153,
        info: '<a href="dettagli/mx-gualdotadino.html">Dettagli Mx Gualdo Tadino</a>'
    },
    {
        id:'mx-casalemonferrato',
        nome: 'Pista Motocross Casale Monferrato',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 45.13616131524447, 
        lng: 8.379155645911815,
        info: '<a href="dettagli/mx-casalemonferrato.html">Dettagli Mx Casale Monferrato</a>'
    },
    {
        id:'mx-borgosantamaria',
        nome: 'Pista Motocross Borgo Santa Maria',
        tipo: 'motocross',
        difficolta: 'facile',
        lat: 41.47159,
        lng: 12.81278,
        info: '<a href="dettagli/mx-borgosantamaria.html">Dettagli Mx Borgo Santa Maria</a>',
    },
    {
        id:'mx-fianoromano',
        nome: 'Pista Motocross Fiano Romano',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 42.18629,
        lng: 12.59627,
        info: '<a href="dettagli/mx-fianoromano.html">Dettagli Mx Fiano Romano</a>',
    },
    {
        id:'mx-malagrotta',
        nome: 'Pista Motocross Malagrotta',
        tipo: 'motocross',
        difficolta: 'difficile',
        lat: 41.86075,
        lng: 12.31669,
        info: '<a href="dettagli/mx-malagrotta.html">Dettagli Mx Malagrotta</a>',
    },
    {
        id:'mx-marradi',
        nome:'Pista Motocross Marradi',
        tipo: 'motocross',
        difficolta: 'media',
        lat:44.10562,
        lng:11.68328,
        info: '<a href="dettagli/mx-marradi.html">Dettagli Mx Marradi</a>',
    },
    {
        id:'mx-pietraia',
        nome:'Pista Motocross Pietraia',
        tipo: 'motocross',
        difficolta: 'media',
        lat:43.20081,
        lng:11.95912,
        info: '<a href="dettagli/mx-pietraia.html">Dettagli Mx Pietraia</a>',
    },
    {
        id:'mx-prunetta',
        nome:'Pista Motocross La Pineta - Prunetta',
        tipo: 'motocross',
        difficolta: 'media',
        lat:44.00730,
        lng:10.79131,
        info: '<a href="dettagli/mx-prunetta.html">Dettagli Mx La Pineta - Prunetta</a>',
    },
    {
        id:'mx-mondavio',
        nome:'Pista Motocross Cavallara',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 43.71651,
        lng:12.94395,
        info: '<a href="dettagli/mx-mondavio.html">Dettagli Mx Mondavio - Cavallara</a>',
    },
    {
        id:'mx-cingoli',
        nome:'Pista Motocross Cingoli',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 43.36833,
        lng: 13.19500,
        info: '<a href="dettagli/mx-cingoli.html">Dettagli Mx Cingoli</a>',
    },
    {
        id:'mx-colbuccaro',
        nome:'Pista Motocross Colbuccaro',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 43.24455,
        lng: 13.42151,
        info: '<a href="dettagli/mx-colbuccaro.html">Dettagli Mx Colbuccaro</a>',
    },
    {
        id:'mx-fermignano',
        nome:'Pista Motocross Fermignano',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 43.66417,
        lng: 12.66194,
        info: '<a href="dettagli/mx-fermignano.html">Dettagli Mx Fermignano</a>',
    },
    {
        id:'mx-monterosato',
        nome:'Pista Motocross MonteRosato',
        tipo: 'motocross',
        difficolta: 'difficile',
        lat: 43.12828,
        lng: 13.69472,
        info: '<a href="dettagli/mx-monterosato.html">Dettagli Mx MonteRosato</a>',
    },
    {
        id:'mx-force',
        nome:'Pista Motocross Force',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 42.9661,
        lng: 13.48469,
        info: '<a href="dettagli/mx-force.html">Dettagli Mx Force</a>',
    },
    {
        id:'mx-fossadeldiavolo',
        nome:'Pista Motocross Fossa Del Diavolo - Senigallia',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 43.67104,
        lng: 13.21497,
        info: '<a href="dettagli/mx-fossadeldiavolo.html">Dettagli Mx Fossa Del Diavolo - Senigallia</a>',
    },
    {
        id:'mx-grottazzolina',
        nome:'Pista Motocross Grottazzolina',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 43.11283,
        lng: 13.62842,
        info: '<a href="dettagli/mx-grottazzolina.html">Dettagli Mx Grottazzolina</a>',
    },
    {
        id:'mx-colleteste',
        nome:'Pista Motocross Colleteste',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 41.76278,
        lng: 14.12833,
        info: '<a href="dettagli/mx-colleteste.html">Dettagli Mx Colleteste</a>',
    },
    {  
        id:'mx-donpaolo',
        nome:'Pista Motocross Don Paolo',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 40.28623,
        lng: 16.60085,
        info: '<a href="dettagli/mx-donpaolo.html">Dettagli Mx Don paolo</a>',
    },
    {  
        id:'mx-matera',
        nome:'Pista Motocross Matera',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 40.68623,
        lng: 16.619492,
        info: '<a href="dettagli/mx-matera.html">Dettagli Mx Matera</a>',
    },
    {  
        id:'mx-loscoiattolo',
        nome:'Pista Motocross Lo Scoiattolo',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 38.90854,
        lng: 16.30898,
        info: '<a href="dettagli/mx-loscoiattolo.html">Dettagli Mx Lo Scoiattolo</a>',
    },
    {  
        id:'mx-roggianogravina',
        nome:'Pista Motocross Roggiano Gravina',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 39.64712423524541, 
        lng: 16.179362723995418,
        info: '<a href="dettagli/mx-roggianogravina.html">Dettagli Mx Roggiano Gravina</a>',
    },
    {  
        id:'mx-adrenalinatrevalli',
        nome:'Pista Motocross Adrenalina tre Valli',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 41.04833,
        lng: 14.46972,
        info: '<a href="dettagli/mx-adrenalinatrevalli.html">Dettagli Mx Adrenalina Tre Valli</a>',
    },
    {  
        id:'mx-casteldisasso',
        nome:'Pista Motocross Castel Di Sasso',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 41.19740,
        lng: 14.28547,
        info: '<a href="dettagli/mx-casteldisasso.html">Dettagli Mx Castel Di Sasso</a>',
    },
    {  
        id:'mx-olevano',
        nome:'Pista Motocross Olevano - Arena Bianca',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 40.65183,
        lng: 15.03871,
        info: '<a href="dettagli/mx-olevano.html">Dettagli Mx Olevano - Arena Bianca</a>',
    },
    {  
        id:'en-maxlandendurotrack',
        nome:'Chignolo Po - Max Land - Enduro Track',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 45.16091, 
        lng: 9.47149,
        info: '<a href="dettagli/en-maxlandendurotrack.html">Dettagli Max Land - Enduro Track</a>',
    },
    {
         id:'mx-maggiorapark',
        nome:'Maggiora Park',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 45.69505143593991, 
        lng:  8.420338983832112,
        info: '<a href="dettagli/mx-maggiorapark.html">Dettagli Mx Maggiora Park</a>',
    },
    {
         id:'mx-baldasserona',
        nome:'Baldasserona - Pino Serra',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 43.94385792084684,
        lng:   12.434891016298918, 
        info: '<a href="dettagli/mx-baldasserona.html">Dettagli Mx Baldasserona - Pino Serra</a>',
    },
    {  
        id:'mx-campogalliano',
        nome:'Pista Motocross Campo Galliano',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 44.7000,
        lng: 10.85000,
        info: '<a href="dettagli/mx-campogalliano.html">Dettagli Mx Campo Galliano</a>',
    },
    {  
        id:'mx-carpi',
        nome:'Pista Motocross Carpi',
        tipo: 'motocross',
        difficolta: 'facile',
        lat: 44.8009,
        lng: 10.85395,
        info: '<a href="dettagli/mx-carpi.html">Dettagli Mx Carpi</a>',
    },
    {  
        id:'mx-calvanella',
        nome:'Pista Motocross Castel San Pietro - Calvanella',
        tipo: 'motocross',
        difficolta: 'facile',
        lat: 44.36556,
        lng: 11.53583,
        info: '<a href="dettagli/mx-calvanella.html">Dettagli Mx Castel San Pietro - Calvanella</a>',
    },
    {  
        id:'mx-castellarano',
        nome:'Pista Motocross Castellarano',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 44.53928,
        lng: 10.7163,
        info: '<a href="dettagli/mx-castellarano.html">Dettagli Mx Castellarano</a>',
    },
    {  
        id:'mx-castelvetro',
        nome:'Pista Motocross Castelvetro - La Barbaiola',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 44.46321,
        lng: 10.90896,
        info: '<a href="dettagli/mx-castelvetro.html">Dettagli Mx Castelvetro - La Barbaiola</a>',
    },
    {  
        id:'mx-denore',
        nome:'Pista Motocross Denore',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 44.80956,
        lng: 11.82588,
        info: '<a href="dettagli/mx-denore.html">Dettagli Mx Denore</a>',
    },
    {  
        id:'mx-montecoralli',
        nome:'Pista Motocross Faenza - Monte Coralli',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 44.29444,
        lng: 11.79972,
        info: '<a href="dettagli/mx-montecoralli.html">Dettagli Mx Faenza - Monte Coralli</a>',
    },
    {  
        id:'mx-ferrara',
        nome:'Pista Motocross Ferrara',
        tipo: 'motocross',
        difficolta: 'facile',
        lat: 44.853161,
        lng: 11.579013,
        info: '<a href="dettagli/mx-ferrara.html">Dettagli Mx Ferrara</a>',
    },
    {  
        id:'mx-piacenza',
        nome:'Pista Motocross Motopark Piacenza',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 45.04718,
        lng:  9.74395,
        info: '<a href="dettagli/mx-piacenza.html">Dettagli Mx Motopark Piacenza</a>',
    },
    {  
        id:'mx-salsomaggiore',
        nome:'Pista Motocross Predella - Salsomaggiore',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 44.77782,
        lng: 9.97700,
        info: '<a href="dettagli/mx-salsomaggiore.html">Dettagli Mx Predella - Salsomaggiore</a>',
    },
    {  
        id:'mx-ravenna',
        nome:'Pista Motocross Ravenna - Tre Ponti',
        tipo: 'motocross',
        difficolta: 'facile',
        lat: 44.44950,
        lng: 12.19863,
        info: '<a href="dettagli/mx-ravenna.html">Dettagli Mx Ravenna - Tre Ponti</a>',
    },
    {  
        id:'mx-savignano',
        nome:'Pista Motocross Savignano Sul Panaro',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 44.4704,
        lng: 11.04326,
        info: '<a href="dettagli/mx-savignano.html">Dettagli Mx Savignano Sul Panaro</a>',
    },
    {  
        id:'mx-secchiano',
        nome:'Pista Motocross Secchiano',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 43.946433,
        lng: 12.318374,
        info: '<a href="dettagli/mx-secchiano.html">Dettagli Mx Secchiano</a>',
    },
    {  
        id:'mx-trecasali',
        nome:'Pista Motocross TreCasali - Parma',
        tipo: 'motocross',
        difficolta: 'facile',
        lat: 44.924293,
        lng: 10.292748,
        info: '<a href="dettagli/mx-trecasali.html">Dettagli Mx TreCasali - Parma</a>',
    },
    {  
        id:'mx-arenzano',
        nome:'Pista Motocross Arenzano',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 44.41390,
        lng: 8.70098,
        info: '<a href="dettagli/mx-arenzano.html">Dettagli Mx Arenzano</a>',
    },
    {  
        id:'mx-sassello',
        nome:'Pista Motocross Sassello',
        tipo: 'motocross',
        difficolta: 'difficile',
        lat: 44.48686,
        lng: 8.51988,
        info: '<a href="dettagli/mx-sassello.html">Dettagli Mx Sassello</a>',
    },
    {  
        id:'mx-varazze',
        nome:'Pista Motocross Varazze',
        tipo: 'motocross',
        difficolta: 'difficile',
        lat: 44.36944,
        lng: 8.53056,
        info: '<a href="dettagli/mx-varazze.html">Dettagli Mx Varazze</a>',
    },
    {  
        id:'mx-caneva',
        nome:'Pista Motocross Caneva Doro Augusto',
        tipo: 'motocross',
        difficolta: 'facile',
        lat: 45.973896,
        lng: 12.483299,
        info: '<a href="dettagli/mx-caneva.html">Dettagli Mx Caneva - Doro Augusto</a>',
    },
    {  
        id:'mx-cordenons',
        nome:'Pista Motocross Cordenons - Viol Degan',
        tipo: 'motocross',
        difficolta: 'facile',
        lat: 46.004206,
        lng: 12.749934,
        info: '<a href="dettagli/mx-cordenons.html">Dettagli Mx Cordenons - Viol Degan</a>',
    },
    {  
        id:'mx-lasvegas',
        nome:'Pista Motocross Las Vegas - Aquileia',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 45.751463,
        lng: 13.375135,
        info: '<a href="dettagli/mx-lasvegas.html">Dettagli Mx Las Vegas - Aquileia</a>',
    },
    {  
        id:'mx-rivolto',
        nome:'Pista Motocross Rivolto',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 45.959526,
        lng: 13.038206,
        info: '<a href="dettagli/mx-rivolto.html">Dettagli Mx Rivolto</a>',
    },
    {  
        id:'mx-wafna',
        nome:'Pista Motocross Wafna Motopark',
        tipo: 'motocross',
        difficolta: 'facile',
        lat: 45.84253,
        lng: 13.47753,
        info: '<a href="dettagli/mx-wafna.html">Dettagli Mx Wafna Motopark</a>',
    },
    {  
        id:'mx-bosisio',
        nome:'Pista Motocross Bosisio',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 45.79139,
        lng: 9.29417,
        info: '<a href="dettagli/mx-bosisio.html">Dettagli Mx Bosisio</a>',
    },
    {  
        id:'mx-cadrezzate',
        nome:'Pista Motocross Cadrezzate',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 45.81278,
        lng: 8.64333,
        info: '<a href="dettagli/mx-cadrezzate.html">Dettagli Mx Cadrezzate</a>',
    },
    {  
        id:'mx-canneto',
        nome:'Pista Motocross Canneto',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 45.1783,
        lng: 10.40254,
        info: '<a href="dettagli/mx-canneto.html">Dettagli Mx Canneto</a>',
    },
    {  
        id:'mx-stiviere',
        nome:'Pista Motocross Castiglione Delle Stiviere',
        tipo: 'motocross',
        difficolta: 'difficile',
        lat: 45.3974,
        lng: 10.52331,
        info: '<a href="dettagli/mx-stiviere.html">Dettagli Mx Castiglione delle Stiviere</a>',
    },
    {  
        id:'mx-ceriano',
        nome:'Pista Motocross Ceriano Laghetto',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 45.63306,
        lng: 9.10139,
        info: '<a href="dettagli/mx-ceriano.html">Dettagli Mx Ceriano Laghetto</a>',
    },
    {  
        id:'mx-covo',
        nome:'Pista Motocross MXE.45 - Covo',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 45.5038912,
        lng: 9.7888515,
        info: '<a href="dettagli/mx-ceriano.html">Dettagli Mx MXE.45 - Covo</a>',
    },
    {  
        id:'mx-cremona',
        nome:'Pista Motocross Cremona',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 45.13754,
        lng: 9.98126,
        info: '<a href="dettagli/mx-cremona.html">Dettagli Mx Cremona</a>',
    },
    {  
        id:'mx-chieve',
        nome:'Pista Motocross Chieve',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 45.31131,
        lng: 9.63928,
        info: '<a href="dettagli/mx-chieve.html">Dettagli Mx Chieve</a>',
    },
    {  
        id:'mx-crotta',
        nome:'Pista Motocross Crotta',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 45.17111,
        lng: 9.86111,
        info: '<a href="dettagli/mx-crotta.html">Dettagli Mx Crotta</a>',
    },
    {  
        id:'mx-dorno',
        nome:'Pista Motocross Dorno',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 45.16139,
        lng: 8.96972,
        info: '<a href="dettagli/mx-dorno.html">Dettagli Mx Dorno</a>',
    },
    {  
        id:'mx-gambara',
        nome:'Pista Motocross Gambara',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 45.2475,
        lng: 10.3616,
        info: '<a href="dettagli/mx-gambara.html">Dettagli Mx Gambara</a>',
    },
    {  
        id:'mx-lodi',
        nome:'Pista Motocross Lodi',
        tipo: 'motocross',
        difficolta: 'facile',
        lat: 45.31167,
        lng: 9.46,
        info: '<a href="dettagli/mx-lodi.html">Dettagli Mx Lodi</a>',
    },
    {  
        id:'mx-mantova',
        nome:'Pista Motocross Mantova',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 45.13758,
        lng: 10.80200,
        info: '<a href="dettagli/mx-mantova.html">Dettagli Mx Mantova</a>',
    },
    {  
        id:'mx-ottobiano',
        nome:'Pista Motocross Ottobiano',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 45.16458,
        lng: 8.81583,
        info: '<a href="dettagli/mx-ottobiano.html">Dettagli Mx Ottobiano</a>',
    },
    {  
        id:'mx-rezzato',
        nome:'Pista Motocross Rezzato',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 45.49476,
        lng: 10.30686,
        info: '<a href="dettagli/mx-rezzato.html">Dettagli Mx Rezzato</a>',
    },
    {  
        id:'mx-schianno',
        nome:'Pista Motocross Schianno',
        tipo: 'motocross',
        difficolta: 'facile',
        lat: 45.77667,
        lng: 8.84917,
        info: '<a href="dettagli/mx-schianno.html">Dettagli Mx Schianno</a>',
    },
    {  
        id:'mx-serle',
        nome:'Pista Motocross Serle',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 45.5675,
        lng: 10.34861,
        info: '<a href="dettagli/mx-serle.html">Dettagli Mx Serle</a>',
    },
    {  
        id:'mx-satriano',
        nome:'Pista Motocross Satriano',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 41.193225,
        lng: 15.529003,
        info: '<a href="dettagli/mx-satriano.html">Dettagli Mx Satriano</a>',
    },
    {  
        id:'mx-crispiano',
        nome:'Pista Motocross Crispiano - La Francesca',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 40.60196,
        lng: 17.29591,
        info: '<a href="dettagli/mx-crispiano.html">Dettagli Mx Crispiano - La Francesca</a>',
    },
    {  
        id:'mx-galatina',
        nome:'Pista Motocross Galatina',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 40.60196,
        lng: 17.29591,
        info: '<a href="dettagli/mx-galatina.html">Dettagli Mx Galatina</a>',
    },
    {  
        id:'mx-baccalamanza',
        nome:'Pista Motocross Baccalamanza',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 39.12583,
        lng: 8.98722,
        info: '<a href="dettagli/mx-baccalamanza.html">Dettagli Mx Baccalamanza</a>',
    },
    {  
        id:'mx-cirras',
        nome:'Pista Motocross Cirras',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 39.83167,
        lng: 8.61056,
        info: '<a href="dettagli/mx-cirras.html">Dettagli Mx Cirras</a>',
    },
    {  
        id:'mx-gonnesa',
        nome:'Pista Motocross Gonnesa',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 39.26563,
        lng: 8.47872,
        info: '<a href="dettagli/mx-gonnesa.html">Dettagli Mx Gonnesa</a>',
    },
    {  
        id:'mx-riola',
        nome:'Pista Motocross Riola Sardo',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 40.02475,
        lng: 8.50709,
        info: '<a href="dettagli/mx-riola.html">Dettagli Mx Riola Sardo</a>',
    },
    {  
        id:'mx-siracusa',
        nome:'Pista Motocross Siracusa - Mx Valley 973',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 37.045676004690336, 
        lng: 15.193838165016317,
        info: '<a href="dettagli/mx-siracusa.html">Dettagli Mx Siracusa - Mx Valley 973</a>',
    },
    {  
        id:'mx-partinico',
        nome:'Pista Motocross Partinico',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 38.002038, 
        lng: 13.097028,
        info: '<a href="dettagli/mx-partinico.html">Dettagli Mx Partinico</a>',
    },
    {  
        id:'mx-barbania',
        nome:'Pista Motocross Barbania',
        tipo: 'motocross',
        difficolta: 'facile',
        lat: 45.2993, 
        lng: 7.63777,
        info: '<a href="dettagli/mx-barbania.html">Dettagli Mx Barbania</a>',
    },
    {  
        id:'mx-bellinzago',
        nome:'Pista Motocross Bellinzago',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 45.57389, 
        lng: 8.67556,
        info: '<a href="dettagli/mx-bellinzago.html">Dettagli Mx Bellinzago</a>',
    },
    {  
        id:'mx-vallescrivia',
        nome:'Pista Motocross Valle Scrivia - Cassano Spinola',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 44.76499, 
        lng: 8.85103,
        info: '<a href="dettagli/mx-vallescrivia.html">Dettagli Mx Valle Scrivia - Cassano Spinola</a>',
    },
    {  
        id:'mx-orbassano',
        nome:'Pista Motocross Orbassano',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 45.006551, 
        lng: 7.573725,
        info: '<a href="dettagli/mx-orbassano.html">Dettagli Mx Orbassano</a>',
    },
    {  
        id:'mx-pinerolo',
        nome:'Pista Motocross Pinerolo',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 44.94316, 
        lng: 7.36687,
        info: '<a href="dettagli/mx-pinerolo.html">Dettagli Mx Pinerolo</a>',
    },
    {  
        id:'mx-vercelli',
        nome:'Pista Motocross Vercelli',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 45.31778, 
        lng: 8.44361,
        info: '<a href="dettagli/mx-vercelli.html">Dettagli Mx Vercelli</a>',
    },
    {  
        id:'mx-bovolone',
        nome:'Pista Motocross Bovolone',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 45.2424, 
        lng: 11.1333,
        info: '<a href="dettagli/mx-bovolone.html">Dettagli Mx Bovolone</a>',
    },
    {  
        id:'mx-faravicentino',
        nome:'Pista Motocross Fara Vicentino',
        tipo: 'motocross',
        difficolta: 'facile',
        lat: 45.74255, 
        lng: 11.54429,
        info: '<a href="dettagli/mx-faravicentino.html">Dettagli Mx Fara Vicentino</a>',
    },
    {  
        id:'mx-girasoli',
        nome:'Pista Motocross Ai Girasoli',
        tipo: 'motocross',
        difficolta: 'facile',
        lat: 45.49502, 
        lng: 11.38411,
        info: '<a href="dettagli/mx-girasoli.html">Dettagli Mx Ai Girasoli</a>',
    },
    {  
        id:'mx-lovolo',
        nome:'Pista Motocross Lovolo - Albettone',
        tipo: 'motocross',
        difficolta: 'difficile',
        lat: 45.37453, 
        lng: 11.58264,
        info: '<a href="dettagli/mx-lovolo.html">Dettagli Mx Lovolo - Albettone</a>',
    },
    {  
        id:'mx-montagnana',
        nome:'Pista Motocross Montagnana',
        tipo: 'motocross',
        difficolta: 'facile',
        lat: 45.2408, 
        lng: 11.43404,
        info: '<a href="dettagli/mx-montagnana.html">Dettagli Mx Montagnana</a>',
    },
    {  
        id:'mx-starcross',
        nome:'Pista Motocross Starcross Verrès',
        tipo: 'motocross',
        difficolta: 'media',
        lat: 45.666360126079134,  
        lng: 7.6843772666371875,
        info: '<a href="dettagli/mx-starcross.html">Dettagli Mx Starcross Verrès</a>',
    },

    {  //VELOCITA'
        id:'v-mugello',
        nome:'Mugello Circuit',
        tipo: 'velocita',
        difficolta: 'media',
        lat: 43.99790346114153,  
        lng: 11.371690221523894,
        info: '<a href="dettagli/v-mugello.html">Dettagli Mugello Circuit</a>',
    },
    {  //AUTODROMO
        id:'v-mugello',
        nome:'Mugello Circuit',
        tipo: 'autodromo',
        difficolta: 'media',
        lat: 43.99790346114153,  
        lng: 11.371690221523894,
        info: '<a href="dettagli/v-mugello.html">Dettagli Mugello Circuit</a>',
    },

    {  //VELOCITA'
        id:'a-monza',
        nome:'Autodromo Nazionale Di Monza',
        tipo: 'velocita',
        difficolta: 'media',
        lat: 45.61755017276477,   
        lng: 9.281528470336333,
        info: '<a href="dettagli/a-monza.html">Dettagli Autodromo Nazionale Di Monza</a>',
    },
    {  //AUTODROMO
        id:'a-monza',
        nome:'Autodromo Nazionale Di Monza',
        tipo: 'autodromo',
        difficolta: 'media',
        lat: 45.61755017276477,   
        lng: 9.281528470336333,
        info: '<a href="dettagli/a-monza.html">Dettagli Autodromo Nazionale Di Monza</a>',
    },

    {  //VELOCITA'
        id:'v-misano',
        nome:'Misano World Circuit Marco Simoncelli',
        tipo: 'velocita',
        difficolta: 'media',
        lat: 43.96139410054457,   
        lng: 12.685847708897352,
        info: '<a href="dettagli/v-misano.html">Dettagli Misano World Circuit Marco Simoncelli</a>',
    },
    {  //AUTODROMO'
        id:'v-misano',
        nome:'Misano World Circuit Marco Simoncelli',
        tipo: 'autodromo',
        difficolta: 'media',
        lat: 43.96139410054457,   
        lng: 12.685847708897352,
        info: '<a href="dettagli/v-misano.html">Dettagli Misano World Circuit Marco Simoncelli</a>',
    },

    {  //VELOCITA'
        id:'v-imola',
        nome:'Autodromo Di Imola',
        tipo: 'velocita',
        difficolta: 'media',
        lat: 44.34467789820725,    
        lng: 11.718218504672635,
        info: '<a href="dettagli/v-imola.html">Dettagli Autodromo Di Imola</a>',
    },
    {  //AUTODROMO'
        id:'v-imola',
        nome:'Autodromo Di Imola',
        tipo: 'autodromo',
        difficolta: 'media',
        lat: 44.34467789820725,    
        lng: 11.718218504672635,
        info: '<a href="dettagli/v-imola.html">Dettagli Autodromo Di Imola</a>',
    },

    {  //VELOCITA'
        id:'v-vallelunga',
        nome:'Autodromo Di Vallelunga',
        tipo: 'velocita',
        difficolta: 'media',
        lat: 42.15681660423707,     
        lng: 12.36942683285992,
        info: '<a href="dettagli/v-vallelunga.html">Dettagli Autodromo Di Vallelunga</a>',
    },
    {  //AUTODROMO'
        id:'v-vallelunga',
        nome:'Autodromo Di Vallelunga',
        tipo: 'autodromo',
        difficolta: 'media',
        lat: 42.15681660423707,     
        lng: 12.36942683285992,
        info: '<a href="dettagli/v-vallelunga.html">Dettagli Autodromo Di Vallelunga</a>',
    },

    {  //VELOCITA'
        id:'v-cremona',
        nome:'Autodromo Di Cremona',
        tipo: 'velocita',
        difficolta: 'media',
        lat: 45.085934296637,       
        lng: 10.312618820584186,
        info: '<a href="dettagli/v-cremona.html">Dettagli Autodromo Di Cremona</a>',
    },
    {  //AUTODROMO'
        id:'v-cremona',
        nome:'Autodromo Di Cremona',
        tipo: 'autodromo',
        difficolta: 'media',
        lat: 45.085934296637,       
        lng: 10.312618820584186,
        info: '<a href="dettagli/v-cremona.html">Dettagli Autodromo Di Cremona</a>',
    },
];

function initMap() {
    if (map) {
        map.remove();
    }

    map = L.map('map').setView([43, 12], 7);

    // Prendi i tipi selezionati
    const selectedTypes = [...document.querySelectorAll('.filtro-tipo:checked')].map(cb => cb.value.toLowerCase());
    // Prendi le difficoltà selezionate
    const selectedDifficulties = [...document.querySelectorAll('#filtro-container input[type="checkbox"]:checked')]
        .filter(cb => !cb.classList.contains('filtro-tipo')) // escludo i tipo
        .map(cb => cb.value.toLowerCase());

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    
    window.allMarkers = []; // Reset markers visibili

circuiti.forEach(circuito => {
  if (
    selectedTypes.includes(circuito.tipo.toLowerCase()) &&
    selectedDifficulties.includes(circuito.difficolta.toLowerCase())
  ) {
    let icon;
if (circuito.difficolta.toLowerCase() === "difficile") icon = redIcon;
if (circuito.difficolta.toLowerCase() === "media") icon = yellowIcon;
if (circuito.difficolta.toLowerCase() === "facile") icon = greenIcon;

const marker = L.marker([circuito.lat, circuito.lng], {
  icon: icon,
  title: circuito.nome
}).addTo(map);

const popupContent = `
  <div style="min-width: 240px; font-size: 14px;">
    <strong>${circuito.nome}</strong><br>
    ${circuito.info}<br><br>
    <button onclick="togglePreferito('${circuito.nome}')" 
            style="background: none; border: none; cursor: pointer; display: flex; align-items: center; gap: 8px;">
      <span id="cuore-${circuito.nome}" style="color: ${isPreferito(circuito.nome) ? 'red' : 'black'}; font-size: 18px;">
        &#10084;
      </span>
      <span style="font-size: 18px; color: black;">&#8592;</span>
      <span style="color: black;">Aggiungi ai preferiti</span>
    </button>
  </div>
`;



marker.bindPopup(popupContent);
window.allMarkers.push(marker);
  }
});

}



function getCheckedValues() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const selected = [];

  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      selected.push(checkbox.value);
    }
  });

  // Mostra i risultati
  const output = document.getElementById('output');
  output.innerHTML = ""; // Pulisce la lista precedente

  selected.forEach(val => {
    const li = document.createElement('li');
    li.textContent = val;
    output.appendChild(li);
  });

  // Se vuoi vedere anche la lista in console:
  console.log("Checkbox selezionati:", selected);
}

// Chiama la funzione initMap quando lo script viene eseguito
initMap();



function cercaCircuito() {
  const input = document.getElementById('search-input');
  const filter = input.value.toLowerCase();
  const list = document.getElementById('autocomplete-list');
  list.innerHTML = "";

  if (!filter || filter.length < 2) return;

  const matches = circuiti.filter(c => c.nome.toLowerCase().includes(filter));

  matches.forEach(c => {
    const item = document.createElement("div");
    item.textContent = c.nome;
    item.style.padding = "5px";
    item.style.cursor = "pointer";
    item.style.color = "black"; // <-- Colore del testo nero


    item.addEventListener("click", () => {
      input.value = c.nome;
      list.innerHTML = "";
      centraSuCircuito(c.nome);
    });

    list.appendChild(item);
  });
}




function centraSuCircuito(nomeCircuito) {
  const markers = window.allMarkers || [];
  for (let marker of markers) {
    if (marker.options.title === nomeCircuito) {
      map.setView(marker.getLatLng(), 14, { animate: true, duration: 1.5 });
      if (marker.getPopup()) marker.openPopup();
      break;
    }
  }
}

document.addEventListener("click", function(e) {
  if (!document.getElementById('search-input').contains(e.target)) {
    document.getElementById("autocomplete-list").innerHTML = "";
  }
});

function togglePreferito(nome) {
  const pref = JSON.parse(localStorage.getItem("preferiti")) || [];

  const index = pref.indexOf(nome);
  const cuore = document.getElementById(`cuore-${nome}`);

  if (index > -1) {
    // Rimuovi
    pref.splice(index, 1);
    if (cuore) cuore.style.color = "black";
  } else {
    // Aggiungi
    pref.push(nome);
    if (cuore) cuore.style.color = "red";
  }

  localStorage.setItem("preferiti", JSON.stringify(pref));
}

function isPreferito(nome) {
  const pref = JSON.parse(localStorage.getItem("preferiti")) || [];
  return pref.includes(nome);
}
