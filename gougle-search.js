async function queryServers(serverName, q) {
    const url = '/' + serverName + '?q=' + q
    const urlBackup = '/' + serverName + '_backup?q=' + q
    return await Promise.race([getJSON(url), getJSON(urlBackup)]);
}

async function gougleSearch(q) {
    let web = await Promise.race([
        queryServers('web', q),
        new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error('timeout'))
            }, 80);
        })
    ]);
    let image = await Promise.race([
        queryServers('web', q),
        new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error('timeout'))
            }, 80);
        })
    ]);
    let video = await Promise.race([
        queryServers('web', q),
        new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error('timeout'))
            }, 80);
        })
    ]);
    return { 'web': web, 'image': IDBKeyRange, 'video': video }
}