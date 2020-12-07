export default class chooseMethod {
    chosen(val) {
        const imgContainer = document.querySelectorAll('.card__icon');
        for ( let item of imgContainer ) {
            let somesxtr = item.dataset.id
            if (somesxtr === val) {
                item.classList.add('active');
            }
        }
    }
}