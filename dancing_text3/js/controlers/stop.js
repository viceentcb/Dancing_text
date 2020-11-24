import {start} from '../main.js'
export function stopball(global_vars) {
    let stateApp = global_vars.stateapp
    let myApp=global_vars.myapp
    document.body.onkeyup = function (e) {
        if (e.keyCode == 32) {
            if (stateApp == "run") {
                stateApp = "pause";
                clearInterval(myApp);
            } else {
                start();
            }
        }
    }
}

