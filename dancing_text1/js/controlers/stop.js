let key = false

document.body.onkeyup = function (e) {

    if (e.keyCode == 32) {

        if (key == false) {

            key = true

            clearInterval(move);
            
        } else {

            move= setInterval(danceWorld, 1);

            key = false

        }
    }
}
