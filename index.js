 window.addEventListener('load', () =>{
    const display = document.querySelector('.calculator-display');
    const keypadButtons = document.getElementsByClassName('keypad-button');

    const keypadButtonsArray = Array.from(keypadButtons);   

    keypadButtonsArray.forEach( button => {
        button.addEventListener('click', () => {
            calulator(button,display)
        })
    })
 });

 function calulator(button,display) {
    switch (button.innerHTML) {
    case 'C': 
        deleteAll(display);
        break;

    case '=': 
        calculate(display);
        break;

    default:
         update(display,button)
         break;
    }
 }

function calculate(display) {
    display.innerHTML = eval(display.innerHTML) 
}


function update(display, button) {
    if (display.innerHTML == 0) {
        display.innerHTML = ''
    }
    display.innerHTML = display.innerHTML + button.innerHTML
}

function deleteAll(display) {
    display.innerHTML = ''
}