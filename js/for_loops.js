//For - #1
function showMultiplicationTable(input) {
    for (var num = 1; num <= 10; num++) {
        console.log(input + " x " + num + " = " + input * num);
    }
}

showMultiplicationTable(7)



//For - #2
var i = 0;
while (i<10) {
    console.log(i)
    i++;
}

for (var i = 0; i < 10; i++) {
    var num = Math.floor(Math.random() * 180) + 20;
    if (num % 2 === 0)
        console.log(num + " is even");
     else {
        console.log(num + " is odd");
    }
}



//For - #3
function numberTree() {
    for (var i = 1; i < 10; i++) {
        var it = '';
        for (var j=0; j<i; j++) {
            it = it + i;
        }
        console.log(it);
    }
}

numberTree()



//For - #4
var  countBackwardsByFives = function () {
    for (var i = 100; i>=5; i-=5) {
        console.log(i);
    }
}

countBackwardsByFives()