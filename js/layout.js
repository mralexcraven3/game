var score = document.getElementsByClassName('score');
function save(){
   var input1 = document.getElementById('input1');
   var save = input1.value;
}
var save1 = save();
document.write(save1);

function download(text, name, type) {
  var a = document.getElementById("a");
  var file = new Blob([text], {type: type});
  a.href = URL.createObjectURL(file);
  a.download = name;
}

$(document).keydown(function(e) {
    switch (e.which) {
    case 37:
        $('player').stop().animate({
            left: '-=10'
        }); //left arrow key
        break;
    case 38:
        $('player').stop().animate({
            top: '-=10'
        }); //up arrow key
        break;
    case 39:
        $('player').stop().animate({
            left: '+=10'
        }); //right arrow key
        break;
    case 40:
        $('player').stop().animate({
            top: '+=10'
        }); //bottom arrow key
        break;
    }
})