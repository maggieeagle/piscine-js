import { colors } from './fifty-shades-of-cold.data.js'

export const generateClasses = () => {
    const template = document.createElement('style');
    colors.forEach(color => {
        template.innerHTML += `.` + color + ` {
            background: `+ color + `;
          }`
    });
    document.head.appendChild(template);
}

export const generateColdShades = () => {
    colors.forEach(color => {
        if (includes(color)) {
            const template = document.createElement('div');
            template.classList.add(color);
            template.innerHTML = color;
            document.body.appendChild(template);
        }
    });

    function includes(color) {
        if (color.includes('aqua') || color.includes('blue') || color.includes('turquoise') ||
            color.includes('green') || color.includes('cyan') ||
            color.includes('navy') || color.includes('purple')) return true
        return false
    }
}

export const choseShade = (shade) => {
    let divs = Array.prototype.slice.call(document.getElementsByTagName('div'))
    divs.forEach(div => {
        div.className = ''
        div.classList.add(shade)
    });
}