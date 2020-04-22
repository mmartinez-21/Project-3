function init(){
  var object1 = document.getElementById('myMap');
  var startingLoc = new google.maps.LatLng(41.8433677,-87.6948927);
  var mapOptions = {
    center: startingLoc,
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_CENTER
    }
  };
}
google.maps.event.addDomListener(window, 'load', init);
