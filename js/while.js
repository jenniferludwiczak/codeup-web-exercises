//While - #2
var i = 2;

while (i < 65537) {
    console.log('while loop iteration #' + i);
    i = i * 2;
}



//While - #3
var iceCream = function() {

    var allCones = Math.floor(Math.random() * 50) + 50;
        console.log("We are starting with " + allCones + " cones.")

        do {
            var customerWants = Math.floor(Math.random() * 5) + 1;
            if (allCones >= customerWants) {
                allCones -= customerWants;
                console.log(customerWants + " cones sold...");
            } else {
                console.log("Cannot sell you " + customerWants + " cones, I only have " + allCones + "...")

            }
        } while (allCones > 0)
            console.log("Yay!!! I sold the all!")
}

iceCream();









