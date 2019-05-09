// Returns

function capitalizeName(name) {
    let capName = '';
    for (let l in name) {
        if (l == 0) {
            capName += name[l].toUpperCase();
        } else {
            capName += name[l].toLowerCase();
        }
    }
    console.log(capName)
    return capName
}

const myName = capitalizeName('nockUlas')

console.log(myName + ', how does it feel to be such a dinkus?')

function tipCalc(bill) {
    let tip = (bill * 0.2);
    return tip.toFixed(2) //returns value to two desimals
}
let totalTip = tipCalc(19.88);
console.log(totalTip);