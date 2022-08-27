class SimpleSlider{
    constructor({el, active}){
        this.slider = el instanceof HTMLElement ? el : document.querySelector(el);
        this.sliderItems = this.slider.querySelectorAll('.slider__item');
        this.active = active;
        this.sliderPagination = this.slider.querySelector('.slider__pagination');
        this.prev = this.slider.querySelector('.slider__prev');
        this.next = this.slider.querySelector('.slider__next');
        this.prev.addEventListener('click', () => this.move(this.prev));
        this.next.addEventListener('click', () => this.move(this.next));
        this.sliderPagination.innerHTML = '';
        for (let i = 0; i < this.sliderItems.length; i++) {
            let li = '<li></li>';
            this.sliderPagination.innerHTML += li;
        }
        this.dots = [...this.sliderPagination.children];
        this.dots.forEach(item => {
            item.addEventListener('click', (e) => this.clickDots(e));
        })
        this.setClass();
    }
    setClass(){
        this.sliderItems.forEach((item, i) => {
            item.classList.remove('active');
            this.dots[i].classList.remove('active');
    });
        this.sliderItems[this.active].classList.add('active'); 
        this.dots[this.active].classList.add('active');  
    }
    clickDots(e){
        let idx = this.dots.indexOf(e.target);
        this.active = idx;
        this.setClass();
    }
    move(btn){
        if(btn == this.prev){
            this.active--;
            if(this.active < 0) this.active = this.sliderItems.length -1; 
        }
        else if(btn == this.next){
            this.active++;
            if(this.active > this.sliderItems.length-1) this.active = 0;
        }
        this.setClass();
    }
}

const mySlider = new SimpleSlider({
    el: '.slider',
    active: 3
})
const mySlider2 = new SimpleSlider({
    el: '.slider2',
    active: 2
})
const mySlider3 = new SimpleSlider({
    el: '.slider3',
    active: 0
})