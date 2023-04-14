function groupPrice(s) {
    let re = /(?<=\s)[a-zA-Z|$]+[\d]+(\.([\d]*))?/g
    let matches = s.match(re), res = []
    if (matches == null) return []
    matches.forEach(element => {
        res.push([element, element.match(/(?<=[\w|$])\d*(?=\.)/)[0], element.match(/(?<=\.)\d*/)[0]])
    });
    return res
}

console.log(groupPrice('The price of the cereals is $4.00'))