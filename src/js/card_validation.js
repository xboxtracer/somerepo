export default class validateCard {
    constructor() {
        this.regCollection = [
            { resultname: 'mir', regExp: /^22[0-9]{14}$/ },
            { resultname: 'vis', regExp: /^4[0-9]{12}(?:[0-9]{3})?/ },
            { resultname: 'mas', regExp: /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/ },
            { resultname: 'din', regExp: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/ },
            { resultname: 'ame', regExp: /^3[47][0-9]{13}$/ },
            { resultname: 'dis', regExp: /^6(?:011|5[0-9]{2})[0-9]{12}/ },
            { resultname: 'mae', regExp: /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/ },
            { resultname: 'jcb', regExp: /^(?:2131|1800|35\d{3})\d{11}/ }
        ]
    };
    luhnNumber(number) {
        number = String(number);

        let sum = parseInt(number.charAt(number.length - 1));
    
        for (let i = 0; i < number.length - 1; i++) {
            let value = parseInt(number.charAt(i));
    
            if (i % 2 === 0) {
                value *= 2;
            }
    
            if (value > 9) {
                value -= 9;
            }
    
            sum += value;
        }
    
        return sum % 10 === 0;
    }
    paySystem(val) {
        try {
            let validCardNumber = this.luhnNumber(val);
            if (validCardNumber) {
                for (let item of this.regCollection) {
                    if (item.regExp.test(val)) {
                        return item.resultname
                    }
                }
            } else {
                return false
            };
        } catch (e) {
            return e.message
        }
    };
};