module.exports = function (convoyMove, convoyChains) {
    for (var i = 0; i < convoyChains.length; i++) {
        var start = convoyMove.unitLocation;
        var end = convoyMove.moveToName;
        var chain = convoyChains[i];
        var chainStart = chain[0].convoyFrom;
        var chainEnd = chain[chain.length - 1].convoyTo;
        if (
            start === chainStart &&
            end === chainEnd
        ) {
            convoyMove.outcome = "ConvoyExists";
            return true;
        }
    }
    return false;
}