const titles=document.querySelectorAll('.js-accordion-title')
let activeTitle = 0

function display_accordion(event){
    if(activeTitle===0){
    const currentElement= event.target
    const container = currentElement.parentElement
    container.style.height= 'auto'
    activeTitle++
    return
  } else{
    const currentElement= event.target
    const container = currentElement.parentElement
    container.style.height= '22px'
    activeTitle--
      }
  }

  for(let i=0;i<titles.length;i++){
    const displayTitle=titles[i] 
    displayTitle.addEventListener('click', display_accordion)
  }