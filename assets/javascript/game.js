$(document).ready(function () {

    //start of jquery
    var crystalValues = [];
    var total = 0;
    var win = 0;
    var loss = 0;
    var numbertoguess = 0;
    var max = 120;
    var min = 19;


    //randomly generate a number to guess between min and max when click button for new game
    function game() {
        $("#getnumber").on("click", function () {
            numbertoguess = Math.floor(Math.random() * (max - min + 1) + min);
            //console.log(numbertoguess);
            $("#numbertoguess").text(numbertoguess);

            //assign random number to each crystalValues, such that there is no duplication
            crystalValues = []
            assignValues();
            console.log(crystalValues);
            //assign attribute data to each image
            /*
            for (var i = 0; i < crystalValues.length; i++){
            $("#image"+(i+1)).attr("value", crystalValues[i])
            }
            */
            //reset stuff
            total = 0;
            $("#total").text(total);

            return true;

        })
        //END game()
    };

    //assign random number to each crystalValues, such that there is no duplication
    function assignValues() {
        while (crystalValues.length < 4) {
            var newNum = Math.floor(Math.random() * 12 + 1);
            if (crystalValues.indexOf(newNum) < 0) {
                crystalValues.push(newNum);
            }
            //assign attribute data to each image
            for (var i = 0; i < crystalValues.length; i++) {
                $("#image" + (i + 1)).attr("value", crystalValues[i])
            }
        }
        //END assignValues()
    };




    //onclick of each image crystal
    function clickCrystal() {
        $(".image").on("click", function () {
            //get the value when click on the image 
            var crysValue;
            crysValue = ($(this).attr("value"));
            crysValue = parseInt(crysValue);
            //console.log(crysValue);

            total += crysValue;

            if (total > 0) {
                $("#total").text(total);
                console.log("The total you guess is " + total);
            };
            if (total === numbertoguess) {
                win++;
                $("#win").text(win);
                $("#message").text("YOU WIN!!")
                reset();
            } else if (total >= numbertoguess) {
                loss++;
                $("#loss").text(loss);
                $("#message").text("YOU LOST!!")
                reset();
            }

        })
        //END clickCrystal()
    };

    function reset() {
        total = 0;
        $("#total").text(total);
        numbertoguess = Math.floor(Math.random() * (max - min + 1) + min);
        $("#numbertoguess").text(numbertoguess);
        crystalValues = []
        assignValues();
        console.log(crystalValues);
    };


    game();

    clickCrystal();
    //end of ready
});