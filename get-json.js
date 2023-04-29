async function getJSON(path, params) {
    let url = path
    url += '?'
    Object.entries(params).forEach(([key, value]) => url += key + '=' + value.toString().replace(' ', '+') + '&')
    url = url.slice(0, -1)

    return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(data => {
      if (data.error) {
        throw new Error(data.error);
      }
      return data.data;
    });
}