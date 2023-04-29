async function isWinner(country) {
    try {
    let winner = await db.getWinner(str);
    if (winner.continent !== 'Europe') {
        return `${country} is not what we are looking for because of the continent`
      }
      const countryResults = await db.getResults(countryInfo.id)
      if (countryResults.length < 3) {
        return `${country} is not what we are looking for because of the number of times it was champion`
      }
      const years = countryResults.map((result) => result.year).join(', ')
      const results = countryResults.map((result) => result.score).join(', ')
      return `${country} won the FIFA World Cup in ${years} winning by ${results}`
    } catch (err) {
      return `${country} never was a winner`
    }
}