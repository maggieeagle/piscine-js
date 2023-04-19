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
        let y = structuredClone(x)
        y.temperature = y.temperature.split(' ').join('')
        return y
    })
}

function tempForecasts(data) {
    return data.map(e => fahrenheitToCelsius([e.temperature])+'elsius in '+ upperCasingStates([e.city]) + ', ' + upperCasingStates([e.state]))
}

console.log(trimTemp([
    {
      city: 'Los Angeles',
      state: 'california',
      region: 'West',
      temperature: '101 °F',
    },
    {
      city: 'San Francisco',
      state: 'california',
      region: 'West',
      temperature: '84 °F',
    },
    { city: 'Miami', state: 'Florida', region: 'South', temperature: '112°F' },
    {
      city: 'New York City',
      state: 'new york',
      region: 'North East',
      temperature: '0 °F',
    },
    { city: 'Juneau', state: 'Alaska', region: 'West', temperature: '21°F' },
    {
      city: 'Boston',
      state: 'massachussetts',
      region: 'North East',
      temperature: '45 °F',
    },
    {
      city: 'Jackson',
      state: 'mississippi',
      region: 'South',
      temperature: '70 °F',
    },
    { city: 'Utqiagvik', state: 'Alaska', region: 'West', temperature: '-1°F' },
    {
      city: 'Albuquerque',
      state: 'new mexico',
      region: 'West',
      temperature: '95 °F',
    },
  ]))
  