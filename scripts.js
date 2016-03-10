
function callback(err, result) {
    document.getElementById("add").style.color = null;
    document.getElementById("subtract").style.color = null;
    document.getElementById("multiply").style.color = null;
    document.getElementById("divide").style.color = null;
    if (err) {
        alert(err);
    } else {
        alert("The result of the operation is: " + result);
    }
}

function add(op1, op2) {
    var op1 = document.getElementById('op1').value;
    var op2 = document.getElementById('op2').value;
    op1 = parseInt(op1);
    op2 = parseInt(op2);
    document.getElementById("add").style.color = "red";
    davidsLib.add(op1, op2, function (err, result) {
        callback(err, result);
    });
}
function subtract(op1, op2) {
    var op1 = document.getElementById('op1').value;
    var op2 = document.getElementById('op2').value;
    op1 = parseInt(op1);
    op2 = parseInt(op2);
    document.getElementById("subtract").style.color = "red";
    davidsLib.subtract(op1, op2, function (err, result) {
        callback(err, result);
    });

}
function multiply(op1, op2) {
    var op1 = document.getElementById('op1').value;
    var op2 = document.getElementById('op2').value;
    op1 = parseInt(op1);
    op2 = parseInt(op2);
    document.getElementById("multiply").style.color = "red";
    davidsLib.multiply(op1, op2, function (err, result) {
        callback(err, result);
    });

}
function divide(op1, op2) {
    var op1 = document.getElementById('op1').value;
    var op2 = document.getElementById('op2').value;
    op1 = parseInt(op1);
    op2 = parseInt(op2);
    document.getElementById("divide").style.color = "red";
    davidsLib.divide(op1, op2, function (err, result) {
        callback(err, result);
    });

}

