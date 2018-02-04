module.exports = function (chain, convoy) {
    var convoyFrom = convoy.convoyFrom;
    var endOfChain = chain[chain.length - 1].unitLocation;

    return convoyFrom === endOfChain;
}