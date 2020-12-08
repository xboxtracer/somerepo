import cardClass from '../card_validation';
import {cardNumber} from '../cards';

test('check Visa card №1', () => {
  const cardsClass = new cardClass;
  let numb = cardNumber[0].cardNumbers[0];
  let result = cardsClass.paySystem(numb);
  const expected = 'vis';

  expect(result).toBe(expected);
});
test('check Visa card №2', () => {
  const cardsClass = new cardClass;
  let numb = cardNumber[0].cardNumbers[1];
  let result = cardsClass.paySystem(numb);
  const expected = 'vis';

  expect(result).toBe(expected);
});
test('check MasterCard card №1', () => {
  const cardsClass = new cardClass;
  let numb = cardNumber[1].cardNumbers[0];
  let result = cardsClass.paySystem(numb);
  const expected = 'mas';

  expect(result).toBe(expected);
});
test('check MasterCard card №2', () => {
  const cardsClass = new cardClass;
  let numb = cardNumber[1].cardNumbers[1];
  let result = cardsClass.paySystem(numb);
  const expected = 'mas';

  expect(result).toBe(expected);
});
test('check Discover card №1', () => {
  const cardsClass = new cardClass;
  let numb = cardNumber[3].cardNumbers[0];
  let result = cardsClass.paySystem(numb);
  const expected = 'dis';

  expect(result).toBe(expected);
});
test('check Discover card №2', () => {
  const cardsClass = new cardClass;
  let numb = cardNumber[3].cardNumbers[1];
  let result = cardsClass.paySystem(numb);
  const expected = 'dis';

  expect(result).toBe(expected);
});
test('check wrong card №1', () => {
  const cardsClass = new cardClass;
  let result = cardsClass.paySystem(1234567890);
  const expected = false;

  expect(result).toBe(expected);
});
test('check wrong card №2', () => {
  const cardsClass = new cardClass;
  let result = cardsClass.paySystem('dsg');
  const expected = false;

  expect(result).toBe(expected);
});