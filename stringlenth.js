const stringLength = (string) => {
  const size = string.length;
  if (size === 0 || size > 10) {
    return false;
  } else {
    return size;
  }
}

module.exports = stringLength;