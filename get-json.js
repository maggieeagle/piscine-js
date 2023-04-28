function getJSON(path, params) {
    path = appendQuery(path, params)
    const response = await fetch(url).then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(data => {
        return data.json();
      })
      .catch(error => {
        return {'error': error}
      });
}

function appendQuery(url, params) {
    Object.entries(params).forEach(([key, value]) => {
        url.searchParams.set(key, value);
    });
}