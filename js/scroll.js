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
	}
    
});

window.addEventListener("resize", ()=> {
    setTimeout(() => {
        lscroll.update();   
    }, 10000);
})