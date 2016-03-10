
function callback(err, result) {
    if (err) {
        alert(err);
    } else {
        alert("Result: " + result);
    }
}

function add(op1, op2) {
    var op1 = document.getElementById('op1').value;
    var op2 = document.getElementById('op2').value;
    op1 = parseInt(op1);
    op2 = parseInt(op2);
    davidsLib.add(op1, op2, function (err, result) {
        callback(err, result);
    });
}
function subtract(op1, op2) {
    var op1 = document.getElementById('op1').value;
    var op2 = document.getElementById('op2').value;
    op1 = parseInt(op1);
    op2 = parseInt(op2);
    davidsLib.subtract(op1, op2, function (err, result) {
        callback(err, result);
    });

}
function multiply(op1, op2) {
    var op1 = document.getElementById('op1').value;
    var op2 = document.getElementById('op2').value;
    op1 = parseInt(op1);
    op2 = parseInt(op2);
    davidsLib.multiply(op1, op2, function (err, result) {
        callback(err, result);
    });

}
function divide(op1, op2) {
    var op1 = document.getElementById('op1').value;
    var op2 = document.getElementById('op2').value;
    if (op2 == 0) {
        alert('no 0 please');
    }
    op1 = parseInt(op1);
    op2 = parseInt(op2);
    davidsLib.divide(op1, op2, function (err, result) {
        callback(err, result);
    });

}

