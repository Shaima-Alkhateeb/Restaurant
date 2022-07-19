'use strict';


// const parentEl = document.getElementById("menu");
let retrivedData = localStorage.getItem("foodKey");
let parsedData = JSON.parse(retrivedData);

function getData() {  
    // re-istantioation
    if (parsedData != null) {
        for (let i = 0; i < parsedData.length; i++) {
            const allFoods = [];
            let tablePlace = document.getElementById("tBodyID");

            let tableForRow = document.createElement("tr");
            let tablecontent1 = document.createElement("td");
            let tablecontent2 = document.createElement("td");
            let tablecontent3 = document.createElement("td");
            let tablecontent4 = document.createElement("td");
        
            tablecontent1.textContent = allFoods[i].foodId;
            tablecontent2.textContent = allFoods[i].foodName;
            tablecontent3.textContent = allFoods[i].type;
            tablecontent4.textContent = allFoods[i].price;
        
            tableForRow.appendChild(tablecontent1);
            tableForRow.appendChild(tablecontent2);
            tableForRow.appendChild(tablecontent3);
            tableForRow.appendChild(tablecontent4);
            tablePlace.appendChild(tableForRow);

            // new Food(parsedData[i].foodName, parsedData[i].type, parsedData[i].price, parsedData[i].foodId);
        }
    }
}

getData();

//////////////////////////////////////////////////////


// Line chart JS
// const chartNames = [];
// const chartPrices = [];
// const chartTypes = [];
// for (let i=0; i<allFoods[i]; i++) {
//     chartNames.push(allFoods[i].foodName);
//     chartPrices.push(allFoods[i].price);
//     chartTypes.push(allFoods[i].type)

// }

//   const data = {
//     labels: chartNames,
//     datasets: [{
//       label: 'Price',
//       backgroundColor: 'rgb(255, 99, 132)',
//       borderColor: 'rgb(255, 99, 132)',
//       data: chartPrices,
//     }]
//   };

//   const config = {
//     type: 'line',
//     data: data,
//     options: {}
//   };

//   const myChart = new Chart(
//     document.getElementById('myChart'),
//     config
//   );

//   // Bar chart JS
//   const numberOfEachTypeOfFood = [];

//   fruitAndVegetablesCounting = 0;
//   starchyFoodCounting = 0;
//   dairyCounting = 0;
//   proteinCounting = 0;
//   fatCounting = 0;

// switch(allFoods[i].type) {
//     case "Fruit and vegetables":
//         fruitAndVegetablesCounting++;
//       break;

//     case "Starchy food":
//         starchyFoodCounting++;
//       break;

//     case "Dairy":
//         dairyCounting++;
//       break;

//     case "Protein":
//         proteinCounting++;
//       break;  

//     case "Fat":
//         fatCounting++;
//       break;
     
//     default:
//       // code block
//   }

  

//   const dataBar = {
//     labels: chartTypes,
//     datasets: [{
//       label: 'Type',
//       backgroundColor: 'rgb(255, 99, 132)',
//       borderColor: 'rgb(255, 99, 132)',
//       data: chartPrices,
//     }]
//   };

//   const configBar = {
//     type: 'bar',
//     data: data,
//     options: {}
//   };

//   const myBarChart = new Chart(
//     document.getElementById('myChart'),
//     configBar
//   );