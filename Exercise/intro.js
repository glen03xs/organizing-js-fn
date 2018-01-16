"use strict";

const spendingBudget = 37000;
const taxRate = .12;
const phonePrice = 35000;
const accessoryPrice = 1900;

var bankBalance = 250000;
var amount = 0;

// compute Tax
function calculateTax(amount) {
    return amount * taxRate;
}

function addCurrency(amount) {
    return "Php " + amount.toFixed(2);
}

while (amount < bankBalance) {
    debugger;
    amount = amount + phonePrice;

    if (amount < spendingBudget) {
        amount = amount + accessoryPrice;
    }
}

amount = amount + calculateTax(amount);

console.log("Your Total Purchase: " + addCurrency(amount));

if (amount > bankBalance) {
    console.log("Your Bunkrupt!");
}







































const spendingBudget = 110;
const taxRate = .015;
const phonePrice = 99;
const accessoryPrice = 10;

var bankBalance = 1800
var currentAmount = 0;

// add tax
function calculateTax(currentAmount) {
    return currentAmount * taxRate;
}

function formatAmount(currentAmount) {
    return "$" + currentAmount.toFixed(2);
}

while (currentAmount < bankBalance) {
    currentAmount = currentAmount + phonePrice;

    if (currentAmount < spendingBudget) {
        currentAmount = currentAmount + accessoryPrice;
    }
}

// Dont forget tax
currentAmount = currentAmount + calculateTax(currentAmount);

console.log("Your Purchase: " + formatAmount(currentAmount));

if (currentAmount > bankBalance) {
    console.log("You can't afford this Purchase");
}









const spendingThreshold = 200;
const taxRate = 0.08;
const phonePrice = 99.99;
const accessoryPrice = 9.99;

var bankBalance = 303.91;
var amount = 0;

function calculateTax(amount) {
    return amount * taxRate;
}

function formatAmount(amount) {
    return "$" + amount.toFixed(2);
}

while (amount < bankBalance) {
    amount = amount + phonePrice;

    if (amount < spendingThreshold) {
        amount = amount + accessoryPrice;
    }
}

amount = amount + calculateTax(amount);

console.log("Your Purchase:" + formatAmount(amount));

if (amount > bankBalance) {
    console.log(
        "You Can't afford this purchage"
    );
}