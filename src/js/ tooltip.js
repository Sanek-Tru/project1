const  inputsPopup = document.querySelectorAll('.js_input_popup')
const sendData = document.querySelector('.js_send')
const openWindow = document.querySelector('.js_open_button')


function deleteData(){
    inputsPopup.forEach(function (current){
            current.value = '';
            current.style.color = '#6e6e6e';
    });
}
openWindow.addEventListener('click', deleteData);


function pushHint(){
    inputsPopup.forEach(function (current){
        if(current.value === ''){
            current.value = 'Поле обязательно для заполнения';
            current.style.border = 'solid';
            current.style.color = '#dc7f7f';
        }
    });
}
sendData.addEventListener('click', pushHint);

for(let i = 0; i <= inputsPopup.length; i++){
    function deleteHint(){
            if(inputsPopup[i].value === 'Поле обязательно для заполнения'){
                inputsPopup[i].value = '';
                inputsPopup[i].style.color = '#6e6e6e';
            }
        }
    inputsPopup[i].addEventListener('click', deleteHint);
}




