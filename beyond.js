function beyond(num) {
  if (num === Infinity || num === -Infinity) {
    console.log("And beyond");
  } else if (num > 0) {
    console.log("To infinity");
  } else if (num < 0) {
    console.log("To negative infinity");
  } else if (num === 0) {
    console.log("Staying home");
  }
}

beyond(1);
beyond(-50);
beyond(0);
beyond(Infinity);
beyond(Math.pow(10, 1000));