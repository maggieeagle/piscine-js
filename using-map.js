function citiesOnly(arr) {
    return arr.map(x => x['city']);
}

function upperCasingStates(arr) {
    return arr.map(x => x.split(' ').map(word => word[0].toUpperCase()+word.slice(1, word.length)).join(' '));
}

function fahrenheitToCelsius(arr) {
    return arr.map(x => Math.floor((parseInt(x)-32)*5/9)+'°C');
}

function trimTemp(arr) {
    return arr.map(x => {
        y = structuredClone(x)
        y.temperature = y.temperature.split(' ').join('')
        return y
    })
}

function tempForecasts(data) {
    return data.map(e => fahrenheitToCelsius([e.temperature])+'elsius in '+ upperCasingStates([e.city]) + ', ' + upperCasingStates([e.state]))
}

console.log(trimTemp([
    { city: 'Los Angeles', temperature: '  101 °F   ' },
    { city: 'San Francisco', temperature: ' 84 ° F   ' },
  ])) /* -> [
    { city: 'Los Angeles', temperature: '101°F' },
    { city: 'San Francisco', temperature: '84°F' },
  ] */
  
  