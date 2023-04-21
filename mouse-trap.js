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
            if (checkX(last, e.pageX, e.pageY)) setPosition(last, e.pageX-last.offsetWidth/2, last.style.top)
            if (checkY(last, e.pageX, e.pageY)) setPosition(last, last.style.left, e.pageY-last.offsetHeight/2)
            if (!last.classList.contains('trapped')) trap(last, box)
        }
    })

    function checkX(e, x, y) {
        let trap = box.getBoundingClientRect();
        let right = x + e.offsetWidth/2, left = x - e.offsetHeight/2
        if (!e.classList.contains('trapped')) return true
        else if (left > trap.left && right < trap.right) return true
        return false
    }
    function checkY(e, x, y) {
        let trap = box.getBoundingClientRect();
        let top = y-e.offsetHeight/2, bottom = y + e.offsetHeight/2
        if (!e.classList.contains('trapped')) return true
        else if (top > trap.top && bottom < trap.bottom) return true
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
    if (circle.top > trap.top && circle.left > trap.left &&
        circle.bottom < trap.bottom && circle.right < trap.right) {
        e.classList.add('trapped')
        e.style.background = `var(--purple)`;
    }
}