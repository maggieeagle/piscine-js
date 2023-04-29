async function queryServers(serverName, q) {
    const url = serverName + '?q=' + q
    const urlBackup = serverName + '_backup?q=' + q
    return getFastestJSON(url, urlBackup)
}

function getFastestJSON(url, urlBackup) {
    const startTime1 = performance.now();
    const promise1 = getJSON(url);
    const endTime1 = performance.now();
  
    const startTime2 = performance.now();
    const promise2 = getJSON(urlBackup);
    const endTime2 = performance.now();
  
    const time1 = endTime1 - startTime1;
    const time2 = endTime2 - startTime2;
  
    return time1 < time2 ? promise1 : promise2;
  }

function gougleSearch(q) {
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