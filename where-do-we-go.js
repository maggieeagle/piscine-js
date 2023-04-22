import { places } from './where-do-we-go.data.js'

export const explore = () => {
    places.sort((a, b) => {
        // const aLat = parseFloat(a.coordinates.split(' ')[0]);
        // const bLat = parseFloat(b.coordinates.split(' ')[0]);
        const aLat = dmsToLatLon(a.coordinates)[0]
        const bLat = dmsToLatLon(b.coordinates)[0]
        return bLat - aLat; // Sort from north to south
    });
    
    places.forEach(place => {
        addSection(place.name.split(', ')[0].split(' ').join('-').toLowerCase())
    });

    addIndicator()
    addCompass()

    let lastScroll = 0
    document.addEventListener("scroll", (event) => {
        setLocation()
        if (lastScroll < window.scrollY) setCompass('S')
        else setCompass('N')
        lastScroll = window.scrollY
    });

    function addSection(name) {
        let template = document.createElement('section');
        template.style.background = "url('https://public.01-edu.org/subjects/where-do-we-go/where-do-we-go_images/" + name + ".jpg')"
        document.body.appendChild(template);
    }

    function addIndicator() {
        let template = document.createElement('a');
        template.classList.add('location')
        document.body.appendChild(template);
        setLocation()
    }

    function setLocation() {
        let indicator = document.querySelector('.location')
        let scroll = Math.ceil((window.scrollY - (window.innerHeight / 2)) / window.innerHeight)
        indicator.innerHTML = places[scroll].name + '\n' + places[scroll].coordinates
        indicator.style.color = places[scroll].color
        let coordinates = dmsToLatLon(places[scroll].coordinates)
        indicator.setAttribute('href', 'http://www.google.com/maps/place/' + coordinates[0] + ',' + coordinates[1])
        indicator.setAttribute('target', '_blank')
    }

    function addCompass() {
        let template = document.createElement('div');
        template.classList.add('direction')
        document.body.appendChild(template);
        setCompass('N')
    }

    function setCompass(side) {
        const compass = document.querySelector('.direction')
        compass.innerHTML = side
    }

    function dmsToLatLon(dms) {
        var parts = dms.split(/[^\d\w\.]+/);
        var lat = convertDMSToDD(parts[0], parts[1], parts[2], parts[3]);
        var lon = convertDMSToDD(parts[4], parts[5], parts[6], parts[7]);
        return [lat, lon];
    }

    function convertDMSToDD(degrees, minutes, seconds, direction) {
        var dd = parseInt(degrees) + parseFloat(minutes) / 60 + parseFloat(seconds) / 3600;
        if (direction == "S" || direction == "W") {
            dd = dd * -1;
        }
        return dd;
    }
}