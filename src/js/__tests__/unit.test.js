import cardClass from '../card_validation';
import {cardNumber} from '../cards';

test.each([
    ['Visa card №1', cardNumber[0].cardNumbers[0], 'vis'],
    ['MasterCard card №1', cardNumber[1].cardNumbers[0], 'mas'],
    ['Discover card №1', cardNumber[3].cardNumbers[0], 'dis'],
    ['wrong card №1', 12334, false]
])(('check %s'), (_, input, expected) => {
    const cardsClass = new cardClass;
    expect(cardsClass.paySystem(input)).toBe(expected);
})