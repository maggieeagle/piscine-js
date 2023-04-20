export const generateLetters = () => {
    const alphabet = "ABCDEFGHIJKLMNPQRSTUVWXYZ"
    for (let i = 1, size=11; i <= 120; i++, size++) {
        const template = document.createElement('div');
        template.innerHTML = alphabet[getRandomInt(alphabet.length)];
        template.style.fontSize = size + 'px'
        template.style.fontWeight = 300 + 100*Math.floor(i/40)
        document.body.appendChild(template);
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
}