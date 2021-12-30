const MARKER_FILE = '../img/map-pin.png';
const X = 59.93877150029671;
const Y = 30.323016543933267;

var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var mapBlock = document.querySelector('.map');
var map;

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

function initMap() {
  map = new google.maps.Map(mapBlock, {
    center: new google.maps.LatLng(X, Y),
    zoom: 14,
  });

  var marker = new google.maps.Marker({
    position: map.center,
    map: map,
    icon: MARKER_FILE
  });
}
