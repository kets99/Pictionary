if(window.addEventListener) {
window.addEventListener('load', function () {
  var canvas;
  var context;
  var drawwith;
  var color;
  var size;
document.write(hi);

  function whitespace (ev) {

    context.strokeStyle = color;
    context.lineWidth = size;

    if (ev.layerX || ev.layerX == 0) {
      ev._x = ev.layerX;
      ev._y = ev.layerY;
    }
    // Call the event handler of the drawwith.
    var func = drawwith[ev.type];
    if (func) {
      func(ev);
    }
  }

 //mouse events
  function drawing () {
    var drawwith = this;
    this.started = false;


    this.mousedown = function (ev) {
    context.beginPath();
    context.moveTo(ev._x, ev._y);
    drawwith.started = true;
    };

    this.mousemove = function (ev) {
      if (drawwith.started) {
        context.lineTo(ev._x, ev._y);
        context.stroke();
      }
    };

    this.mouseup = function (ev) {
      if (drawwith.started) {
        drawwith.mousemove(ev);
        drawwith.started = false;
      }

    };
  }



  function init () {
    canvas = document.getElementById('whiteboard');
    context = canvas.getContext('2d');
    document.getElementById('colorSwatch').addEventListener('click', function() {
        color = document.querySelector(':checked').getAttribute('data-color');
        size = document.querySelector(':checked').getAttribute('size');
      }, false);

    drawwith = new drawing();
    canvas.addEventListener('mousedown', whitespace, false);
    canvas.addEventListener('mousemove', whitespace, false);
    canvas.addEventListener('mouseup',   whitespace, false);
  }




  init();

}, false); }