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

/** Creates a map and adds it to the page. */
function createMap() {
    const map = new google.maps.Map(
        document.getElementById('map'),
        {center: {lat: 37.422, lng: -122.084}, zoom: 16});
  }