export const createCircle = () => {
    document.addEventListener('click', (e) => {
        const template = document.createElement('div');
        template.classList.add('circle');
        setPosition(template, e.pageX, e.pageY)
        template.style.backgroundColor = 'white'
        document.body.appendChild(template);
    })
}

export const moveCircle = () => {
    const box = document.querySelector('.box')
    document.addEventListener('mousemove', (e) => {
        let last = document.body.lastChild
        if (last != null) {
            if (check(last, e.pageX, e.pageY)) setPosition(last, e.pageX, e.pageY)
            if (!last.classList.contains('trapped')) trap(last)
        }
    })

    function trap(e) {
        let trap = box.getBoundingClientRect();
        let circle = e.getBoundingClientRect();
        if (circle.top > trap.top + 1 && circle.left > trap.left + 1 &&
            circle.bottom < trap.bottom - 1 && circle.right < trap.right - 1) {
            e.classList.add('trapped')
        }
    }

    function check(e, x, y) {
        let trap = box.getBoundingClientRect();
        let top = y, right = x + e.offsetWidth, bottom = y + e.offsetHeight, left = x
        if (!e.classList.contains('trapped')) return true
        else if (top > trap.top + 1 && left > trap.left + 1 &&
            bottom < trap.bottom - 1 && right < trap.right - 1) return true
        return false
    }
}

export const setBox = () => {
    const template = document.createElement('div');
    template.classList.add('box');
    // setPosition(template, (window.innerWidth - template.width) / 2, (window.innerHeight - template.height) / 2)
    document.body.appendChild(template);
}

function setPosition(e, x, y) {
    e.style.left = x + 'px';
    e.style.top = y + 'px';
}