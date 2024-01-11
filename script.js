function twoDecimalPlaces(n) {
    return parseFloat(n.toFixed(2));
  }

  //arrow notation version
  const twoDecimalPlaces = n =>  Number(n.toFixed(2))