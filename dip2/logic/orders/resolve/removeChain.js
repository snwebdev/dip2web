module.exports = function (chain, chains) {
    var index = chains.indexOf(chain);
    chains.splice(index, 1);
}