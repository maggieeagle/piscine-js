export const pick = () => {
    let hsl
    document.addEventListener('mousemove', (e) => {
        let value = Math.round(360 / window.innerWidth * e.pageX)
        let luminosity = Math.round(100 / window.innerHeight * e.pageY)
        hsl = 'hsl(' + value + ', 50%, ' + luminosity + '%)'
        document.body.style.background = hsl

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

            var axisX = document.createElementNS("http://www.w3.org/2000/svg", "line");
            axisX.setAttribute("x1", e.pageX);
            axisX.setAttribute("y1", 0);
            axisX.setAttribute("x2", e.pageX);
            axisX.setAttribute("y2", window.innerHeight);
            axisX.setAttribute("id", "axisX")

            svg.appendChild(axisX);

            var axisY = document.createElementNS("http://www.w3.org/2000/svg", "line");
            axisY.setAttribute("x1", 0);
            axisY.setAttribute("y1", e.pageY);
            axisY.setAttribute("x2", window.innerWidth);
            axisY.setAttribute("y2", e.pageY);
            axisY.setAttribute("id", "axisY")

            svg.appendChild(axisY);

            document.body.appendChild(svg);
        } else {
            axisX = document.querySelector("#axisX")
            axisX.setAttribute("x1", e.pageX);
            axisX.setAttribute("x2", e.pageX);

            axisY = document.querySelector("#axisY")
            axisY.setAttribute("y1", e.pageY);
            axisY.setAttribute("y2", e.pageY);
        }
    }
}