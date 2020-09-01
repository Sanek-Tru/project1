const openButton = document.querySelector('.js_open_button');
const popup_background = document.querySelector('.js_popup_background');
const popup_window = document.querySelector('.js_popup_window');
const button_close_popup = document.querySelector('.js-button_close_popup');


function openPopup(){
    popup_background.style.display = 'block';
    popup_window.style.display = 'block';
}

function closePopup(){
    popup_background.style.display = 'none';
    popup_window.style.display = 'none';
}


openButton.addEventListener('click', openPopup);
button_close_popup.addEventListener('click', closePopup);
popup_background.addEventListener('click', closePopup);