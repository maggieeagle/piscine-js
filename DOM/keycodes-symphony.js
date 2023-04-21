export const compose = () => {
    const alphabet = ' abcdefghijklmnopqrstuvwxyz'
    document.addEventListener('keydown', (e) => {
        if (/^[a-zA-Z]\b/.test(e.key)) {
            const template = document.createElement('div');
            template.classList.add('note');
            template.innerHTML = e.key;
            template.style.backgroundColor = '#'+Math.floor(alphabet.indexOf(e.key)*645277).toString(16);
            document.body.appendChild(template);
        }
        if (e.key === 'Backspace') {
            let last = document.body.lastChild
            if (last != null) document.body.removeChild(last)
        }
        if (e.key === 'Escape') {
            document.body.innerHTML = ''
        }
    })
}