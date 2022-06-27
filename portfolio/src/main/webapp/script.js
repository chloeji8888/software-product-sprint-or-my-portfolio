// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const facts =
      ['I love basketball and swim', 'I like to cook pork', 'I am from China', 'I know python, java and c++, but I am also learning them'];
  // Pick a random greeting.
  const greeting = facts[Math.floor(Math.random() * facts.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

async function fetches(){
  const responseFromServer = await fetch("/hello");
  const textFromResponse = await responseFromServer.text();
  const responseContainer = document.getElementById('response-container');
  responseContainer.innerText = textFromResponse;
  
}

document.addEventListener('DOMContentLoaded', (e) => { 
    fetches();
 });

 google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

/** Creates a chart and adds it to the page. */
function drawChart() {
  const data = new google.visualization.DataTable();
  data.addColumn('string', 'personality');
  data.addColumn('number', 'Count');
        data.addRows([
          ['Independent', 10],
          ['Passionate', 5],
          ['Loving', 15]
        ]);

  const options = {
    'title': 'Personality',
    'width':500,
    'height':400
  };

  const chart = new google.visualization.PieChart(
      document.getElementById('chart-container'));
  chart.draw(data, options);
}


function createMap(){
    // Create a new StyledMapType object, passing it an array of styles,
    // and the name to be displayed on the map type control.
    const styledMapType = new google.maps.StyledMapType(
      [
        { elementType: "geometry", stylers: [{ color: "#ebe3cd" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#523735" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#f5f1e6" }] },
        {
          featureType: "administrative",
          elementType: "geometry.stroke",
          stylers: [{ color: "#c9b2a6" }],
        },
        {
          featureType: "administrative.land_parcel",
          elementType: "geometry.stroke",
          stylers: [{ color: "#dcd2be" }],
        },
        {
          featureType: "administrative.land_parcel",
          elementType: "labels.text.fill",
          stylers: [{ color: "#ae9e90" }],
        },
        {
          featureType: "landscape.natural",
          elementType: "geometry",
          stylers: [{ color: "#dfd2ae" }],
        },
        {
            featureType: "poi",
            elementType: "geometry",
            stylers: [{ color: "#dfd2ae" }],
          },
          {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{ color: "#93817c" }],
          },
          {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [{ color: "#a5b076" }],
          },
          {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [{ color: "#447530" }],
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#f5f1e6" }],
          },
          {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [{ color: "#fdfcf8" }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{ color: "#f8c967" }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{ color: "#e9bc62" }],
          },
          {
            featureType: "road.highway.controlled_access",
            elementType: "geometry",
            stylers: [{ color: "#e98d58" }],
          },
          {
            featureType: "road.highway.controlled_access",
            elementType: "geometry.stroke",
            stylers: [{ color: "#db8555" }],
          },
          {
            featureType: "road.local",
            elementType: "labels.text.fill",
            stylers: [{ color: "#806b63" }],
          },
          {
            featureType: "transit.line",
            elementType: "geometry",
            stylers: [{ color: "#dfd2ae" }],
          },
          {
            featureType: "transit.line",
            elementType: "labels.text.fill",
            stylers: [{ color: "#8f7d77" }],
          },
          {
            featureType: "transit.line",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#ebe3cd" }],
          },
          {
            featureType: "transit.station",
            elementType: "geometry",
            stylers: [{ color: "#dfd2ae" }],
          },
          {
            featureType: "water",
            elementType: "geometry.fill",
            stylers: [{ color: "#b9d3c2" }],
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{ color: "#92998d" }],
          },
        ],
        { name: "Styled Map" }
      );
/** Creates a map and adds it to the page. */

    const map = new google.maps.Map(
        document.getElementById('map'),
        {center: {lat: 0, lng: 0}, zoom: 1,
        mapTypeControlOptions: {
            mapTypeIds: ["roadmap", "satellite", "hybrid", "terrain", "styled_map"],
          },
        }
    );   
    map.mapTypes.set("styled_map", styledMapType);
    map.setMapTypeId("styled_map");

//     var infowindow = new google.maps.Infowindow();
//     var service = new google.maps.places.PlacesService(map);
//     var PlaceResult = [];
//     var results = google.maps.places.PlaceResult;
//     var status = google.maps.places.PlacesServiceStatus;
//     service.findPlaceFromQuery(
//         request,(result,status)=>{
//             if(status === google.maps.places.PlacesServiceStatus.OK && results){
//                 for(let i = 0; i < results.length; i++){
//                     creaetMarker(result[i]);
//                 }
//                 map.setCenter(results[0].geometry.location);
//             }
//         }
//     );
// }
// var place = google.maps.places.PlaceResult;

// function createMarker(place){
//     if(!place.geometry || !place.geometry.location)return;
//     const marker = new goolge.maps.Marker({
//         map,
//         position = place.geometry.loaction,
//     });
//     google.maps.event.addListener(marker, "click",() =>{
//         infowindow.setContent(places.name || "");
//         infowindow.open(map);
//     });
// }
// window.createMap = createMap;
// export{};






    // var searchBox = new google.maps.places.SearchBox(document.getElementsById('place-input'));

    // map.mapTypeControls[google.maps.ControlPosition.TOP_CENTER].push(document.getElementById('place-input'));

    // google.maps.event.addListener(searchBox,'places-changed',function(){

    //     var places = searchBox.getPlaces();

    //     var bounds = new google.maps.LatLngBounds();
    //     var i, place;
    //     for(i = 0; place = places[i]; i++){

    //         (function(place){
    //             var marker = new google.maps.Marker(
    //                 {
    //                 position: place.geometry.location
    //                 }
    //             );
    //             marker.bindTo('map',searchBox,'map');
    //             google.maps.event.addListener(marker,'map_changed', function(){
    //                 if(!this.getMap()){
    //                     this.unbindAll();
    //                 }
    //             });
    //             bounds.extend(place.geometry.location);
    //         }(place));
    //     }
    //     map.fitBounds(bounds);
    //     searchBox.set('map',map);
    //     map.setZoom(Math.min(map.getZoom(),12));
    // });
}
  