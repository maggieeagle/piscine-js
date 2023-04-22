import { gossips } from './gossip-grid.data.js '

export const grid = () => {
    setRanges()
    let form = '<form><textarea placeholder="Got a gossip to share?"></textarea><input type="submit" value="Share gossip!"></form>'
    setGossip(form)

    gossips.forEach(gossip => {
        setGossip(gossip)
    });

    const button = document.querySelector('form')
    console.log(button)
    button.addEventListener("submit", (event) => {
        event. preventDefault();
        let gossip = document.querySelector('.gossip')
        let textarea = document.querySelector('textarea')
        setGossip(textarea.value, 3, gossip.style.width, gossip.style.fontSize, gossip.style.background)
        textarea.value = ''
    });

    const width = document.querySelector('#width')
    width.addEventListener("input", (e) => {
        let gossips = document.querySelectorAll('.gossip')
        gossips.forEach(gossip => {
            gossip.style.width = (200+e.target.value*6) + 'px'
            console.log(e.target.value)
        });
    });

    const fontSize = document.querySelector('#fontSize')
    fontSize.addEventListener("input", (e) => {
        let gossips = document.querySelectorAll('.gossip')
        gossips.forEach(gossip => {
            gossip.style.fontSize = (20+e.target.value/5) + 'px'
            console.log(e.target.value)
        });
    });

    const background = document.querySelector('#background')
    background.addEventListener("input", (e) => {
        let gossips = document.querySelectorAll('.gossip')
        gossips.forEach(gossip => {
            console.log(20+e.target.value/(100/55))
            let hsl = 'hsl(280, 50%, ' + parseInt(20+e.target.value/(100/55)) + '%)'
            gossip.style.background = hsl
        });
    });
    
    function setGossip(innerHTML, pos, width, font, color) {
        const template = document.createElement('div');
        template.classList.add('gossip')
        template.innerHTML = innerHTML;
        if (width != null) template.style.width = width
        if (font != null) template.style.fontSize = font
        if (color != null) template.style.background = color

        if (pos != null) document.body.insertBefore(template, document.body.children[pos]);
        else document.body.appendChild(template);
    }

    function setRange(id) {
        const template = document.createElement('input');
        template.classList.add('range')
        template.setAttribute('type', 'range')
        template.setAttribute('id', id)
        console.log(template)
        return template
    }

    function setRanges(id) {
        const template = document.createElement('div');
        template.classList.add('ranges')
        template.appendChild(setRange('width'))
        template.appendChild(setRange('fontSize'))
        template.appendChild(setRange('background'))
        document.body.appendChild(template);
    }
}