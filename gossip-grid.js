import { gossips } from './gossip-grid.data.js '

export const grid = () => {
    setRanges()
    let form = '<textarea placeholder="Got a gossip to share?"></textarea><button type="submit">Share gossip!</button>'
    setGossip(form, 'form')

    gossips.forEach(gossip => {
        setGossip(gossip)
    });

    const button = document.querySelector('form')
    console.log(button)
    button.addEventListener("submit", (event) => {
        event. preventDefault();
        let gossip = document.querySelector('.gossip')
        console.log(gossip.textContent)
        let textarea = document.querySelector('textarea')
        setGossip(textarea.value, null, 3, gossip.style.width, gossip.style.fontSize, gossip.style.background)
        textarea.value = ''
    });

    const width = document.querySelector('#width')
    width.addEventListener("input", (e) => {
        let gossips = document.querySelectorAll('.gossip')
        gossips.forEach(gossip => {
            gossip.style.width = e.target.value + 'px'
            console.log(e.target.value)
        });
    });

    const fontSize = document.querySelector('#fontSize')
    fontSize.addEventListener("input", (e) => {
        let gossips = document.querySelectorAll('.gossip')
        gossips.forEach(gossip => {
            gossip.style.fontSize = e.target.value + 'px'
            console.log(e.target.value)
        });
    });

    const background = document.querySelector('#background')
    background.addEventListener("input", (e) => {
        let gossips = document.querySelectorAll('.gossip')
        gossips.forEach(gossip => {
            let hsl = 'hsl(280, 50%, ' + e.target.value + '%)'
            gossip.style.background = hsl
        });
    });
    
    function setGossip(innerHTML, tag, pos, width, font, color) {
        let template
        if (tag != null) template = document.createElement(tag);
        else template = document.createElement('div');
        template.classList.add('gossip')
        template.innerHTML = innerHTML;
        if (width != null) template.style.width = width
        if (font != null) template.style.fontSize = font
        if (color != null) template.style.background = color

        if (pos != null) document.body.insertBefore(template, document.body.children[pos]);
        else document.body.appendChild(template);
    }

    function setRange(id, min, max) {
        const template = document.createElement('input');
        template.classList.add('range')
        template.setAttribute('type', 'range')
        template.setAttribute('id', id)
        template.setAttribute('min', min)
        template.setAttribute('max', max)
        console.log(template)
        return template
    }

    function setRanges(id) {
        const template = document.createElement('div');
        template.classList.add('ranges')
        template.appendChild(setRange('width', 200, 800))
        template.appendChild(setRange('fontSize', 20, 40))
        template.appendChild(setRange('background', 20, 75))
        document.body.appendChild(template);
    }
}