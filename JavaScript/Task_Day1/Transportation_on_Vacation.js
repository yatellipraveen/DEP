//https://www.codewars.com/kata/568d0dd208ee69389d000016/train/javascript

// Transportation

function rentalCarCost(carRentDays) {
  var totalCost = 40 * carRentDays;
  if (carRentDays >= 7) {
    totalCost = totalCost - 50;
  } else if (carRentDays >= 3) {
    totalCost = totalCost - 20;
  }
  return totalCost;
}
