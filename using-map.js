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
        return {city: x.city, temperature : x.temperature.split(' ').join('')}
    })
}

function tempForecasts(data) {
    return data.map(e => fahrenheitToCelsius([e.temperature])+'elsius in '+ upperCasingStates([e.city]) + ', ' + upperCasingStates([e.state]))
}
  