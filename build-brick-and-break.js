export const build = (n) => {
    for (let i = 1; i <= n; i++) {
        setTimeout(function () {
            const template = document.createElement('div');
            template.setAttribute('id', 'brick-' + i);
            template.innerHTML = "";

            if (i%3 == 2) {
                template.setAttribute('foundation', true);
            }
            document.body.appendChild(template);
        }, 100 * i);
    }
}

export const repair = (...ids) => {
    ids.forEach(id => {
        console.log(id)
        let brick = document.getElementById(id)
        if (id%2 == 0) brick.setAttribute('repaired', 'in progress')
        else brick.setAttribute('repaired', true)
    });
}

export const destroy = () => {
    let last = document.body.lastChild
    document.body.removeChild(last)
}