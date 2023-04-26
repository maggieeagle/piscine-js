function neuron(arr) {
    let output = {}
    for (let i in arr) {
        let re = /^(\w*): ([\w|\s|?|!|,]*) - (\w*): ([\w|\s|?|!|,|\.|&|–|-|(|)]*)/
        let match = arr[i].match(re)
        let key1 = match[1].toLowerCase(), key2 = format(match[2].toLowerCase()),
            key3 = key1.slice(0, -1)
        if (output[key1] == undefined) {
            output[key1] = { [key2]: { [key3]: match[2], responses: [match[4]] } }
        } else {
            if (output[key1][key2] == undefined) {
                output[key1][key2] = { [key3]: match[2], responses: [match[4]] }
            }
            else {
                output[key1][key2].responses.push(match[4])
            }
        }
    }
    return output
}

function format(str) {
    if (str.slice(-1) === "?" || str.slice(-1) === "!") {
        str = str.slice(0, -1);
    }
    str = str.replaceAll(' ', '_')
    return str
}

// console.log(neuron([
//     'Questions: what is ounces? - Response: Ounce, unit of weight in the avoirdupois system',
//     'Questions: what is ounces? - Response: equal to 1/16 pound (437 1/2 grains)',
//     'Questions: what is Mud dauber - Response: Mud dauber is a name commonly applied to a number of wasps',
//     'Orders: shutdown! - Response: Yes Sr!',
//     'Orders: Quote something! - Response: Pursue what catches your heart, not what catches your eyes.'
// ]))

// console.log(neuron(['Orders: shutdown please! - Response: no!']).orders.shutdown_please)

// console.log(neuron([
//     'Questions: what is life? - Response: The condition that distinguishes animals and plants from inorganic matter',
//     'Questions: what is life? - Response: Life is a characteristic that distinguishes physical entities that have biological processes.',
//   ]).questions.what_is_life)