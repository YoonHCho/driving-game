var $car = document.querySelector('.car-right');
var $img = document.querySelector('img');
var intId;
window.addEventListener('keydown', turnCar);
var movement = 0;
function turnCar(event) {
  if (event.code === 'Space') {
    intId = setInterval(start, 16);
  }
  if (event.code === 'ArrowUp') {
    $car.className = 'car-up';
  } else if (event.code === 'ArrowLeft') {
    $car.className = 'car-left';
  } else if (event.code === 'ArrowDown') {
    $car.className = 'car-down';
  } else if (event.code === 'ArrowRight') {
    $car.className = 'car-right';
  }
}

function start() {
  movement += 20;
  var move = movement + 'px';
  $img.style.left = move;
  if ($img.style.left === '2500px') {
    clearInterval(intId);
    intId = null;
  }
}
