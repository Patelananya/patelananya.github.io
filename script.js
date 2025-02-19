// Animated Text Effect
var typed = new Typed("#animated-name", {
    strings: ["Ananya Jannatha", "Machine Learning Enthusiast", "Web Developer"],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1500,
    loop: true
});

// Particles.js Background
// particlesJS("particles-js", {
//     particles: {
//         number: { value: 80, density: { enable: true, value_area: 800 } },
//         color: { value: "#ffffff" },
//         shape: { type: "circle" },
//         opacity: { value: 0.5 },
//         size: { value: 3, random: true },
//         line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
//         move: { enable: true, speed: 6 }
//     }
// });

particlesJS("particles-js", {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.5
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            },
            onclick: {
                enable: true,
                mode: "push"
            }
        }
    },
    retina_detect: true
});
