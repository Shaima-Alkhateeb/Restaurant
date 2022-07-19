'use strict';

const allFoods = [];
const parentEl = document.getElementById("menu");

// let randomFoodID = 10000;
function Food( foodName, type, price){
    this.foodName = foodName;
    this.type = type;
    this.price = price;
    this.foodId =  this.randomFoodID();   // randomFoodID++;
    
    allFoods.push(this);
}

Food.prototype.randomFoodID = function () {
    return(Math.floor(1000 + Math.random() * 9000));
}


// Food.prototype.render = function () {
    
//     let tablePlace = document.getElementById("tBodyID");

//     let tableForRow = document.createElement("tr");
//     let tablecontent1 = document.createElement("td");
//     let tablecontent2 = document.createElement("td");
//     let tablecontent3 = document.createElement("td");
//     let tablecontent4 = document.createElement("td");

//     tablecontent1.textContent = this.foodId;
//     tablecontent2.textContent = this.foodName;
//     tablecontent3.textContent = this.type;
//     tablecontent4.textContent = this.price;

//     tableForRow.appendChild(tablecontent1);
//     tableForRow.appendChild(tablecontent2);
//     tableForRow.appendChild(tablecontent3);
//     tableForRow.appendChild(tablecontent4);
//     tablePlace.appendChild(tableForRow);
// }

// Event Listener
let formFood = document.getElementById("formID");
formFood.addEventListener('submit',handleSubmit);


function handleSubmit(event) {
    event.preventDefault();
    // let food = document.getElementById("formID");
    
    let foodName = event.target.foodname.value;
    let type = event.target.food.value;
    let price = event.target.price.value;

    const newFood = new Food( foodName, type, price);

    console.log(newFood);
    // newFood.render();
    saveData();
}


// save my data --> local storage
function saveData() {
    let strifyedData = JSON.stringify(allFoods);
    localStorage.setItem("foodKey", strifyedData);
}

// 
function getData() {
    
    let retrivedData = localStorage.getItem("foodKey");
    let parsedData = JSON.parse(retrivedData)
    
    // re-istantioation
    if (parsedData != null) {
        for (let i = 0; i < parsedData.length; i++) {

            new Food(parsedData[i].foodName, parsedData[i].type, parsedData[i].price, parsedData[i].foodId);
            ////newFoodIstance
        }
    }
    // for (let i = 0; i < allFoods.length; i++){
    //     allFoods[i].render();
    //     console.log(allFoods);
    // }
}

getData();

