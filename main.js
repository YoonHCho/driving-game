var $car = document.querySelector('.car-right');
window.addEventListener('keydown', turnCar);

function turnCar(event) {
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
