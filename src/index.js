module.exports = function reverse(n) {
    let strN = n.toString()
    let newStr = ''
    for (let i = strN.length - 1; i >= 0; i--) {
        if (strN[i] === '-') {
            strN.slice(i)
        } else {
            newStr += strN[i]
        }
    }
    return +newStr
}

