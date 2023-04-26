function flags(obj) {
    let output = {alias: {h: 'help'}, description: []}
    Object.entries(obj).forEach(entry => {
        if(entry[0] != 'help') {
            output.alias[entry[0][0]] = entry[0]
            if (obj.help == undefined || obj.help.indexOf(entry[0])!=-1)
            output.description.push('-'+entry[0][0]+', --'+entry[0]+': '+entry[1])
        }
    });
    output.description = output.description.join('\n')
    return output
}

// console.log(flags({
//     multiply: 'multiply the values',
//     divide: 'divides the values',
//     help: ['divide']
// }))
