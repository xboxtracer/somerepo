import validateCard from './card_validation';
import iconArr from './card_img';
import addIconClass from './add_card_icon';
import choose from './choose_card_icon';

new addIconClass(iconArr)

let valid = new validateCard;

let checkForNumber = new choose();

const input = document.querySelector('.input__container input');
const btn = document.querySelector('.input__container button');
btn.addEventListener('click', ()=>{
    let res = valid.paySystem(input.value);
    // console.log(res);
    if(res) {
        checkForNumber.chosen(res + '.png');
    } else {

    };
});