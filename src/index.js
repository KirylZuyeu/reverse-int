module.exports = function reverse (n) {
    if (n < 0) n = Math.abs(n);
    return String(n).split('').reverse().join('');
}
