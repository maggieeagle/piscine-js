function groupPrice(s) {
    let re = /(?<=\s)[a-zA-Z|$]+[\d]+(\.([\d]*))?/g
    let matches = s.match(re), res = []
    matches.forEach(element => {
        res.push(element, element.match(/(?<=[\w|$])\d*(?=\.)/), element.match(/(?<=\.)\d*/))
    });
    return res
}

console.log(groupPrice('The price of the cereals is $4.00.  the total is USD19.98'))