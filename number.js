

export default function AmountFormat(amt) {
  const newNum = addZeroes(amt);
  let newNumber = numberWithCommas(newNum);
  return `${newNumber}`.includes("-")
    ? "-$" + `${newNumber}`.replace("-", "")
    : `$${newNumber}`;
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function addZeroes(value) {
  var new_value = value * 1;
  new_value = new_value + "";

  let pos = new_value.indexOf(".");
  if (pos == -1) new_value = new_value + ".00";
  else {
    var integer = new_value.substring(0, pos);
    var decimals = new_value.substring(pos + 1);
    while (decimals.length < 2) decimals = decimals + "0";
    new_value = integer + "." + decimals;
  }
  return new_value;
}
