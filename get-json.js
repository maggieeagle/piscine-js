async function getJSON(path, params) {
    console.log(path)
    const url = new URL(path);
    Object.entries(params).forEach(([key, value]) => url.searchParams.append(key, value))
    // const response = await fetch(path)

    // if (!response.ok)
    //     throw new Error(response.statusText);

    // return await response.json()

    return fetch(url.toString())
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