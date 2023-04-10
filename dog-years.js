function dogYears(planet, age) {
    let earth = age/31557600
    let r = 0
    switch(planet) {
        case 'earth':
            r = earth*7
            break;
        case 'mercury':
            r = earth*0.2408467/7
            break;
        case 'venus':
            r = earth*0.61519726/7
            break;
        case 'mars':
            r = earth*1.8808158/7
            break;
        case 'jupiter':
            r = earth*11.862615/7
            break;
        case 'saturn':
            r = earth*29.447498/7
            break;
        case 'uranus':
            r = earth*84.016846/7
            break;
        case 'neptune':
            r = earth*164.79132/7
            break;
    }
    return Math.round(r * 100) / 100
}