// leflet map script
// On initialise la latitude et la longitude (centre de la carte)
var lat = 36.77803;
var lon = 2.98141;
var macarte = null;
// Fonction d'initialisation de la carte
function initMap() {
  // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
  macarte = L.map("mapid").setView([lat, lon], 14);
  var greenIcon = L.icon({
    iconUrl: "images/ic_pediatre.png",
    shadowUrl: "images/icon-pediatre_ombre.png",

    iconSize: [40, 80], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [20, 80], // the same for the shadow
    popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
  });
  var marker = L.marker([lat, lon], { icon: greenIcon }).addTo(macarte);
  marker.bindPopup(
    `<div style='color: red; text-align: center;'><h6>LA SARPHYRES</h6><button class="mybtn btn btn-primary" type="button"><a href="https://www.google.com/maps/dir//H%C3%B4pital+bni+messous,+Rue+Ibrahim+Hadjeras+16206%D8%8C+Beni+Messous" target="_blank" style="color: white">Itinéraire</a></button></div>`
  );
  // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
  L.tileLayer("https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png", {
    // Il est toujours bien de laisser le lien vers la source des données
    // attribution:
    // 	'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
    minZoom: 1,
    maxZoom: 20,
  }).addTo(macarte);
}
window.onload = function () {
  // Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
  initMap();
};

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
