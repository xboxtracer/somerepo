import validateCard from './card_validation';
import iconArr from './card_img';
import addIconClass from './add_card_icon';
import choose from './choose_card_icon';

new addIconClass(iconArr)

let valid = new validateCard;

let checkForNumber = new choose();

console.log(valid.paySystem(4539294645806416));

const input = document.querySelector('.input__container input');
const btn = document.querySelector('.input__container button');
const wrongCard = document.querySelector('[data-name="wrong"]');
btn.addEventListener('click', () => {
    try {
        wrongCard.classList.add('hidden');
        let res = valid.paySystem(input.value);
        console.log(res);
        if (res) {
            checkForNumber.chosen(res + '.png');
        } else {
            wrongCard.classList.remove('hidden');
            document.querySelector('.icon__container .active').classList.remove('active');
        }
    } catch (e) {
        console.log(e);
    }
});