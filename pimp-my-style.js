import { styles } from './pimp-my-style.data.js'

export const pimp = () => {
    const button = document.querySelector('.button')
    if (button.classList.length == 1) {
        button.classList.add(styles[0])
        return;
    }
    let length = button.classList.length
    if (length == styles.length + 1 && !button.classList.contains('unpimp')) {
        button.classList.add("unpimp")
        return;
    }
    if (!button.classList.contains('unpimp')) {
        let current = button.classList[length - 1]
        button.classList.add(styles[styles.indexOf(current) + 1])
    } else {
        if (length > 2) {
            let current = button.classList[length - 2]
            button.classList.remove(current)
        } else {
            button.classList.remove("unpimp")
        }
    }
}