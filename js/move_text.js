let speed = 1; //1 to 100

    let incX = speed * (Math.round(Math.random()) ? 1 : -1);
    let incY = speed * (Math.round(Math.random()) ? 1 : -1);


    //cambiar flecha x
    direction_X(incX)

    //cambiar flecha xy
    direction_Y(incY)

    //cambiar flecha texto
    let direction = [incX, incY]
    direction_text(direction)


    let ball = document.getElementById("ball");

   let danceWorld =function () {


      x = ball.style.left ? parseInt(ball.style.left, 10) : 0;
      y = ball.style.top ? parseInt(ball.style.top, 10) : 0;

      document.getElementById("px_x").innerHTML = x;
      document.getElementById("px_y").innerHTML = y;


      ball.style.left = (x + incX) + "px";
      ball.style.top = (y + incY) + "px";



      //Detect if we reach X coordinates limits
      if (((x + incX) > (window.innerWidth - 40)) || ((x + incX) <= 0)) {
        incX = (-1) * incX

        //cambiar flecha x
        direction_X(incX)

        //cambiar flecha texto
        direction_text(direction)


      }


      //Detect if we reach Y coordinates limits
      if (((y + incY) > (window.innerHeight - 40)) || ((y + incY) <= 0)) {
        incY = (-1) * incY

        //cambiar flecha y
        direction_Y(incY)

        //cambiar flecha texto
        direction_text(direction)
      }

    }
   let move= setInterval(danceWorld, 1);


    function direction_X(incX) {

      if (incX == 1) {
        document.getElementById('d_x').style.transform = 'rotate(' + 45 + 'deg)';
      } else {
        document.getElementById('d_x').style.transform = 'rotate(' + 225 + 'deg)';
      }
    }

    function direction_Y(incY) {
      if (incY == 1) {
        document.getElementById('d_y').style.transform = 'rotate(' + 135 + 'deg)';
      } else {
        document.getElementById('d_y').style.transform = 'rotate(' + 315 + 'deg)';
      }
    }

    function direction_text(direction) {

      direction[0] = incX
      direction[1] = incY



      if ((incX == 1) && (incY == 1)) {
        document.getElementById('d_t').style.transform = 'rotate(' + 90 + 'deg)';
      } else if ((incX == -1) && (incY == 1)) {
        document.getElementById('d_t').style.transform = 'rotate(' + 180 + 'deg)';
      } else if ((incX == -1) && (incY == -1)) {
        document.getElementById('d_t').style.transform = 'rotate(' + 270 + 'deg)';
      } else {
        document.getElementById('d_t').style.transform = 'rotate(' + 360 + 'deg)';
      }

    }


