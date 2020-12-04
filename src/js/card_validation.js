export default class validateCard {
    constructor() {
        this.regCollection = [
            { resultname: 'Mir', regExp: /^22[0-9]{14}$/ },
            { resultname: 'Visa', regExp: /^4[0-9]{12}(?:[0-9]{3})?/ },
            { resultname: 'Mastercard', regExp: /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/ },
            { resultname: 'Diners club', regExp: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/ },
            { resultname: 'American Express', regExp: /^3[47][0-9]{13}$/ },
            { resultname: 'Discover', regExp: /^6(?:011|5[0-9]{2})[0-9]{12}/ },
            { resultname: 'InstaPayment', regExp: /^63[7-9][0-9]{13}$/ },
            { resultname: 'Maestro', regExp: /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/ },
            { resultname: 'JCB', regExp: /^(?:2131|1800|35\d{3})\d{11}/ }
        ]
    };
    luhnNumber(ccNum) {
        let len = ccNum.length;
        let bit = 1;
        let sum = 0;
        let val;

        while (len) {
            val = parseInt(ccNum.charAt(--len), 10);
            sum += (bit ^= 1) ? arr[val] : val;
        }

        return (sum && sum % 10) === 0;
    }
    paySystem(val) {
        let validCardNumber = this.luhnNumber(val)
        if (validCardNumber) {
            for (let item of this.regCollection) {
                console.log('afs')
                if (item.regExp.test(val)) {
                    return item.resultname
                }
            }
        } else {
            return false
        };
    };
};