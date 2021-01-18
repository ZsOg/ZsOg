const { to, fromTo, set } = gsap

document.querySelectorAll('.day-night').forEach(dayNight => {
    let toggle = dayNight.querySelector('.toggle'),
        svgLine = dayNight.querySelector('.line'),
        svgLineProxy = new Proxy({
            y: null
        }, {
            set(target, key, value) {
                target[key] = value
                if (target.y !== null) {
                    svgLine.innerHTML = getPath(target.y, .1925)
                }
                return true
            },
            get(target, key) {
                return target[key]
            }
        })

    svgLineProxy.y = 18

    toggle.addEventListener('click', e => {
        e.preventDefault()

        if (dayNight.classList.contains('animate')) {
            return
        }
        dayNight.classList.add('animate')

        let night = dayNight.classList.contains('night')

        to(dayNight, {
            keyframes: [{
                [night ? '--moon-y' : '--sun-y']: '-4px',
                duration: .25
            }, {
                [night ? '--moon-y' : '--sun-y']: '60px',
                duration: .2
            }, {
                [night ? '--sun-y' : '--moon-y']: '-4px',
                duration: .25,
                delay: .275,
                onStart() {
                    to(dayNight, {
                        '--new-percent': '100%',
                        '--line': night ? 'var(--day-line)' : 'var(--night-line)',
                        duration: .5
                    })
                }
            }, {
                [night ? '--sun-y' : '--moon-y']: '0px',
                duration: .5,
                ease: 'elastic.out(1, .5)',
                clearProps: true,
                onComplete() {
                    if (night) {
                        dayNight.classList.remove('night')
                    } else {
                        dayNight.classList.add('night')
                    }
                    dayNight.classList.remove('animate')
                }
            }]
        })

        to(svgLineProxy, {
            keyframes: [{
                y: 24,
                delay: .25,
                duration: .2
            }, {
                y: 12,
                duration: .2
            }, {
                y: 24,
                duration: .25
            }, {
                y: 18,
                duration: .5,
                ease: 'elastic.out(1, .5)'
            }]
        })

    })
})

function getPoint(point, i, a, smoothing) {
    let cp = (current, previous, next, reverse) => {
        let p = previous || current,
            n = next || current,
            o = {
                length: Math.sqrt(Math.pow(n[0] - p[0], 2) + Math.pow(n[1] - p[1], 2)),
                angle: Math.atan2(n[1] - p[1], n[0] - p[0])
            },
            angle = o.angle + (reverse ? Math.PI : 0),
            length = o.length * smoothing;
        return [current[0] + Math.cos(angle) * length, current[1] + Math.sin(angle) * length];
    },
        cps = cp(a[i - 1], a[i - 2], point, false),
        cpe = cp(point, a[i - 1], a[i + 1], true);
    return `C ${cps[0]},${cps[1]} ${cpe[0]},${cpe[1]} ${point[0]},${point[1]}`;
}

function getPath(update, smoothing) {
    let points = [
        [4, 18],
        [26, update],
        [48, 18]
    ],
        d = points.reduce((acc, point, i, a) => i === 0 ? `M ${point[0]},${point[1]}` : `${acc} ${getPoint(point, i, a, smoothing)}`, '');
    return `<path d="${d}" />`;
}