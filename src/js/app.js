import validateCard from './card_validation';

let valid = new validateCard;

import americanExpress from '../img/american_express.png'
import dinercClub from '../img/diners_club.png'
import discover from '../img/discover.png'
import jcb from '../img/jcb.png'
import maestro from '../img/maestro.png'
import mastercard from '../img/mastercard.png'
import mir from '../img/mir.png'
import visa from '../img/visa.png'
const imgContainer = document.querySelector('.img__container')
imgContainer.innerHTML = `<img src="${jcb}" alt="">`


console.log(valid.paySystem(6385155275510786));