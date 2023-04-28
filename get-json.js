function getJSON(path, params) {
    path = appendQuery(path, params)
    const response = await fetch(url)

    if (!response.ok)
        throw new Error(response.statusText);

    return await.response.json
}

function appendQuery(url, params) {
    Object.entries(params).forEach(([key, value]) => {
        url.searchParams.set(key, value);
    });
}