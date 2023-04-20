export const createCircle = () => {
    document.addEventListener('click', (e) => {
        const template = document.createElement('div');
        template.classList.add('circle');
        template.style.backgroundColor = 'white'
        document.body.appendChild(template);
        setPosition(template, e.pageX-template.offsetWidth/2, e.pageY-template.offsetHeight/2)
    })
}

export const moveCircle = () => {
    const box = document.querySelector('.box')
    document.addEventListener('mousemove', (e) => {
        let last = document.body.lastChild
        if (last != null) {
            if (check(last, e.pageX, e.pageY)) setPosition(last, e.pageX-last.offsetWidth/2, e.pageY-last.offsetHeight/2)
            if (!last.classList.contains('trapped')) trap(last)
        }
    })

    function trap(e) {
        let trap = box.getBoundingClientRect();
        let circle = e.getBoundingClientRect();
        if (circle.top > trap.top + 1 && circle.left > trap.left + 1 &&
            circle.bottom < trap.bottom - 1 && circle.right < trap.right - 1) {
            e.classList.add('trapped')
            e.style.backgroundColor = getComputedStyle(document.body).getPropertyValue('--purple')
        }
    }

    function check(e, x, y) {
        let trap = box.getBoundingClientRect();
        let top = y-e.offsetHeight/2, right = x + e.offsetWidth/2, bottom = y + e.offsetHeight/2, left = x-e.offsetWidth/2
        if (!e.classList.contains('trapped')) return true
        else if (top >= trap.top && left >= trap.left &&
            bottom <= trap.bottom && right <= trap.right) return true
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