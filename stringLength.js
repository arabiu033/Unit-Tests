module.exports = (str) => {
  if (!str.length || str.length > 10)
    throw new Error('String length is out of range');
  return str.length;
};