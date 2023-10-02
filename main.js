// smooth slide
document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener("click", function(e){
        e.preventDefault(); 
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});


// elements slide
const sr = ScrollReveal({
    distance: '30px',
    duration: 1800,
    reset: true
});

sr.reveal(`.display__container`, {
    origin: 'top',
    interval: 150
})

sr.reveal(`.journey__container, .section__container`, {
    origin: 'left'
})

sr.reveal(`.banner__container`, {
    origin: 'right'
})