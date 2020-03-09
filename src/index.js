module.exports = function reverse (n) {
    let arr = [];
    let item = Math.abs(n).toString();
    for (let i = 0 ; i < item.length; i++) {
        arr.push(item[i]);
    }
    let number = arr.reverse().join('');
    return number;
}
