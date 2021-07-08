const lscroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    smartphone: {
        smooth: true
    }
});

window.addEventListener('load', () =>{
	setTimeout(() => {
		lscroll.update();
	}, 10000);
    
});

window.addEventListener("resize", ()=> {
    setTimeout(() => {
        lscroll.update();   
    }, 10000);
})