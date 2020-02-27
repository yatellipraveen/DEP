//https://www.codaysewars.com/kata/568d0dd208ee69389d000016/train/javascript


// Transportation


function rentalCarCost(days) {
    var total=40*days;
    if(days>=7)
      {
        total=total-50;
      }
    else if (days>=3) 
      {
        total=total-20;
      }
    return total;
  }