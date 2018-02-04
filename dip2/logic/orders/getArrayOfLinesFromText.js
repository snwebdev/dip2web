/**
 * Created by stewart on 07/07/17.
 */

//takes text and returns an array of text lines that had been seperated by carriage returns

maodule.exports = function (text) {
    return text.split('\n')
}