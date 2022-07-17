'use strict';

const allFoods = [];

function saveData() {
    let strifyedData = JSON.stringify(allFoods);
    localStorage.setItem("Foods", strifyedData);
}

function getData() {
    
    let retrivedData = localStorage.getItem("Foods");
    let parsedData = JSON.parse(retrivedData)
    console.log(parsedData);
    console.log(typeof parsedData); 
    
    if (parsedData != null) {
        for (let i = 0; i < parsedData.length; i++) {

            new Food(parsedData[i].foodName, parsedData[i].type, parsedData[i].price, parsedData[i].foodId);
        }
    }
}

saveData();