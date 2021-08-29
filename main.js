var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");
var color = "black";
var width_of_line = 5;
var locked = false;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    //color = document.getElementById("color").value;
    width_of_line = document.getElementById("width").value;
    mouseEvent = "mouseDown";
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    if(locked)
        return;

    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }

    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}

canvas.addEventListener("mouseup", my_mouseup);


function my_mouseup(e) {
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function modeErase() {
    color = "white";
    ctx.strokeStyle = color;
    ctx.lineWidth = 20;
    canvas.style.cursor = "grab";
}

function modePencil() {
    color = document.getElementById('color').value;
    ctx.strokeStyle = color;
    width_of_line = 5;
    ctx.lineWidth = width_of_line;
    canvas.style.cursor = "crosshair";
}

function modeHighlight() {
    ctx.strokeStyle = "yellow";
    ctx.linewidth = 20;
    canvas.style.cursor = "grab";
}
function colorChange() {
    color = document.getElementById('color').value;
    
}
function lockCanvas() {
if (confirm("Are you sure you want to lock canvas?")) {
    document.getElementById('clear').disabled=true;
    document.getElementById('eraser').disabled=true;
    document.getElementById('pencil').disabled=true;
    document.getElementById('highlighter').disabled=true;
    document.getElementById('lock').disabled=true;
    document.getElementById('unlock').disabled=false;
    locked = true;
  }
}

function unlockCanvas() { 
    document.getElementById('clear').disabled=false;
    document.getElementById('eraser').disabled=false;
    document.getElementById('pencil').disabled=false;
    document.getElementById('highlighter').disabled=false;
    document.getElementById('lock').disabled=false;
    document.getElementById('unlock').disabled=true;
    locked = false;
}
    
 
