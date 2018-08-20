function howManyDaysInAMonth(month, leapYear = false) {
  let result = '';
  switch (month) {
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
      result = `${month} has 31 days`;
      break;
    case 'April':
    case 'June':
    case 'September':
    case 'November':
      result = `${month} has 30 days`;
      break;
    case 'February':
      if (leapYear) {
        result = `${month} has 29 days`;
      } else {
        result = `${month} has 28 days`;
      }
      break;
    default: 
      throw new Error('Must provide a valid month.');
  }
  return result;
}

try {
  console.log(howManyDaysInAMonth('January'));
  console.log(howManyDaysInAMonth('April'));
  console.log(howManyDaysInAMonth('February', true));
  console.log(howManyDaysInAMonth('February', false));
  console.log(howManyDaysInAMonth('something'));
} catch(e) {
  console.error(e.message);
}