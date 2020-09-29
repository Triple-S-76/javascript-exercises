
const ftoc = function(temp) {
  let celcius = 0;
  let celciusRounded;
  celcius = ((temp - 32) * 5) / 9;
  celciusRounded = +(Math.round(celcius + "e+1") + "e-1");
  return celciusRounded;
}

const ctof = function(temp) {
  let fahrenheit;
  let fahrenheitRounded;
  fahrenheit = ((temp / 5) * 9) + 32;
  fahrenheitRounded = +(Math.round(fahrenheit + "e+1") + "e-1");
  return fahrenheitRounded;
}

module.exports = {
  ftoc,
  ctof
}
