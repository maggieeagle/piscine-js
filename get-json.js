async function getJSON(path, params) {
    path = appendQuery(path, params)
    const response = await fetch(path)

    if (!response.ok)
        throw new Error(response.statusText);

    return await response.json()
}

function appendQuery(url, params) {
    Object.entries(params).forEach(([key, value]) => {
        new URL(url).searchParams.set(key, value);
    });
    return url
}