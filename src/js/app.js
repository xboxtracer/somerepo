import validateCard from './card_validation';
import iconArr from './card_img';
import addIconClass from './add_card_icon';

let valid = new validateCard;

new addIconClass(iconArr)

console.log(valid.paySystem(6385155275510786));