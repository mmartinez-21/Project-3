function initMap(){
  var object1 = document.getElementById('myMap');
  var startingLoc = new google.maps.LatLng(41.8433677,-87.6948927);
  var mapOptions = {
    center: startingLoc,
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_CENTER
    }
  };
  
  var actualMap = new google.maps.Map(object1, mapOptions);

  //marker locations//
  var runLoc = {lat: 42.0240192, lng: -87.7030869};
  var laneLoc = {lat: 41.9445343, lng:-87.6915331};
  var redlineLoc = {lat: 42.018304, lng:-87.6726844}; 
  var iitLoc = {lat: 41.834681, lng: -87.6262585};
  var movieLoc = {lat: 42.0490201, lng: -87.6851185};
  var pizzaLoc = {lat: 42.0403797, lng: -87.7176689};
  var elemPparkLoc = {lat: 42.0144689, lng: -87.6954727};
  var gymLoc = {lat: 42.0124958, lng: -87.6914459};
  var targetLoc = {lat: 42.020761, lng: -87.7056351};
  var mallLoc = {lat: 42.0093022, lng: -87.714313};
  
  //icons//
  var icons = {
    fitness: {
      icon: 'images/GYMiconresized.png'
    },
    school: {
      icon: 'images/SCHOOLiconresized.png'
    },
    food: {
      icon: 'images/FOODiconresized.png'
    }, 
    film: {
      icon: 'images/FILMiconresized.jpg'
    }
  };
  
  //where the icons are being featured//
  var features = [
    {position: new google.maps.LatLng(42.0240192, -87.7030869), type: 'fitness'},
    {position: new google.maps.LatLng(41.9445343, -87.6915331), type: 'school'},
    {position: new google.maps.LatLng(42.018304, -87.6726844), type: 'school'},
    {position: new google.maps.LatLng(41.834681, -87.6262585), type: 'school'},
    {position: new google.maps.LatLng(42.0490201, -87.6851185), type: 'film'},
    {position: new google.maps.LatLng(42.0403797, -87.7176689), type: 'food'},
    {position: new google.maps.LatLng(42.0144689, -87.6954727), type: 'school'},
    {position: new google.maps.LatLng(42.0124958, -87.6914459), type: 'fitness'},
    {position: new google.maps.LatLng(42.020761, -87.7056351), type: 'food'},
    {position: new google.maps.LatLng(42.0093022, -87.714313), type: 'food'}
    ];
  
  
  //Actually putting the marker on to the map// 
  var runMark = new google.maps.Marker({position: features[0].position, 
  icon: icons[features[0].type].icon, map: actualMap});
  var laneMark = new google.maps.Marker({position: features[1].position, 
  icon: icons[features[1].type].icon, map: actualMap});
  var redlineMark = new google.maps.Marker({position: features[2].position, 
  icon: icons[features[2].type].icon, map: actualMap});
  var iitMark = new google.maps.Marker({position: features[3].position, 
  icon: icons[features[3].type].icon, map: actualMap});
  var movieMark = new google.maps.Marker({position: features[4].position, 
  icon: icons[features[4].type].icon, map: actualMap});
  var pizzaMark = new google.maps.Marker({position: features[5].position, 
  icon: icons[features[5].type].icon, map: actualMap});
  var elemPparkMark = new google.maps.Marker({position: features[6].position, 
  icon: icons[features[6].type].icon, map: actualMap});
  var gymMark = new google.maps.Marker({position: features[7].position, 
  icon: icons[features[7].type].icon, map: actualMap});
  var targetMark = new google.maps.Marker({position: features[8].position, 
  icon: icons[features[8].type].icon, map: actualMap});
  var mallMark = new google.maps.Marker({position: features[9].position, 
  icon: icons[features[9].type].icon, map: actualMap});
  
  
  //Content that will be inside the pop up windows for each marker//
  var contentString1 = '<h1>James Park</h1>' +
    '<p>This is where me and my friends would run a lot during the summer. When I was ' +
    'little, I would come to this park to sled down the hill we call Mt. Trashmore(It is' +
    ' built on trash) and now sometimes I run up it.</p>';
    
  var contentString2 = '<h1>Lane Tech</h1>' +
    '<p>This is the high school I went to.  I met a lot of friends here and I grew ' + 
    'a lot as a person.  I still miss all the food options around Lane Tech :(</p>';
    
  var contentString3 = '<h1>Red Line Train Station</h1>' +
    '<p>This is the location that I get on the redline to come to IIT.  Other than the ' +
    'smells and shady looking people, it really is not too bad.  If it did not exist, ' +
    'I would not have a way to get to IIT everyday.</p>';
    
  var contentString4 = '<h1>Illinois Institute of Technology</h1>' +
    '<p>Everyone reading this probably goes to IIT.  We are all one big fam. Tech yeah. ' +
    '</p>';
    
  var contentString5 = '<h1>Century 12 Evanston Theater/Evanston</h1>' +
    '<p>This is the theater I go to the most because it is only one bus ride away from my ' +
    'house and the theater is pretty nice.  I have so many great movie-going experiences '+
    'here, and I look forward to going when the pandemic ends.  Downtown Evanston is just great ' +
    'too, I love hanging around in the summer or the winter.  The beach does not get crowded, ' +
    'and it is just a nice place to walk around. </p>';
    
  var contentString6 = '<h1>Little Caesars Pizza</h1>' + 
    '<p>Say what you want about their other toppings, but Little Caesars pepperoni pizza ' +
    'is the best, that is fact.</p>';

  var contentString7 = '<h1>Philip Rogers School/Rogers Park</h1>' +
    '<p>This is the school I went to from pre-k through 8th grade. I will never forget ' +
    'my roots, but a lot of the cool teachers left, so yeah.  It is not the same as when ' +
    'I left, and that is fine. I had many good memories there. I used to play bball in ' +
    'the park, but it has been a while. I mostly pass through the park on the way home ' +
    'from the gym.</p>';
    
  var contentString8 = '<h1>The Gym</h1>' +
    '<p>This is the YMCA, the gym membership is not too bad and a lot of the time, it is empty. ' +
    'I like coming here to workout because it is not too far from me or my friends, and we ' +
    'go to nearby food places to eat. Sadly the restaurant across the intersection closed, ' +
    'and now we cannot have free pie on Wednesday after the gym :(</p>';
  
  var contentString9 = '<h1>Target</h1>' +
    '<p>This is the Target I go to a lot.  Whenever I forget my keys and I am locked out of ' +
    'the house, Target is my go to place. I am thinking about applying there but my friends ' +
    'tell me not to. Maybe Marianos? </p>';
    
  var contentString10 = '<h1>The Mall</h1>'+ 
    '<p>I used to go to this mall a lot when I was younger.  It is kind of dead now, but I ' +
    'still go with my friends sometimes. The GameStop has some good deals on their used ' +
    'games. The foodcourt is not bad either, but not much is there to draw in a good ' +
    'amount of people.</p>';
    
  //the actual pop up windows//
  var infowindow1 = new google.maps.InfoWindow({content: contentString1});
  var infowindow2 = new google.maps.InfoWindow({content: contentString2});
  var infowindow3 = new google.maps.InfoWindow({content: contentString3});
  var infowindow4 = new google.maps.InfoWindow({content: contentString4});
  var infowindow5 = new google.maps.InfoWindow({content: contentString5});
  var infowindow6 = new google.maps.InfoWindow({content: contentString6});
  var infowindow7 = new google.maps.InfoWindow({content: contentString7});
  var infowindow8 = new google.maps.InfoWindow({content: contentString8});
  var infowindow9 = new google.maps.InfoWindow({content: contentString9});
  var infowindow10 = new google.maps.InfoWindow({content: contentString10});
  
  //Listeners so when marker is clicked, the pop up windows pop up//
  runMark.addListener('click', function(){
    infowindow1.open(actualMap, runMark);
  })
  laneMark.addListener('click', function(){
    infowindow2.open(actualMap, laneMark);
  })
  redlineMark.addListener('click', function(){
    infowindow3.open(actualMap, redlineMark);
  })
  iitMark.addListener('click', function(){
    infowindow4.open(actualMap, iitMark);
  })
  movieMark.addListener('click', function(){
    infowindow5.open(actualMap, movieMark);
  })
  pizzaMark.addListener('click', function(){
    infowindow6.open(actualMap, pizzaMark);
  })
  elemPparkMark.addListener('click', function(){
    infowindow7.open(actualMap, elemPparkMark);
  })
  gymMark.addListener('click', function(){
    infowindow8.open(actualMap, gymMark);
  })
  targetMark.addListener('click', function(){
    infowindow9.open(actualMap, targetMark);
  })
  mallMark.addListener('click', function(){
    infowindow10.open(actualMap, mallMark);
  })
}
  
google.maps.event.addDomListener(window, 'load', initMap);
