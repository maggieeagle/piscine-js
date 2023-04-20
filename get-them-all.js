export const getArchitects = () => {
    const a = document.getElementsByTagName('a')
    const o = document.getElementsByTagName('span')
    return [Array.prototype.slice.call(a), Array.prototype.slice.call(o)]
}
export const getClassical = () => {
    const c = document.querySelectorAll('a.classical')
    const o = document.querySelectorAll('a:not(.classical)')
    return [Array.prototype.slice.call(c), Array.prototype.slice.call(o)]
}
export const getActive = () => {
    const a = document.querySelectorAll('a.classical.active')
    const o = document.querySelectorAll('a.classical:not(.active)')
    return [Array.prototype.slice.call(a), Array.prototype.slice.call(o)]
}
export const getBonannoPisano = () => {
    const pisano = document.querySelector('#BonannoPisano')
    const a = document.querySelectorAll('a.classical.active')
    return [pisano, Array.prototype.slice.call(a)]
}