billTotal = window.prompt("What is the total of your bill?");

function calculateTip() {
    return billTotal * .20;
}

document.getElementById("tip").innerHTML = calculateTip(billTotal);
