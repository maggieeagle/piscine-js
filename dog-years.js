function dogYears(planet, age) {
    let earth = age/31557600
    let r = 0
    switch(planet) {
        case 'earth':
            r = earth
            break;
        case 'mercury':
            r = earth/0.2408467
            break;
        case 'venus':
            r = earth/0.61519726
            break;
        case 'mars':
            r = earth/1.8808158
            break;
        case 'jupiter':
            r = earth/11.862615
            break;
        case 'saturn':
            r = earth/29.447498
            break;
        case 'uranus':
            r = earth/84.016846
            break;
        case 'neptune':
            r = earth/164.79132
    }
    return Math.round(r * 7 * 100) / 100
}