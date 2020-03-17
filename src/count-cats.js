module.exports = function countCats(backyard) {
    let count = 0;
    backyard.forEach(item => count += item.filter(item => item === '^^').length);
    return  count;
};
