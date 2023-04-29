async function queryServers(serverName, q) {
    const url = '/' + serverName + '?q=' + q
    const urlBackup = '/' + serverName + '_backup?q=' + q
    return Promise.all([getJSON(url), getJSON(urlBackup)])
    .then(([data, dataBackup]) => {
        console.log(data.response_time, dataBackup.response_time)
      if (data.response_time <= dataBackup.response_time) {
        return data;
      } else {
        return dataBackup;
      }
    });
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