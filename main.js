const container = document.getElementById('nav-container');
const svg = container.querySelector('svg');
const circle1 = svg.querySelectorAll('circle')[0];
const circle2 = svg.querySelectorAll('circle')[1];
const navLinks = container.querySelectorAll('nav a');

gsap.set(circle1, { trasnformOrigin: '50%' });
gsap.set(circle2, { trasnformOrigin: '50%' });

navLinks.forEach((navlink, index) => {
    navlink.addEventListener('click', (e) => {
        e.preventDefault();
        let tl1 = gsap.timeline({ paused: true });
        let tl2 = gsap.timeline({ paused: true, delay: 0.1 });

        tl1.to(circle1, {
            x: 100 * index,
            duration: 0.5,
            ease: Sine.easeInOut
        });
        tl1.to(circle1, {
            scaleX: 1.2,
            scaleY: 0.8,
            duration: 0.25,
            ease: Sine.easeInOut
        }, 0);
        tl1.to(circle1, {
            scaleX: 1,
            scaleY: 1,
            duration: 0.25,
            ease: Sine.easeInOut
        }, 0.25)

        tl2.to(circle2, {
            x: 100 * index,
            duration: 0.5,
            ease: Sine.easeInOut
        })
        tl2.to(circle2, {
            scaleX: 1.2,
            scaleY: 0.8,
            duration: 0.25,
            ease: Sine.easeInOut
        }, 0)
        tl2.to(circle2, {
            scaleX: 1,
            scaleY: 1,
            duration: 0.25,
            ease: Sine.easeInOut
        }, 0.25)

        tl1.play();
        tl2.play();
    })
})