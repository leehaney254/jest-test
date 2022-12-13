const capitalize = (string) => {
  const capital = string[0].toUpperCase() + string.slice(1);
  return capital;
}

module.exports = capitalize;