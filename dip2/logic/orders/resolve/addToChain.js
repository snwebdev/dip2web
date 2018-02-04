module.exports = function (chain, link) {
    chain.push(link);
    return chain;
}