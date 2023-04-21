export const pick = () => {
    let hsl
    document.addEventListener('mousemove', (e) => {
        let value = Math.round(360 / window.innerWidth * e.pageX)
        let luminosity = Math.round(100 / window.innerHeight * e.pageY)
        hsl = 'hsl(' + value + ', 50%, ' + luminosity + '%)'
        document.body.style.backgroundColor = hsl

        setDiv(hsl, 'hsl', 'bla')
        setDiv(value, 'hue', 'text')
        setDiv(luminosity, 'luminosity', 'text')

        setLines(e)
    })

    document.body.onclick = function() {
        document.execCommand("copy");
    }

    document.body.addEventListener("copy", (event) => {
        event.preventDefault();
        event.clipboardData.setData("text/plain", hsl);
    });

    function setDiv(innerHTML, ...classes) {
        let element = document.querySelector('.' + classes.join('.'))
        if (element == null) {
            const template = document.createElement('div');
            classes.forEach(c => {
                template.classList.add(c)
            });
            template.innerHTML = innerHTML;
            document.body.appendChild(template);
        } else {
            element.innerHTML = innerHTML
        }
    }

    function setLines(e) {
        if (document.querySelectorAll('line').length == 0) {
            var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svg.setAttribute("width", window.innerWidth);
            svg.setAttribute("height", window.innerHeight);

            var vertical = document.createElementNS("http://www.w3.org/2000/svg", "line");
            vertical.setAttribute("x1", e.pageX);
            vertical.setAttribute("y1", 0);
            vertical.setAttribute("x2", e.pageX);
            vertical.setAttribute("y2", window.innerHeight);
            vertical.setAttribute("id", "axisY")

            svg.appendChild(vertical);

            var horizontal = document.createElementNS("http://www.w3.org/2000/svg", "line");
            horizontal.setAttribute("x1", 0);
            horizontal.setAttribute("y1", e.pageY);
            horizontal.setAttribute("x2", window.innerWidth);
            horizontal.setAttribute("y2", e.pageY);
            horizontal.setAttribute("id", "axisX")

            svg.appendChild(horizontal);

            document.body.appendChild(svg);
        } else {
            vertical = document.querySelector("#axisY")
            vertical.setAttribute("x1", e.pageX);
            vertical.setAttribute("y1", 0);
            vertical.setAttribute("x2", e.pageX);
            vertical.setAttribute("y2", window.innerHeight);

            horizontal = document.querySelector("#axisX")
            horizontal.setAttribute("x1", 0);
            horizontal.setAttribute("y1", e.pageY);
            horizontal.setAttribute("x2", window.innerWidth);
            horizontal.setAttribute("y2", e.pageY);
        }
    }
}