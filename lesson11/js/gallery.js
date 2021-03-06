//Footer date
const mydate = document.querySelector('.current-date');
let d = new Date();

let w_names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let m_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let weekname = w_names[d.getDay()];
let monthname = m_names[d.getMonth()];

mydate.textContent = weekname + ", " + d.getDate() + " " + monthname + " " + d.getFullYear();


//Hamburger menu
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('.ham');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

//Lazyload
const images = document.querySelectorAll('[data-src]');

function preloadImage(img){
    const source = img.getAttribute('data-src');
    if (!source) {
        return;
    }

    img.src = source;
}

const options = {threshold: [.5]};

const io = new IntersectionObserver (
    (entries, io) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            else {
                preloadImage(entry.target);
                io.unobserve(entry.target);
            }
        });
    }, options
);

images.forEach(image => {
    io.observe(image);
});