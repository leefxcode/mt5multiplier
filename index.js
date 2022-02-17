"use strict";

let count = document.getElementById("count");
let numPos = document.getElementById("numPos");
let numLot = document.getElementById("numLot");
const calculate = document.querySelector(".calculate");
const reset = document.querySelector(".reset");
const clear = document.querySelector(".clear");
const inputArea = document.getElementById("inputArea");
const numPosSingle = document.getElementById("numPosSingle");
const numLotSingle = document.getElementById("numLotSingle");


let numberOfPostions = 10;
let lotSize = 0.000;

inputArea.value = 0;

// Add event
/*
increase.addEventListener("click", function () {
  total = total + Number(inputArea.value);
  count.textContent = `TOTAL = ${total}`;
});
*/

calculate.addEventListener("click", function () {
  let accountBalance = Number(inputArea.value);
  let riskAmount = accountBalance * 0.75;
  let totalLot = riskAmount/50;
  lotSize = totalLot/numberOfPostions;
  numPos.textContent = `Number of postions : ${numberOfPostions}`;
  numLot.textContent = `Lot size : ${lotSize.toFixed(3)}`;
  numLotSingle.textContent = lotSize.toFixed(3);
  numPosSingle.textContent = numberOfPostions;
  lotSize = 0.000;
});

// Reset event
reset.addEventListener("click", function () {

  const confrimation = confirm("Your saved total will be lost. Are you sure you want to continue?");

  if(confrimation){
    inputArea.value = 0;
    numPos.textContent = `Number of postions : 0`;
    numLot.textContent = `Lot size : 0`;
    numLotSingle.textContent = 0.000;
    numPosSingle.textContent = 0;
  }
});

// Clear input Area event
clear.addEventListener("click", function () {
    inputArea.value = 0;
  });