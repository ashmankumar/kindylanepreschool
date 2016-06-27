//contains javasript code for loading map
var map;
function initMap() {
var center = {lat: -34.283035, lng: 146.04701};
  map = new google.maps.Map(document.getElementById('map'), {
    center: center,
    zoom: 14
  });
    
  var marker = new google.maps.Marker({
    position: center,
    map: map,
    title: 'Kindy Lane'
  });
}

