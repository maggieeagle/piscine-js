export const createCircle = () => {
    const box = document.querySelector('.box')
    document.addEventListener('click', (e) => {
        const template = document.createElement('div');
        template.classList.add('circle');
        template.style.background = 'white'
        document.body.appendChild(template);
        setPosition(template, e.pageX-template.offsetWidth/2, e.pageY-template.offsetHeight/2)
        trap(template, box)
    })
}

export const moveCircle = () => {
    const box = document.querySelector('.box')
    document.addEventListener('mousemove', (e) => {
        let last = document.body.lastChild
        if (last != null) {
            console.log(e.pageX-last.offsetWidth/2, e.pageY-last.offsetHeight/2)
            if (check(last, e.pageX, e.pageY)) setPosition(last, e.pageX-last.offsetWidth/2, e.pageY-last.offsetHeight/2)
            if (!last.classList.contains('trapped')) trap(last, box)
        }
    })

    function check(e, x, y) {
        let trap = box.getBoundingClientRect();
        let top = y-Math.round(e.offsetHeight/2), right = x + Math.round(e.offsetWidth/2), bottom = y + Math.round(e.offsetHeight/2), left = x-Math.round(e.offsetWidth/2)
        if (!e.classList.contains('trapped')) return true
        else if (top > trap.top+1 && left > trap.left &&
            bottom < trap.bottom && right < trap.right) return true
        return false
    }
}

export const setBox = () => {
    const template = document.createElement('div');
    template.classList.add('box');
    document.body.appendChild(template);
}

function setPosition(e, x, y) {
    e.style.left = x + 'px';
    e.style.top = y + 'px';
}

function trap(e, box) {
    let trap = box.getBoundingClientRect();
    let circle = e.getBoundingClientRect();
    if (circle.top > trap.top + 1 && circle.left > trap.left &&
        circle.bottom < trap.bottom && circle.right < trap.right) {
        e.classList.add('trapped')
        e.style.background = `var(--purple)`;
    }
}