import { gossips } from './gossip-grid.data.js '

export const grid = () => {
    setRanges()
    let form = '<form><textarea placeholder="Got a gossip to share?"></textarea><button type="submit">Share gossip!</button></form>'
    setGossip(form)

    gossips.forEach(gossip => {
        setGossip(gossip)
    });

    const button = document.querySelector('button')
    console.log(button)
    button.addEventListener("click", (event) => {
        event. preventDefault();
        let text = document.querySelector('textarea').value
        console.log(text, 'hey')
        setGossip(text, 3)
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
    
    function setGossip(innerHTML, pos) {
        const template = document.createElement('div');
        template.classList.add('gossip')
        template.innerHTML = innerHTML;
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