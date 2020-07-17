const slides = document.querySelectorAll('.js_slide');
const previous_slide = document.querySelector('.js_arrow_left');
const next_slide = document.querySelector('.js_arrow_right');
let count = 0;

function clickNext(){
    slides.forEach(current => current.style.display = 'none');
    count++;
    if(count > slides.length - 1){
        count = 0;
    }
    slides[count].style.display = 'block';

}

function clickPrevious(){
    slides.forEach(current => current.style.display = 'none');
    count--;
    if(count < 0){
        count = slides.length - 1;
    }
    slides[count].style.display = 'block';
}


next_slide.addEventListener('click', clickNext);
previous_slide.addEventListener('click', clickPrevious);


